import { List, Map } from 'immutable'
export interface ICategoryShortState {
    title: string,
    description: string,
    image: string
}

export interface IPaginationState {
    start: number,
    end: number,
    current: number
}

export interface IFilterState {
    field: string,
    value: string | number
}

export interface ISortState {
    field: string,
    value: SortValue
}

export enum SortValue {
    ASC = 'ASC',
    DESC = 'DESC',
    NONE = 'NONE'
}

export interface ICategoriesListState {
    data: ICategoryShortState[],
    isError: boolean,
    isLoading:  boolean
} 

export interface ICategoriesState {
    categories: Map<string, boolean | ICategoryShortState[]>
    pagination: Map<string, number>,
    filters: List<IFilterState>
    sorts: List<ISortState>
}