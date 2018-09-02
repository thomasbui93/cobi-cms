import { all, fork } from 'redux-saga/effects'

import { watchFetchCategories } from './sectors/categories/sagas/index'
import { watchFetchAutocomplete } from './sectors/search/sagas/index'

export default function* root() {
    yield all([
        fork(watchFetchCategories),
        fork(watchFetchAutocomplete)
    ])
}