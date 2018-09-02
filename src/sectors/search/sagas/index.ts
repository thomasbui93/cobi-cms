import { takeLatest, put, call } from 'redux-saga/effects'
import { quickAutocomplete } from '../../../services/api/autocomplete'
import * as action from '../constants/actions'
import { Action } from 'redux-actions'
import { InterfaceSearchBoxPayload } from '../reducers/state'

export function* watchFetchAutocomplete() {
    yield takeLatest(action.REQUESTING_AUTOCOMPLETE, fetchAutocomplete)
}

export function* fetchAutocomplete(actionData: Action<InterfaceSearchBoxPayload>): any {
    try {
        const data = yield call(quickAutocomplete, actionData.payload.queryValue)
        yield put({ type: action.DONE_REQUEST_AUTOCOMPLETE, payload: { items: data.items } })
    } catch (error) {
        yield put({ type: action.FAILED_REQUEST_AUTOCOMPLETE, payload: { error } })
    }
}