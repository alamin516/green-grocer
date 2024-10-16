import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: null,
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userRegistration: (state, action) => {
            state.token = action.payload.token
        },
        userLogin: (state, action) => {
            state.token = action.payload.accessToken;
            state.user = action.payload.user
        },
        userLogout: (state) => {
            state.token = null;
            state.user = null
        }
    }
})
export const {userRegistration, userLogin, userLogout} = authSlice.actions

export default authSlice.reducer;

