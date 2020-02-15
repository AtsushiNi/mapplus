export interface AuthModuleState {
  isLoading: boolean,
  isSignin: boolean
}

export default class AuthModule {
  state: AuthModuleState = {
    isLoading: true,
    isSignin: false
  }
}
