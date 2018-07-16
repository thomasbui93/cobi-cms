import { createAction } from 'redux-actions'

import * as action from '../constants/actions'
import { ICategoryItem } from '../reducers/state';
import { IRequestInfo } from '../reducers/filters';

export const requestCategories = (requestInfo?: IRequestInfo) => {
    return {
        type: action.REQUEST_CATEGORIES,
        payload: {
            requestInfo
        }
    }
}

export const doneUpdatingCategories = createAction(
    action.DONE_UPDATING_CATEGORIES,
    (categories: ICategoryItem[]) => categories
)

export const failUpdatingCategories = createAction(
    action.FAILED_UPDATING_CATEGORIES,
    (error: boolean) => error
)