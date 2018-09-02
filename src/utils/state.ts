interface InterfaceListState {
    items: any[]
    isLoading: boolean,
    error: boolean
}

export function composeErrorState(state: InterfaceListState) {
    return {
        ...state,
        isLoading: false,
        error: true
    }
}

export function composeLoadingState(state: InterfaceListState) {
    return {
        ...state,
        isLoading: true,
        error: false
    }
}