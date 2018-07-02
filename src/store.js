import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import rootSaga from './saga'

export const history = createHistory()
const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
store.runSaga = sagaMiddleware.run
store.runSaga(rootSaga)
store.close = () => store.dispatch(END)

export default store