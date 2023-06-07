import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
	  user: {
      name: null,
      email: null,
      model: null
    },
    token: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
        state.isLoggedIn = true
        state.user = action.payload
    },
    logout: (state) => {
        state.isLoggedIn = false
        state.user = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer