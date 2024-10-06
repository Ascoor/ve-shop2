
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';

// Create a store with the auth slice
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
