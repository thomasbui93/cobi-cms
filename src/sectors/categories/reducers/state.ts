export interface ICategoryItem {
    id: string,
    title: string,
    description: string,
    image: string,
    postCount: number,
    lastEdit: Date
}

export interface ICategoriesState {
    isLoading: boolean,
    categories: ICategoryItem[],
    error: boolean
}