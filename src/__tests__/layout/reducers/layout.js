import { Map } from 'immutable';
import reducers from '../../../layout/reducers/layout';
import { LAYOUT_SIDEBAR_TOGGLE } from '../../../layout/constants/layout';

describe('layout reducers', () => {
  it('it should return initalState if given action type is not LAYOUT_SIDEBAR_TOGGLE', () => {
    const state  = 'test';
    const action = Map({
      type: 'test'
    })
    expect(reducers(state, action)).toBe(state)
  })

  it('should merge isMenuOpen from action to state', () => {
    const state  = Map({
      test: 'test',
      isMenuOpen: false
    });
    const isMenuOpen = true;
    const action = {
      type: LAYOUT_SIDEBAR_TOGGLE,
      isMenuOpen: isMenuOpen
    }
    expect(reducers(state, action).toJS()).toEqual({
      isMenuOpen: true,
      test: 'test'
    });
  })
})