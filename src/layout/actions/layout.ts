import { LAYOUT_SIDEBAR_TOGGLE } from '../constants/layout';

export const toggleSideBar = (isVisible: boolean) => {
    return {
        isMenuOpen: isVisible,
        type: LAYOUT_SIDEBAR_TOGGLE
    }
}