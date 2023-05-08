import { configureStore, Middleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { createWrapper } from 'next-redux-wrapper';
import { api } from '../services/api';
import rtkQueryErrorHandler from '../services/rtkQueryErrorHandler';

const reducer = {
  [api.reducerPath]: api.reducer,
};

const middleware = (getDefaultMiddleware: () => Array<Middleware>) => getDefaultMiddleware()
  .concat(api.middleware)
  .concat(rtkQueryErrorHandler);

const store = configureStore({
  reducer,
  middleware,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const makeStore = () => configureStore({
  reducer,
  middleware,
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
