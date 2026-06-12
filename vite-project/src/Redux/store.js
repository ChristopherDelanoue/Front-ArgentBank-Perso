
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './SigninSlice.js';

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
