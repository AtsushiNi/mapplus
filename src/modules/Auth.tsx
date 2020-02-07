import { reducerWithInitialState } from 'typescript-fsa-reducers'
import actionCreatorFactory from 'typescript-fsa'
import { AuthActions } from '../containers/AuthContainer'
import { ReduxState } from '../store'
import * as React from 'react'
import { Text } from 'react-native'
import { Route, Redirect } from 'react-router-dom'

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
export type Props = ReduxState & AuthActions

export class Auth extends React.Component<Partial<Props>> {
  private isLoading: boolean = true

  componentDidMount() {
    this.props.refLogin()
    this.isLoading = false
  }

  render() {
    const { userInfo } = this.props
    const isLoading = this.isLoading

    return (
      (userInfo && userInfo.uuid)
        ? <Route children={this.props.children} />
        : (isLoading
            ? <Text>Loading</Text>
            : <Redirect to={'/login'} />
          )
    )
  }
}
