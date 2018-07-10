import { Map } from 'immutable'
import { LAYOUT_SIDEBAR_TOGGLE } from '../../../layout/constants/layout'
import reducers from '../../../layout/reducers/layout'

describe('layout reducers', () => {
    it('it should return initalState if given action type is not LAYOUT_SIDEBAR_TOGGLE', () => {
        const state = Map({
            isMenuOpen: true
        });
        const action = {
            isMenuOpen: true,
            type: 'test'
        }
        expect(reducers(state, action)).toBe(state)
    })

    it('should merge isMenuOpen from action to state', () => {
        const state = Map({
            isMenuOpen: false
        });
        const isMenuOpen = true;
        const action = {
            isMenuOpen,
            type: LAYOUT_SIDEBAR_TOGGLE
        }
        expect(reducers(state, action).toJS()).toEqual({
            isMenuOpen: true
        });
    })
})