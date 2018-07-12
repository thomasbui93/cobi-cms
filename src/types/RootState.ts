import { Map } from 'immutable'
import { ICategoriesState } from './categories/CategoriesState'

export interface IRootState {
    layout: Map<string, boolean>,
    categories: ICategoriesState
}