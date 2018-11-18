import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_DRINKERS from './get-drinkers.graphql'
import { GQL } from '../../../typings/gql'
import ReactTable from 'react-table'

class GetDrinkersQuery extends Query<GQL.GetDrinkers, {}> {}

export const GetDrinkers: React.SFC = () => {
  return (
    <GetDrinkersQuery query={GET_DRINKERS}>
      {({ loading, data, error }) => {
        const columns = [
          { Header: 'ID', accessor: '_id' },
          { Header: 'Name', accessor: 'name' },
          { Header: 'Address', accessor: 'address' },
          { Header: 'City', accessor: 'city' },
          { Header: 'State', accessor: 'state' }
        ]

        if (loading) return <ReactTable loading={true} columns={columns} />
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        const onRowClick = ({}, rowInfo, {}, {}) => {
          return {
            onClick: e => {
              location.href = '/drinkers/' + rowInfo.original._id
            }
          }
        }

        return (
          <ReactTable
            data={data.getDrinkers}
            columns={columns}
            getTdProps={onRowClick}
          />
        )
      }}
    </GetDrinkersQuery>
  )
}
