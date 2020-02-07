import React from 'react'
import { Props, authActions } from './Auth'
import { Redirect } from 'react-router-dom'
import { Button } from 'react-native'
import { Dispatch, Action } from 'redux'
import firebase from '../firebase'
import { setUserInfo } from '../containers/AuthContainer'
import { ReduxState } from '../store'
import { connect  } from 'react-redux'

class Login extends React.Component<Props> {
  render() {
    const { userInfo } = this.props
    return (
      userInfo && userInfo.uuid
        ? <Redirect to='/' />
        : <Button title='login' onPress={() => this.props.login} />
    )
  }
}

function mapDispatchToProps(dispatch: Dispatch<Action<string>>) {
  return {
    login: () => {
      firebase.auth().signInWithEmailAndPassword('test@qmail.com', 'password')
        .then(response => {
          dispatch(authActions.login(setUserInfo(response.user)))
        })
    }
  }
}

function mapStatusToProps(state: ReduxState) {
  return Object.assign({}, { userInfo: state.userInfo })
}

export default connect(
  mapStatusToProps,
  mapDispatchToProps
)(Login)
