import { shallow } from 'enzyme'
import { Map } from 'immutable'
import * as React from 'react'
import { Header, mapStateToProps } from '../../../layout/components/Header'

describe('mapStateToProps', () => {
    it('should map state to isMenuOpen value', () => {
        const state = {
            layout: Map({ isMenuOpen: true})
        }
        const props = mapStateToProps(state);
        expect(props).toEqual({ isMenuOpen: true})
    })
})

describe('Header component', () => {
    it('should render component without crashing', () => {
        const openSideBar = () => {
            return;
        };
        const wrapper = shallow(<Header openSideBar={openSideBar} isMenuOpen={true}/>);
        expect(wrapper).toMatchSnapshot();
    })
})