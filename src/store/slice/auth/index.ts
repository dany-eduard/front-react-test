/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  isAuthenticated: boolean
  token: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.token = action.payload.token
    },
  },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
