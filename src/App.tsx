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

export default function App() {
  const Stack = createStackNavigator()

  const SignedInStack = createStackNavigator()

  const SignedInStackScreen = () => {
    return (
      <SignedInStack.Navigator>
        <SignedInStack.Screen name='Home' component={HomeScreen} />
        <SignedInStack.Screen name='Detail' component={DetailScreen} />
      </SignedInStack.Navigator>
    )
  }

  const SignedOutStack = createStackNavigator()

  const SignedOutStackScreen = () => {
    return (
      <SignedOutStack.Navigator>
        <SignedOutStack.Screen name='Signin' component={SigninScreen} />
        <SignedOutStack.Screen name='Signup' component={SignupScreen} />
      </SignedOutStack.Navigator>
    )
  }

  initializeFirebase()

  const { isLoading, isSignin } = authModule.state

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoading
            ? (<Stack.Screen name='Loading' component={LoadingScreen} />)
            : isSignin
              ? (<Stack.Screen name='SignedIn' component={SignedInStackScreen} />)
              : (<Stack.Screen name='SignedOut' component={SignedOutStackScreen} />)
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
