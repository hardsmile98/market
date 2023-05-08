import {
  createApi, fetchBaseQuery, retry,
} from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';
import { API_URL } from '../constants/config';
import { ProductQuery, Products } from '../types';
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
    GetReviews: builder.query({
      query: () => ({
        url: 'reviews',
      }),
      transformResponse: transformGetReviews,
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
});

export default api;

export const {
  useGetReviewsQuery,
  useGetProductsQuery,
  useGetProductQuery,
} = api;

export const {
  GetProduct,
  GetProducts,
  GetReviews,
} = api.endpoints;
