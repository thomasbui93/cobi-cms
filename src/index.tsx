import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import 'reset-css';

import App from './App'
import registerServiceWorker from './registerServiceWorker';
import store, { history } from './store'
const target = document.getElementById('root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <App />
            </div>
        </ConnectedRouter>
    </Provider>,
    target
);
registerServiceWorker();
