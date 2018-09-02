import { takeEvery, put, call } from 'redux-saga/effects'
import { fetchCategories as fetchCategoriesApi } from '../../../services/api/categories'
import * as action from '../constants/actions'
import { Action } from 'redux-actions'
import { IRequestInfo } from '../reducers/filters';

export function* watchFetchCategories() {
    yield takeEvery(action.REQUEST_CATEGORIES, fetchCategories)
}

export function* fetchCategories(actionData: Action<IRequestInfo>): any {
    try {
        const categories = yield call(fetchCategoriesApi, actionData.payload)
        yield put({ type: action.DONE_UPDATING_CATEGORIES, payload: { items: categories.data } })
    } catch (error) {
        yield put({ type: action.FAILED_UPDATING_CATEGORIES, payload: { error } })
    }
}