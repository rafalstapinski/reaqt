import * as React from 'react'
import { Header } from '../../components/header/header'

export const NotFound: React.SFC = () => {
  return (
    <>
      <Header />
      <p>what you're looking for doesn't exist</p>
    </>
  )
}
