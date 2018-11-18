import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_BARS from './get-bars.graphql'
import { GQL } from '../../../typings/gql'
import ReactTable from 'react-table'

class GetBarsQuery extends Query<GQL.GetBars, {}> {}

export const GetBars: React.SFC = () => {
  return (
    <GetBarsQuery query={GET_BARS}>
      {({ loading, data, error }) => {
        const columns = [
          { Header: 'ID', accessor: '_id' },
          { Header: 'Name', accessor: 'name' },
          { Header: 'Address', accessor: 'address' },
          { Header: 'City', accessor: 'city' },
          { Header: 'State', accessor: 'state' },
          {
            Header: 'Opens',
            accessor: 'opens',
            Cell: row => {
              const hours = Math.floor(row.original.opens / 60)
              const minutes = row.original.opens % 60
              return (
                <span>
                  {hours + ':' + (minutes === 0 ? '0' : '') + minutes}
                </span>
              )
            }
          },
          {
            Header: 'Closes',
            accessor: 'closes',
            Cell: row => {
              const hours = Math.floor(row.original.closes / 60)
              const minutes = row.original.closes % 60
              return (
                <span>
                  {hours + ':' + (minutes === 0 ? '0' : '') + minutes}
                </span>
              )
            }
          }
        ]

        if (loading) return <ReactTable loading={true} columns={columns} />
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        const onRowClick = ({}, rowInfo, {}, {}) => {
          return {
            onClick: e => {
              location.href = '/bars/' + rowInfo.original._id
            }
          }
        }

        return (
          <ReactTable
            data={data.getBars}
            columns={columns}
            getTdProps={onRowClick}
          />
        )
      }}
    </GetBarsQuery>
  )
}
