import * as React from 'react'
import { GetDrinker } from '../../queries/get-drinker/get-drinker'
import { RouteComponentProps } from 'react-router'
import { Header } from '../../components/header/header'
import { GetTransactionsOf } from '../../queries/get-transactions-of/get-transactions-of'

interface MatchParams {
  drinkerId: number
}

interface Props extends RouteComponentProps<MatchParams> {}

export class Drinker extends React.Component<Props> {
  render() {
    return (
      <>
        <Header />
        <GetDrinker id={this.props.match.params.drinkerId} />
        <GetTransactionsOf drinkerId={this.props.match.params.drinkerId} />
      </>
    )
  }
}
