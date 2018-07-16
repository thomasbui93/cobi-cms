import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { NotFoundPage } from './scenes/static/NotFoundPage'
import { CategoriesPage } from './scenes/categories/CategoriesPage'

const App = () => (
    <BrowserRouter>
        <div className="cobi-cms" >
            <div>
                <div className='main-content'>
                    <Switch>
                        <Route path='/' component={CategoriesPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </div>
        </div>
    </BrowserRouter>
)

export default App;
