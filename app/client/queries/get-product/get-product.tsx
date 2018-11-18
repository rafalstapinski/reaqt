import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_PRODUCT from './get-product.graphql'
import { GQL } from '../../../typings/gql'

class GetProductQuery extends Query<GQL.GetProduct, GQL.GetProductInput> {}

interface GetProductProps extends GQL.GetProductInput {}

export const GetProduct: React.SFC<GetProductProps> = props => {
  const { id } = props

  return (
    <GetProductQuery query={GET_PRODUCT} variables={{ id }}>
      {({ loading, data, error }) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return <p>{data.getProduct.name}</p>
      }}
    </GetProductQuery>
  )
}
