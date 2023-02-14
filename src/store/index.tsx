import { configureStore } from '@reduxjs/toolkit';
import user from './slices/userSlice';
import alertMessage from './slices/alertMessageSlice';
import filters from './slices/filtersSlice';

export const store = configureStore({
  reducer: { user, alertMessage, filters },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
