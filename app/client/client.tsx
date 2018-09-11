import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from './router'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'

const WrappedRouter: React.SFC = () => {
  const apolloClient = new ApolloClient({
    link: new HttpLink(),
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={apolloClient}>
      <Router />
    </ApolloProvider>
  )
}

ReactDOM.render(<WrappedRouter />, document.getElementById('app'))
