import {
  buildCreateApi,
  coreModule,
  fetchBaseQuery, reactHooksModule,
} from '@reduxjs/toolkit/query/react';
import { getCookie } from 'cookies-next';
import { HYDRATE } from 'next-redux-wrapper';
import { API_URL } from '../constants/config';
import {
  AddReviewDto,
  AuthDto,
  AuthResponse,
  ProductDto,
  ProductQuery,
  Products,
  Settings,
} from '../types';
import tagTypes from './tagTypes';
import {
  transformGetReviews,
} from './transformResponse';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true }),
);

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/v1`,
    prepareHeaders(headers) {
      const token = getCookie('AUTH_TOKEN');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
    credentials: 'include',
  }),

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

    DeleteReview: builder.mutation<null, { id: number }>({
      query: (dto) => ({
        url: 'reviews',
        method: 'DELETE',
        body: dto,
      }),
      invalidatesTags: [tagTypes.reviews],
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

    AddProduct: builder.mutation<null, ProductDto>({
      query: (dto) => ({
        url: 'products',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.products],
    }),

    DeleteProduct: builder.mutation<null, { id: number }>({
      query: (dto) => ({
        url: 'products',
        method: 'DELETE',
        body: dto,
      }),
      invalidatesTags: [tagTypes.products],
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
      providesTags: [tagTypes.products],
    }),

    GetSettings: builder.query<Settings, null>({
      query: () => ({
        url: 'settings',
      }),
      providesTags: [tagTypes.settings],
    }),

    UdpateSettings: builder.mutation<null, Settings>({
      query: (dto) => ({
        url: 'settings',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.settings],
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
  useDeleteReviewMutation,

  useGetProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useAddProductMutation,

  useGetSettingsQuery,
  useUdpateSettingsMutation,
} = api;

export const {
  GetProduct,
  GetProducts,
  GetReviews,
  GetSettings,
} = api.endpoints;
