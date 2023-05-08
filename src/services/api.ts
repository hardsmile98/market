import {
  createApi, fetchBaseQuery, FetchArgs, BaseQueryApi,
} from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/config';
import { ProductQuery, Products } from '../types';
import {
  transformGetReviews,
} from './transformResponse';

const customBaseQuery = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions : {[x: string]: unknown},
) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: `${API_URL}/v1`,
    credentials: 'include',
  });

  const result = await baseQuery(args, api, extraOptions);

  return result;
};

export const api = createApi({
  reducerPath: 'api',

  baseQuery: customBaseQuery,

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
