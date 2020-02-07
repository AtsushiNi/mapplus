import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Navigation from './navigations'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
