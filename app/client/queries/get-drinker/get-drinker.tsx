import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_DRINKER from './get-drinker.graphql'
import { GQL } from '../../../typings/gql'

class GetDrinkersQuery extends Query<GQL.GetDrinker, GQL.GetDrinkerInput> {}

interface GetDrinkerProps extends GQL.GetDrinkerInput {}

export const GetDrinker: React.SFC<GetDrinkerProps> = props => {
  const { id } = props

  return (
    <GetDrinkersQuery query={GET_DRINKER} variables={{ id }}>
      {({ loading, data, error }) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return <p>{data.getDrinker.name}</p>
      }}
    </GetDrinkersQuery>
  )
}
