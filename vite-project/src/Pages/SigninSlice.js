
import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
        user: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    }
});

export const { setToken, logout } = SigninSlice.actions;
export default SigninSlice.reducer;