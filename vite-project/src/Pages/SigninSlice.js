
import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem("token") || null,
        isAuthenticated: !!localStorage.getItem("token"),
        user: null, // On garde une place pour les infos profil plus tard
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