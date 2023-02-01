import { configureStore } from '@reduxjs/toolkit';
import authReducer from './state_management/user/authSlice.js';
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});
