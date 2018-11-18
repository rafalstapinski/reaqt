import * as React from 'react'
import { GetBar } from '../../queries/get-bar/get-bar'
import { GetTransactionsAt } from '../../queries/get-transactions-at/get-transactions-at'
import { RouteComponentProps } from 'react-router'
import { Header } from '../../components/header/header'

interface MatchParams {
  barId: number
}

interface Props extends RouteComponentProps<MatchParams> {}

export class Bar extends React.Component<Props> {
  render() {
    return (
      <>
        <Header />
        <GetBar id={this.props.match.params.barId} />
        <GetTransactionsAt barId={this.props.match.params.barId} />
      </>
    )
  }
}
