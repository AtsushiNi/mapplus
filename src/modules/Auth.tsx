import { reducerWithInitialState } from 'typescript-fsa-reducers'

export interface UserInfo {
  displayName?: string | null,
  email?: string | null,
  uuid?: string | null
}

const initialState: UserInfo = {}

export const authReducer = reducerWithInitialState<UserInfo>(initialState)


