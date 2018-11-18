import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_PRODUCTS from './get-products.graphql'
import { GQL } from '../../../typings/gql'

class GetProductsQuery extends Query<GQL.GetProducts, {}> {}

export const GetProducts: React.SFC = () => {
  return (
    <GetProductsQuery query={GET_PRODUCTS}>
      {({ loading, data, error }) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return (
          <p>
            {'Multiple products '}
            {data.getProducts[0].name + ' ' + data.getProducts[1].name}
          </p>
        )
      }}
    </GetProductsQuery>
  )
}
