import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_BARS from './get-bars.graphql'
import { GQL } from '../../../typings/gql'

class GetBarsQuery extends Query<GQL.GetBars, {}> {}

export const GetBars: React.SFC = () => {
  return (
    <GetBarsQuery query={GET_BARS}>
      {({ loading, data, error }) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return (
          <p>
            {'Multiple bars'}
            {data.getBars[0].name + ' ' + data.getBars[1].name}
          </p>
        )
      }}
    </GetBarsQuery>
  )
}
