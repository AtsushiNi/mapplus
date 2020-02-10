import { actionCreatorFactory } from 'typescript-fsa'
import { asyncFactory } from 'typescript-fsa-redux-thunk'
import firebase from 'firebase'
import { NavigationActions } from 'react-navigation'
import { CommonActions } from '@react-navigation/native'
import User from '../models/user'
import FluxAction from '../FluxAction'

// actions
const actionCreator = actionCreatorFactory('userModule')
const asyncActionCreator = asyncFactory(actionCreator)

// state
export interface UserModuleState {
  user: User
}

export default class UserModule {
  state: UserModuleState = {
    user: null
  }

  getUser = asyncActionCreator<{}, { user: User }>(
    'getUser',
    async(params, dispatch) => {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          dispatch(NavigationActions.navigate({ routeName: 'SignedIn' }))
          return User.fromJson(user)
        } else {
          dispatch(NavigationActions.navigate({ routeName: 'SignedIn' }))
          return null
        }
      })
      return null
    }
  )

  reduce = (state: UserModuleState = this.state, action: FluxAction): UserModuleState => {
    switch (action.type) {
      case this.getUser.async.done.type:
        return { ...state, ...action.payload }
      default:
        return state
    }
  }
}
