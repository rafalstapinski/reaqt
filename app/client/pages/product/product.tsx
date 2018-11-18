import * as React from 'react'
import { GetProduct } from '../../queries/get-product/get-product'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
  productId: number
}

interface Props extends RouteComponentProps<MatchParams> {}

export class Product extends React.Component<Props> {
  render() {
    return (
      <>
        <GetProduct id={this.props.match.params.productId} />
      </>
    )
  }
}
