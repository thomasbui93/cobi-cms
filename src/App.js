import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import NotFoundPage from './pages/static/NotFoundPage';
import SideMenu from './layout/components/SideMenu';
import Header from './layout/components/Header';

const App = () => (
  <BrowserRouter>
    <div className="cobi-cms" >
      <Header/>
      <div className="cobi-body">
        <SideMenu/>
        <div className='main-content'>
          <Switch>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

export default App;
