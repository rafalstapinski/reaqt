import * as React from 'react'
import { GetProducts } from '../../queries/get-products/get-products'
import { Header } from '../../components/header/header'

export class Products extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Header />
        <GetProducts />
      </>
    )
  }
}
