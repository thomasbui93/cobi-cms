export interface IFilterItem {
    title: string,
    value: string | number
}

export enum SortItemValues{
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface ISortItem {
    title: string,
    value: SortItemValues
}

export interface IPagination {
    current: number,
    itemPerPage: number,
    firstPage: number,
    lastPage: number
}

export interface IRequestInfo {
    filters: IFilterItem[],
    sorters: ISortItem[],
    pagination: IPagination
}