import * as React from 'react'
import { GetProducts } from '../../queries/get-products/get-products'

export class Products extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <GetProducts />
      </>
    )
  }
}
