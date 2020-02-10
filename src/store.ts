import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { NavigationState } from 'react-navigation'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import thunk from 'redux-thunk'
import Navigation from './navigations'
import UserModuleState from './modules/UserModule'
import { userModule } from './modules'

export interface ReduxState {
  navigation?: NavigationState
  userModule?: UserModuleState
}

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    navigationModule: createNavigationReducer(Navigation),
    userModule: userModule.reduce
  }),
  composeEnhancer(applyMiddleware(thunk))
)

export default store
