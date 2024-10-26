import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => '/orders',
    }),
    getOrder: builder.query({
      query: id => `/orders/${id}`,
    }),
  }),
});

export const { useGetOrdersQuery, useGetOrderQuery } = orderApi;
