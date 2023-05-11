import { createAction, createSlice } from '@reduxjs/toolkit';
import { setCookie, deleteCookie } from 'cookies-next';
import { HYDRATE } from 'next-redux-wrapper';
import type { RootState } from '#/src/store';
import { Role } from '#/src/types';

const TOKEN_KEY = 'AUTH_TOKEN';

type AuthState = {
  isAuth: boolean
  role: Role | undefined
};

export const initialState = {
  isAuth: false,
} as AuthState;

const hydrate = createAction<RootState>(HYDRATE);

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    login: (state, action: { payload: { token: string, role: Role } }) => {
      const { role, token } = action.payload;

      setCookie(TOKEN_KEY, token);

      state.role = role;
      state.isAuth = true;
    },

    setRole: (state, action: { payload: { role: Role } }) => {
      const { role } = action.payload;

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
      ...payload.auth,
    }));
  },
});

export default authSlice.reducer;

export const {
  login,
  logout,
  setRole,
} = authSlice.actions;
