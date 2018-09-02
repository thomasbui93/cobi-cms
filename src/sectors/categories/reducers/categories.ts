import { ICategoriesState } from './state'
import * as actionType from '../constants/actions'
import { composeLoadingState, composeErrorState } from '../../../utils/state'

const initialState: ICategoriesState = {
    isLoading: false,
    items: [],
    error: false
}

export default (state = initialState, { type, payload }: { type: string, payload: any }): ICategoriesState => {
    switch (type) {
        case actionType.DONE_UPDATING_CATEGORIES:
            return {
                ...state,
                error: false,
                isLoading: false,
                items: payload.categories
            }
        case actionType.FAILED_UPDATING_CATEGORIES:
            return composeErrorState(state)
        case actionType.REQUEST_CATEGORIES:
            return composeLoadingState(state)
        default:
            return state
    }
}