import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { initializeFirebase } from './firebase'
import store from './store'
import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import SigninScreen from './screens/SigninScreen'
import SignupScreen from './screens/SignupScreen'
import LoadingScreen from './screens/LoadingScreen'
import { authModule } from './modules'

export default class App extends React.Component {

  Stack = createStackNavigator()

  SignedInStack = createStackNavigator()

  SignedInStackScreen = () => {
    return (
      <this.SignedInStack.Navigator>
        <this.SignedInStack.Screen name='Home' component={HomeScreen} />
        <this.SignedInStack.Screen name='Detail' component={DetailScreen} />
      </this.SignedInStack.Navigator>
    )
  }

  SignedOutStack = createStackNavigator()

  SignedOutStackScreen = () => {
    return (
      <this.SignedOutStack.Navigator>
        <this.SignedOutStack.Screen name='Signin' component={SigninScreen} />
        <this.SignedOutStack.Screen name='Signup' component={SignupScreen} />
      </this.SignedOutStack.Navigator>
    )
  }

  render () {
    initializeFirebase()

    const { isLoading, isSignin } = authModule

    return (
      <Provider store={store}>
        <NavigationContainer>
          <this.Stack.Navigator>
            {isLoading
              ? (<this.Stack.Screen name='Loading' component={LoadingScreen} />)
              : isSignin
                ? (<this.Stack.Screen name='SignedIn' component={this.SignedInStackScreen} />)
                : (<this.Stack.Screen name='SignedOut' component={this.SignedOutStackScreen} />)
            }
          </this.Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}
