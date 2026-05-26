
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
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.user = action.payload.user;
        },
        updateUserName: (state, action) => {
            if (state.user) {
                state.user.userName = action.payload; // action.payload sera juste le nouveau texte
            }
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    }
});

export const { setToken, updateUserName,logout } = SigninSlice.actions;
export default SigninSlice.reducer;