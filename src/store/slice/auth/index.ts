/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  value: boolean
  token: string
}

const initialState: AuthState = {
  value: false,
  token: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<AuthState>) => {
      state.value = action.payload.value
      state.token = action.payload.token
    },
  },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer
