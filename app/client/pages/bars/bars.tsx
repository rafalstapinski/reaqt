import * as React from 'react'
import { GetBars } from '../../queries/get-bars/get-bars'
import { Header } from '../../components/header/header'

export class Bars extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <Header />
        <GetBars />
      </>
    )
  }
}
