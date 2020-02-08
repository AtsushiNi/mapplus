import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Navigation from './navigations'
import { createAppContainer } from 'react-navigation'

export default class App extends React.Component {
  render () {
    const AppContainer = createAppContainer(Navigation)

    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}
