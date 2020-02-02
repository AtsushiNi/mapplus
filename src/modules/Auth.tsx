import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { AuthActions } from '../containers/AuthContainer'
import { ReduxState } from '../store'
import * as React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'

// actions
const actionCreator = actionCreatorFactory()

export const authActions = {
  login: actionCreator<UserInfo>('auth/login'),
  logout: actionCreator('auth/logout')
}

// reducer
export interface UserInfo {
  displayName?: string | null,
  email?: string | null,
  uuid?: string | null
}

const initialState: UserInfo = {}

export const authReducer = reducerWithInitialState<UserInfo>(initialState)
  .case(authActions.login, ({}, amount) => {
    return Object.assign({}, amount)
  })
  .case(authActions.logout, () => {
    return Object.assign({}, initialState)
  })

// component
type Props = ReduxState & AuthActions

export class Auth extends React.Component<Partial<Props>> {
  componentDidMount() {
    this.props.refLogin()
  }

  render() {
    const { userInfo } = this.props

    return (
      <View style={styles.container}>
        <Text>
          You: {userInfo && userInfo.uuid ? userInfo.displayName : '.env書こうな'}
        </ Text>
        {
          userInfo && userInfo.uuid ? (
            <Button title="Google Logout" onPress={this.props.logout} />
          ) : (
            <Button title="Google Login" onPress={this.props.login} />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
