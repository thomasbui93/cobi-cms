import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import layoutReducer from './layout/reducers/layout';

export default combineReducers({
    router: routerReducer,
    layout: layoutReducer
})