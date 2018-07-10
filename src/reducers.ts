import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import layoutReducer from './layout/reducers/layout';

export default combineReducers({
    layout: layoutReducer,
    router: routerReducer
})