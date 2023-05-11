import { createAction, createSlice } from '@reduxjs/toolkit';
import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import { HYDRATE } from 'next-redux-wrapper';
import type { RootState } from '#/src/store';

const TOKEN_KEY = 'AUTH_TOKEN';

type Role = 'ADMIN' | 'USER' | undefined;

type AuthState = {
  isAuth: boolean
  role: Role
};

export const initialState = {
  isAuth: !!getCookie(TOKEN_KEY),
  role: undefined,
} as AuthState;

const hydrate = createAction<RootState>(HYDRATE);

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, action: { payload: { token: string, role: Role} }) => {
      const { role, token } = action.payload;

      setCookie(TOKEN_KEY, token);

      state.role = role;
      state.isAuth = true;
    },

    logout: (state) => {
      deleteCookie(TOKEN_KEY);

      state.role = undefined;
      state.isAuth = false;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, { payload }) => ({
      ...state,
      ...payload,
    }));
  },
});

export default authSlice.reducer;

export const {
  login,
  logout,
} = authSlice.actions;
