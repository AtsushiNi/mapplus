export interface AuthModuleState {
  isLoading: boolean,
  isSignIn: boolean
}

export default class AuthModule {
  state: AuthModuleState = {
    isLoading: true,
    isSignIn: false
  }
}
