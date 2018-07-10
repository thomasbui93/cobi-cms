import { Map } from 'immutable'
import { LAYOUT_SIDEBAR_TOGGLE } from './../constants/layout'

export const initialState = Map({
    isMenuOpen: false
});

interface ILayoutAction {
    type: string,
    isMenuOpen: boolean
}

export default (state = initialState, action: ILayoutAction) => {
    switch (action.type) {
        case LAYOUT_SIDEBAR_TOGGLE:
            return state.set('isMenuOpen', action.isMenuOpen);
        default:
            return state;
    }
} 