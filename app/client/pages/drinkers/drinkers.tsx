import * as React from 'react'
import { GetDrinkers } from '../../queries/get-drinkers/get-drinkers'

export class Drinkers extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <>
        <GetDrinkers />
      </>
    )
  }
}
