import { Map } from 'immutable';
import { LAYOUT_SIDEBAR_TOGGLE } from './../constants/layout';

export const initialState = Map({
  isMenuOpen: false
});

export default (state = initialState , action) => {
  switch(action.type) {
    case LAYOUT_SIDEBAR_TOGGLE:
      return state.set('isMenuOpen', action.isMenuOpen);
    default:
      return state;
  }
} 