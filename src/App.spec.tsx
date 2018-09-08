import * as React from 'react'
import * as ReactDOM from 'react-dom'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router'
import { Provider } from 'react-redux'
import App from './App'

it('renders without crashing', () => {
    const div = document.createElement('div')
    const mockStore = configureStore()
    const store = mockStore({
        autocomplete: {},
        categoryList: {
            items: [],
            error: false,
            isLoading: false
        }
      })
    ReactDOM.render(
        <Provider store={store}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </Provider>,
        div)
})