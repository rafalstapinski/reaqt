import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_TRANSACTIONS_AT from './get-transactions-at.graphql'
import { GQL } from '../../../typings/gql'
import ReactTable from 'react-table'

class GetTransactionsAtQuery extends Query<
  GQL.GetTransactionsAt,
  GQL.GetTransactionsAtInput
> {}

interface GetTransactionAtProps extends GQL.GetTransactionsAtInput {}

export const GetTransactionsAt: React.SFC<GetTransactionAtProps> = props => {
  const { barId } = props

  return (
    <GetTransactionsAtQuery query={GET_TRANSACTIONS_AT} variables={{ barId }}>
      {({ loading, data, error }) => {
        const columns = [
          { Header: 'ID', accessor: '_id' },
          { Header: 'Total', accessor: 'total' },
          { Header: 'Timestamp', accessor: 'timestamp' },
          { Header: 'Drinker', accessor: 'drinkerName' }
        ]

        if (loading) return <ReactTable loading={true} columns={columns} />
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return <ReactTable data={data.getTransactionsAt} columns={columns} />
      }}
    </GetTransactionsAtQuery>
  )
}
