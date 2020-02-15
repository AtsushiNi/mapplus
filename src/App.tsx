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
  // サインイン中のScreen
  const SignedInStack = createStackNavigator()

  const SignedInStackScreen = () => {
    return (
      <SignedInStack.Navigator>
        <SignedInStack.Screen name='Home' component={HomeScreen} />
        <SignedInStack.Screen name='Detail' component={DetailScreen} />
      </SignedInStack.Navigator>
    )
  }

  // サインアウト後のスクリーン(Auth関連の画面)
  const SignedOutStack = createStackNavigator()

  const SignedOutStackScreen = () => {
    return (
      <SignedOutStack.Navigator>
        <SignedOutStack.Screen name='Signin' component={SigninScreen} />
        <SignedOutStack.Screen name='Signup' component={SignupScreen} />
      </SignedOutStack.Navigator>
    )
  }

  // RootのScreen(ローディング画面、サインイン中、サインアウト後)
  const RootStack = createStackNavigator()

  const RootStackScreen = () => {
    return (
      <RootStack.Navigator>
        {isLoading
          ? (<RootStack.Screen name='Loading' component={LoadingScreen} />)
          : isSignin
            ? (<RootStack.Screen name='SignedIn' component={SignedInStackScreen} />)
            : (<RootStack.Screen name='SignedOut' component={SignedOutStackScreen} />)
        }
      </RootStack.Navigator>
    )
  }

  // firebaseの設定
  initializeFirebase()

  const { isLoading, isSignin } = authModule.state

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  )
}
