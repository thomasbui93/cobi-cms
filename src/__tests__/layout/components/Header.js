import React from 'react';
import { Header, mapDispatchToProps, mapStateToProps } from '../../../layout/components/Header';
import { shallow, render, mount } from 'enzyme';

describe('mapStateToProps', () => {
  it('should map state to isMenuOpen value', ()=> {
    const state = {
      layout: { isMenuOpen: true, sample: 'test'}
    }
    const props = mapStateToProps(state);
    expect(props).toEqual({ isMenuOpen: true})
  })
})

describe('mapDispatchToProps', () => {
  it('return an object that include function openSideBar', ()=> {
    const dispatch = () => true;
    const dispatchProps = mapDispatchToProps(dispatch);
    expect(dispatchProps).toHaveProperty('openSideBar')
    expect(typeof dispatchProps.openSideBar).toBe('function')
  })
})

describe('Header component', () => {
  it('should render component without crashing', ()=> {
    const openSideBar = () => {};
    const classes = {
      root: {
        flexGrow: 1,
      },
      flex: {
        flex: 1,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
    }
    const wrapper = shallow(
      <Header openSideBar={openSideBar} isMenuOpen={true} classes={classes}/>
    );
    expect(wrapper).toMatchSnapshot();
  })
})