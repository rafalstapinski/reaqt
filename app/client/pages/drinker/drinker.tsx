import * as React from 'react'
import { GetDrinker } from '../../queries/get-drinker/get-drinker'
import { RouteComponentProps } from 'react-router'

interface MatchParams {
  drinkerId: string
}

interface Props extends RouteComponentProps<MatchParams> {}

export class Drinker extends React.Component<Props> {
  render() {
    return (
      <>
        <GetDrinker id={12} />
      </>
    )
  }
}
