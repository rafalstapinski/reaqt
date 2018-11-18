import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_PRODUCTS from './get-products.graphql'
import { GQL } from '../../../typings/gql'
import ReactTable from 'react-table'

class GetProductsQuery extends Query<GQL.GetProducts, {}> {}

export const GetProducts: React.SFC = () => {
  return (
    <GetProductsQuery query={GET_PRODUCTS}>
      {({ loading, data, error }) => {
        const columns = [
          { Header: 'ID', accessor: '_id' },
          { Header: 'Name', accessor: 'name' },
          {
            Header: 'Distributor Price',
            accessor: 'price',
            Cell: row => <span>{'$' + row.original.price}</span>
          },
          {
            Header: 'Is Beer',
            accessor: 'isBeer',
            Cell: row => <span>{row.original.isBeer ? 'Yes' : 'No'}</span>
          }
        ]

        if (loading) return <ReactTable loading={true} columns={columns} />
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        const onRowClick = ({}, rowInfo, {}, {}) => {
          return {
            onClick: e => {
              location.href = '/products/' + rowInfo.original._id
            }
          }
        }

        return (
          <ReactTable
            data={data.getProducts}
            columns={columns}
            getTdProps={onRowClick}
          />
        )
      }}
    </GetProductsQuery>
  )
}
