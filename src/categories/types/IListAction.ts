export interface IListAction<T> {
    type: string,
    isError?: boolean,
    isLoading?: boolean,
    data?: T[]
}