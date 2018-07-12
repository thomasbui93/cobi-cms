import { Map } from 'immutable'
import { ICategoryShortState } from './../../../types/categories/CategoriesState'
import { IListAction } from './../../types/IListAction'

export const initialState = Map({
    data: [],
    isError: false,
    isLoading: false,
})

export default (state = initialState, action: IListAction<ICategoryShortState>): Map<string, any> => {
    switch (action.type) {
        case 'CATEGORIES_LIST_TOGGLE_LOADING':
            return typeof action.isLoading === 'undefined' ?
                state : state.set('isLoading', action.isLoading);
        case 'CATEGORIES_LIST_TOGGLE_ERROR':
            return typeof action.isError === 'undefined' ?
                state : state.set('isError', action.isError);
        case 'CATEGORIES_LIST_UPDATE_DATA':
            return typeof action.data === 'undefined'?
                state : state.set('data', action.data);
        default:
            return state;
    }
} 