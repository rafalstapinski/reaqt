import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound } from './pages/not-found/not-found'
import { Students } from './pages/students/students'

export const Router: React.SFC<{}> = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={Students} />
          <Route exact={true} path='/students' component={Students} />
          <Route path='/' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
