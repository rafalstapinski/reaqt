import * as React from 'react'
import { GetDrinkers } from '../../queries/get-drinkers/get-drinkers'
import { Header } from '../../components/header/header'

export class Drinkers extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Header />
        <GetDrinkers />
      </>
    )
  }
}
