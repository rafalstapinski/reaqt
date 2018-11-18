import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_TRANSACTIONS_OF from './get-transactions-of.graphql'
import { GQL } from '../../../typings/gql'
import ReactTable from 'react-table'

class GetTransactionsOfQuery extends Query<
  GQL.GetTransactionsOf,
  GQL.GetTransactionsOfInput
> {}

interface GetTransactionOfProps extends GQL.GetTransactionsOfInput {}

export const GetTransactionsOf: React.SFC<GetTransactionOfProps> = props => {
  const { drinkerId } = props

  return (
    <GetTransactionsOfQuery
      query={GET_TRANSACTIONS_OF}
      variables={{ drinkerId }}
    >
      {({ loading, data, error }) => {
        const columns = [
          { Header: 'ID', accessor: '_id' },
          { Header: 'Total', accessor: 'total' },
          { Header: 'Timestamp', accessor: 'timestamp' },
          { Header: 'Bar', accessor: 'barName' }
        ]

        if (loading) return <ReactTable loading={true} columns={columns} />
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return <ReactTable data={data.getTransactionsOf} columns={columns} />
      }}
    </GetTransactionsOfQuery>
  )
}
