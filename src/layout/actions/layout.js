/* @flow */
import { LAYOUT_SIDEBAR_TOGGLE } from '../constants/layout';

export const toggleSideBar = ( isVisible : boolean ) => {
    return {
        type: LAYOUT_SIDEBAR_TOGGLE,
        isMenuOpen: isVisible
    }
}