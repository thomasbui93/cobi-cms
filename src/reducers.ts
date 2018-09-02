import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import categoryList from './sectors/categories/reducers/categories' 
import autocomplete from './sectors/search/reducers/autocomplete' 

export default combineReducers({
    router: routerReducer,
    categoryList,
    autocomplete
})