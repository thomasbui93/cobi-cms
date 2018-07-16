import { ICategoriesState } from './state'
import * as actionType from '../constants/actions'

const initialState: ICategoriesState = {
    isLoading: false,
    categories: [],
    error: false
}

export default (state = initialState, { type, payload }: { type: string, payload: any }): ICategoriesState => {
    switch (type) {
        case actionType.DONE_UPDATING_CATEGORIES:
            return {
                ...state,
                error: false,
                isLoading: false,
                categories: payload.categories
            }
        case actionType.FAILED_UPDATING_CATEGORIES:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        case actionType.REQUEST_CATEGORIES:
            return {
                ...state,
                isLoading: true,
                error: false,
            }
        default:
            return state
    }
}