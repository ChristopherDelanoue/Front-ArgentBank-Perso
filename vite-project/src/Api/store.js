
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Pages/SigninSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
