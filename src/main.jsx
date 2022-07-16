import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ApolloClient, ApolloProvider, InMemoryCache, HttpLink, gql} from '@apollo/client'

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${import.meta.env.VITE_DB_HOST}`
  })
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)