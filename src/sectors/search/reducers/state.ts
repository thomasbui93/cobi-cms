export interface InterfaceAutocompleteItem {
    title: string,
    id: string,
    description?: string,
    thumbnail?: string
}

export interface InterfaceSearchBoxAutocompleteItem {
    item: InterfaceAutocompleteItem
}

export interface InterfaceSearchBoxProps {
    items: InterfaceAutocompleteItem[],
    isLoading: boolean,
    error: boolean
}

export interface InterfaceSearchBoxPayload {
    queryValue: string
}

export interface InterfaceSearchBoxState {
    queryValue: string
}