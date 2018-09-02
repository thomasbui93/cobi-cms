import { InterfaceSearchBoxProps } from './state'
import * as actionType from '../constants/actions'
import { composeLoadingState, composeErrorState} from '../../../utils/state'

const initialState: InterfaceSearchBoxProps = {
    isLoading: false,
    items: [],
    error: false
}

export default (state = initialState, { type, payload }: { type: string, payload: any }): InterfaceSearchBoxProps => {
    switch (type) {
        case actionType.DONE_REQUEST_AUTOCOMPLETE:
            return {
                ...state,
                error: false,
                isLoading: false,
                items: payload.items
            }
        case actionType.FAILED_REQUEST_AUTOCOMPLETE:
            return composeErrorState(state)
        case actionType.REQUESTING_AUTOCOMPLETE:
            return composeLoadingState(state)
        default:
            return state
    }
}