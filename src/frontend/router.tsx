import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './pages/about'
import Home from './pages/home'
import NotFound from './pages/not-found'
import Students from './pages/students'

export const Router: React.SFC<{}> = () => {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/about" component={About} />
          <Route exact={true} path="/students" component={Students} />
          <Route exact={true} path="/owk" />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Router
