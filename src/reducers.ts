import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import categoryList from './sectors/categories/reducers/categories' 

export default combineReducers({
    router: routerReducer,
    categoryList,
})