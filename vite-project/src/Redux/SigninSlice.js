
import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem("token") || null,
        user: null,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        updateUserName: (state, action) => {
            if (state.user) {
                state.user.userName = action.payload;
            }
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        }
    }
});

export const { setToken, updateUserName,logout } = SigninSlice.actions;
export default SigninSlice.reducer;