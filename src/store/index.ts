import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { api } from '../services/api';
import rtkQueryErrorHandler from '../services/rtkQueryErrorHandler';
import authReducer from './slices/auth';

export const makeStore = (context: any) => configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        context: context.req || context.ctx?.req,
      },
    },
  }).concat(
    api.middleware,
    rtkQueryErrorHandler,
  ),
});

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: false, // process.env.NODE_ENV === 'development'
});
