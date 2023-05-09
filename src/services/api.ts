import {
  createApi, fetchBaseQuery, retry,
} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { API_URL } from '../constants/config';
import {
  AddReviewDto,
  AuthDto,
  AuthResponse,
  ProductQuery,
  Products,
} from '../types';
import tagTypes from './tagTypes';
import {
  transformGetReviews,
} from './transformResponse';

export const api = createApi({
  reducerPath: 'api',

  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: `${API_URL}/v1`,
      credentials: 'include',
    }),
    { maxRetries: 2 },
  ),

  // eslint-disable-next-line consistent-return
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    Login: builder.mutation<AuthResponse, AuthDto>({
      query: (dto) => ({
        url: 'auth/login',
        method: 'POST',
        body: dto,
      }),
    }),

    Register: builder.mutation<AuthResponse, AuthDto>({
      query: (dto) => ({
        url: 'auth/register',
        method: 'POST',
        body: dto,
      }),
    }),

    GetReviews: builder.query({
      query: () => ({
        url: 'reviews',
      }),
      transformResponse: transformGetReviews,
      providesTags: [tagTypes.reviews],
    }),

    AddReview: builder.mutation<null, AddReviewDto>({
      query: (dto) => ({
        url: 'reviews',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.reviews],
    }),

    GetProduct: builder.query<ProductQuery, { id: string }>({
      query: ({ id }) => ({
        url: `products/${id}`,
      }),
    }),

    GetProducts: builder.query<Products, null>({
      query: () => ({
        url: 'products',
      }),
    }),
  }),
  tagTypes: Object.values(tagTypes),
});

export default api;

export const {
  useLoginMutation,
  useRegisterMutation,

  useGetReviewsQuery,
  useAddReviewMutation,

  useGetProductsQuery,
  useGetProductQuery,
} = api;

export const {
  GetProduct,
  GetProducts,
  GetReviews,
  AddReview,
} = api.endpoints;
