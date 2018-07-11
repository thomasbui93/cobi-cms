import { shallow } from 'enzyme'
import { Map } from 'immutable'
import * as React from 'react'
import { mapStateToProps, SideMenu } from '../../../layout/components/SideMenu'

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
        const hideSideBar = () => {
            return;
        };
        const wrapper = shallow(<SideMenu openSideBar={openSideBar} isMenuOpen={true} hideSideBar={hideSideBar}/>);
        expect(wrapper).toMatchSnapshot();
    })
})