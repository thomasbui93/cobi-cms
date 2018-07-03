import reducers from '../../../layout/reducers/layout';
import { LAYOUT_SIDEBAR_TOGGLE } from '../../../layout/constants/layout';

describe('layout reducers', () => {
  it('it should return initalState if given action type is not LAYOUT_SIDEBAR_TOGGLE', () => {
    const state  = 'test';
    const action = {
      type: 'test'
    }
    expect(reducers(state, action)).toBe(state)
  })

  it('should merge isMenuOpen from action to state', () => {
    const state  = {
      test: 'test'
    };
    const isMenuOpen = true;
    const action = {
      type: LAYOUT_SIDEBAR_TOGGLE,
      isMenuOpen: isMenuOpen
    }
    expect(reducers(state, action)).toEqual({
      isMenuOpen: true,
      test: 'test'
    });
  })
})