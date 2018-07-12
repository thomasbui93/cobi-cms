import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import Header from './layout/components/Header'
import SideMenu from './layout/components/SideMenu'
import { CategoriesPage } from './scenes/categories/CategoriesPage'
import NotFoundPage from './scenes/static/NotFoundPage'

const AppBody = styled.div`
    background-color: white;
    padding: 1rem 2rem;
`

const App = () => (
    <BrowserRouter>
        <div className="cobi-cms" >
            <Header />
            <SideMenu />
            <AppBody>
                <div className='main-content'>
                    <Switch>
                        <Route path='/' component={CategoriesPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </AppBody>
        </div>
    </BrowserRouter>
)

export default App;
