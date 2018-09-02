import { createAction } from 'redux-actions'

import * as action from '../constants/actions'

export const requestAutocomplete = (queryValue: string) => {
    return {
        type: action.REQUESTING_AUTOCOMPLETE,
        payload: {
            queryValue
        }
    }
}

export const doneRequestAutocomplete = createAction(
    action.DONE_REQUEST_AUTOCOMPLETE,
    (items: any[]) => items
)

export const failRequestAutocomplete = createAction(
    action.FAILED_REQUEST_AUTOCOMPLETE,
    (error: boolean) => error
)