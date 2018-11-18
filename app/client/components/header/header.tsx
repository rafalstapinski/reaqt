import * as React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className='row'>
      <nav className='navbar navbar-default'>
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav'>
            <li>
              <Link to='/bars'>Bars</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/drinkers'>Drinkers</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
