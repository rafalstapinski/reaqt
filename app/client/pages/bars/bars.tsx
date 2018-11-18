import * as React from 'react'
import { GetBars } from '../../queries/get-bars/get-bars'

export class Bars extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <GetBars />
      </>
    )
  }
}
