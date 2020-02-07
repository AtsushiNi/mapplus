import React from 'react'
import { View, Button, SafeAreaView } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'

// 各コンポーネント
import HomeContainer from './containers/HomeContainer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Loading from './components/Loading'

// アプリのメイン画面
const HomeTab = createBottomTabNavigator(
  {
    Home: { screen: createStackNavigator({ Home: { screen: HomeContainer } })}
  }
)

// ログイン済み時の画面。HomeとDrawerからなる
const SignedIn = createDrawerNavigator(
  {
    Home: { screen: HomeTab },
    component: (props: any) => (
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <DrawerItems {...props} />
            <Button title='Logout' onPress={ () => props.navigation.navigate('SignedOut') } />
        </SafeAreaView>
      </View>
    )
  }
)

// 未ログイン時の画面。SignUpもしくはSignIn
const SignedOut = createStackNavigator(
  {
    SignUp: { screen: SignUp },
    SignIn: { screen: SignIn }
  }
)

// SwitchNavigatorの定義
const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      SignedIn: SignedIn,
      SignedOut: SignedOut,
      Loading: Loading
    },
    {
      initialRouteName: 'Loading'
    }
  )
)

export default Navigation
