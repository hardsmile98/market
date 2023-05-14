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
  ChangePasswordDto,
  CheckResponse,
  CreateOrderDto,
  CreatePaymentDto,
  CreatingOrder,
  OrderDetail,
  Orders,
  Payment,
  ProductDto,
  ProductQuery,
  Products,
  Settings,
  UpdateOrderDto,
} from '../types';
import tagTypes from './tagTypes';
import {
  transformGetReviews,
  transformSettings,
  tranformOrder,
} from './transformResponse';

const createApi = buildCreateApi(
  coreModule(),
  reactHooksModule({ unstable__sideEffectsInRender: true }),
);

export const api = createApi({
  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/v1`,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    prepareHeaders(headers, { extra }: any) {
      const token = extra?.context?.cookies?.AUTH_TOKEN || getCookie('AUTH_TOKEN');

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
    ChangePassword: builder.mutation<null, ChangePasswordDto>({
      query: (dto) => ({
        url: 'auth/changePassword',
        method: 'POST',
        body: dto,
      }),
    }),

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

    CheckMe: builder.query<CheckResponse, null>({
      query: () => ({
        url: 'auth/check',
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

    UpdateProduct: builder.mutation<null, ProductDto>({
      query: (dto) => ({
        url: 'products/update',
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

    GetProduct: builder.query<ProductQuery, { id: number }>({
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

    GetSettings: builder.query({
      query: () => ({
        url: 'settings',
      }),
      transformResponse: transformSettings,
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

    GetPayments: builder.query<Array<Payment>, null>({
      query: () => ({
        url: 'payments',
      }),
      providesTags: [tagTypes.payments],
    }),

    AddPayment: builder.mutation<null, CreatePaymentDto>({
      query: (dto) => ({
        url: 'payments',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.payments],
    }),

    DeletePayment: builder.mutation<null, { id: number }>({
      query: (dto) => ({
        url: 'payments',
        method: 'DELETE',
        body: dto,
      }),
      invalidatesTags: [tagTypes.payments],
    }),

    CreateOrder: builder.mutation<CreatingOrder, CreateOrderDto>({
      query: (dto) => ({
        url: 'orders',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.orders],
    }),

    GetOrder: builder.query<OrderDetail, { uuid: string }>({
      query: ({ uuid }) => ({
        url: `orders/${uuid}`,
      }),
      transformResponse: tranformOrder,
      providesTags: [tagTypes.order],
    }),

    UpdateOrder: builder.mutation<null, UpdateOrderDto>({
      query: (dto) => ({
        url: 'orders/update',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.orders],
    }),

    DeleteOrder: builder.mutation<null, { uuid: string }>({
      query: (dto) => ({
        url: 'orders',
        method: 'DELETE',
        body: dto,
      }),
      invalidatesTags: [tagTypes.orders],
    }),

    GetOrders: builder.query<Orders, null>({
      query: () => ({
        url: 'orders',
      }),
      providesTags: [tagTypes.orders],
    }),

    CancelOrder: builder.mutation<null, { uuid: string }>({
      query: (dto) => ({
        url: 'orders/cancel',
        method: 'POST',
        body: dto,
      }),
      invalidatesTags: [tagTypes.order, tagTypes.orders],
    }),
  }),
  tagTypes: Object.values(tagTypes),
});

export default api;

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,

  useGetReviewsQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,

  useGetProductsQuery,
  useGetProductQuery,
  useDeleteProductMutation,
  useAddProductMutation,
  useUpdateProductMutation,

  useGetSettingsQuery,
  useUdpateSettingsMutation,

  useGetPaymentsQuery,
  useAddPaymentMutation,
  useDeletePaymentMutation,

  useCreateOrderMutation,
  useCancelOrderMutation,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  useGetOrderQuery,
  useGetOrdersQuery,
} = api;

export const {
  GetProduct,
  GetProducts,
  GetReviews,
  GetSettings,
  GetPayments,
  GetOrder,
  GetOrders,
  CheckMe,
} = api.endpoints;
