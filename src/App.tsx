import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './layout/components/Header'
import NotFoundPage from './scenes/static/NotFoundPage'

const App = () => (
  <BrowserRouter>
      <div className="cobi-cms" >
          <Header />
          <div className="cobi-body">
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
