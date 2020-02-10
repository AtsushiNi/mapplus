import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Navigation from './navigations'
import { createAppContainer } from 'react-navigation'
import { initializeFirebase } from './firebase'

export default class App extends React.Component {
  render () {
    initializeFirebase()

    const AppContainer = createAppContainer(Navigation)

    return (
      <Provider store={store}>
        <AppContainer style={{height:50, width: 50, backgroundColor: 'black'}}/>
      </Provider>
    )
  }
}
