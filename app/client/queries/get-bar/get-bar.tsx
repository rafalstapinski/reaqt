import * as React from 'react'
import { Query } from 'react-apollo'
import * as GET_BAR from './get-bar.graphql'
import { GQL } from '../../../typings/gql'

class GetBarQuery extends Query<GQL.GetBar, GQL.GetBarInput> {}

interface GetBarProps extends GQL.GetBarInput {}

export const GetBar: React.SFC<GetBarProps> = props => {
  const { id } = props

  return (
    <GetBarQuery query={GET_BAR} variables={{ id }}>
      {({ loading, data, error }) => {
        if (loading) return <p>Loading</p>
        if (error) return <p>error</p>
        if (!data) return <p>no data</p>

        return <p>{data.getBar.name}</p>
      }}
    </GetBarQuery>
  )
}
