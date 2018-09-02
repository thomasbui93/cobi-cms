import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MENU_ITEMS } from './services/constants'

import { NotFoundPage } from './scenes/static/NotFoundPage'
import { CategoriesPage } from './scenes/categories/CategoriesPage'
import { GlobalHeader } from './core/header/GlobalHeader'

const App = () => (
    <BrowserRouter>
        <div className="cobi-cms" >
            <div>
                <GlobalHeader threads={MENU_ITEMS}/>
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
