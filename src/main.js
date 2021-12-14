import { createApp } from 'vue'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import { setContext } from 'apollo-link-context'
import App from './App.vue'
import Header from './components/Header'
import router from './router'

const httpLink = createHttpLink({
  uri: 'https://mision-tic-api-gate-way.herokuapp.com/'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem('tokenAccess') || ''
    }
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

// eslint-disable-next-line new-cap
const apolloProvider = new createApolloProvider({
  defaultClient: apolloClient
})

createApp(App)
  .use(router)
  .component('myHeader', Header)
  .use(apolloProvider)
  .mount('#app')
