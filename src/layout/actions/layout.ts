import { LAYOUT_SIDEBAR_TOGGLE } from '../constants/layout';
import { ILayoutAction } from '../types/ILayoutAction'

export const toggleSideBar = (isVisible: boolean): ILayoutAction => {
    return {
        isMenuOpen: isVisible,
        type: LAYOUT_SIDEBAR_TOGGLE
    }
}