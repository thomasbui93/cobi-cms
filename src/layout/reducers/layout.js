import { LAYOUT_SIDEBAR_TOGGLE } from './../constants/layout';

const initialState = {
    isMenuOpen: false
}

export default (state = initialState , action) => {
    switch(action.type) {
        case LAYOUT_SIDEBAR_TOGGLE:
            return {
                ...state,
                isMenuOpen: action.isMenuOpen
            }
        default:
            return state;
    }
} 