import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { NotFound } from './pages/not-found/not-found'
import { Drinkers } from './pages/drinkers/drinkers'
import { Drinker } from './pages/drinker/drinker'
import { Bars } from './pages/bars/bars'
import { Bar } from './pages/bar/bar'
import { Product } from './pages/product/product'
import { Products } from './pages/products/products'

export const Router: React.SFC<{}> = () => {
  return (
    <BrowserRouter>
      <div className='container-fluid'>
        <Switch>
          <Route exact path='/' component={Drinkers} />
          <Route exact={true} path='/drinkers/:drinkerId' component={Drinker} />
          <Route exact={true} path='/bars/:barId' component={Bar} />
          <Route exact={true} path='/products/:productId' component={Product} />
          <Route exact={true} path='/drinkers' component={Drinkers} />
          <Route exact={true} path='/bars' component={Bars} />
          <Route exact={true} path='/products' component={Products} />
          <Route path='/' component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}
