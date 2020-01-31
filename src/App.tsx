import React from 'react'
import AuthContainer from './containers/AuthContainer'
import { Provider } from 'react-redux'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <AuthContainer />
    </Provider>
  );
}
