import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import UserModuleState from './modules/UserModule'
import { userModule } from './modules'

export interface ReduxState {
  userModule?: UserModuleState
}

const composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({
    userModule: userModule.reduce
  }),
  composeEnhancer(applyMiddleware(thunk))
)

export default store
