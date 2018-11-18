import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_DRINKERS from './get-drinkers.graphql'
import { GQL } from '../../../typings/gql'

class GetDrinkersQuery extends Query<GQL.GetDrinkers, {}> {}

export const GetDrinkers: React.SFC = () => {
  return (
    <GetDrinkersQuery query={GET_DRINKERS}>
      {({ loading, data, error }) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return (
          <p>
            {'Multiple drinkers'}
            {data.getDrinkers[0].name + ' ' + data.getDrinkers[1].name}
          </p>
        )
      }}
    </GetDrinkersQuery>
  )
}
