import * as React from 'react'
import { GetProduct } from '../../queries/get-product/get-product'
import { RouteComponentProps } from 'react-router'
import { Header } from '../../components/header/header'

interface MatchParams {
  productId: number
}

interface Props extends RouteComponentProps<MatchParams> {}

export class Product extends React.Component<Props> {
  render() {
    return (
      <>
        <Header />
        <GetProduct id={this.props.match.params.productId} />
      </>
    )
  }
}
