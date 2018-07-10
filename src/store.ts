import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './saga'

export const history = createHistory()
const initialState = {}
const enhancers:any = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
]

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store:any = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)
store.runSaga = sagaMiddleware.run
store.runSaga(rootSaga)
store.close = () => store.dispatch(END)

export default store