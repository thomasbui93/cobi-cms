import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import configureStore from 'redux-mock-store'
import { GlobalHeader } from './GlobalHeader'
import { mount } from 'enzyme'
import { SearchBox } from '../../sectors/search/components/SearchBox'

describe('GlobalHeader', () => {
  const mockStore = configureStore()
  const store = mockStore({
    autocomplete: {
      items: [],
      error: false,
      isLoading: false
    }
  })

  it('should render successfully with suffient data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <GlobalHeader threads={[]} />
      </Provider>,
    div
    )
  })

  it('should contain SearchBox component, logo and menu', () => {
    const globalHeader = mount(
      <Provider store={store}>
        <GlobalHeader threads={[]} />
      </Provider>
    );
    expect(globalHeader.find(SearchBox).length).toBe(1);
    expect(globalHeader.find('.logo').length).toBe(1);
    expect(globalHeader.find('.menu').length).toBe(1);
  })

  it('should renders menu links', () => {
    const links = [
      {
        title: 'Menu',
        href: 'href'
      },
      {
        title: 'Menu 2',
        href: 'href 2'
      }
    ]
    const globalHeader = mount(
      <Provider store={store}>
        <MemoryRouter>
          <GlobalHeader threads={links} />
        </MemoryRouter>
      </Provider>
    );
    expect(globalHeader.find('.menu__item').length).toBe(links.length)
  })
})