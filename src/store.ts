import { combineReducers, createStore } from 'redux'
import { UserInfo, authReducer } from './modules/Auth'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import Navigation from './navigations'

export type ReduxState = {
  userInfo: UserInfo
}

const store = createStore(
  combineReducers<ReduxState>({
    navigationModule: createNavigationReducer(Navigation),
    userModule: authReducer
  })
)

export default store
