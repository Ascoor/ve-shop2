import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const stockApi = createApi({
  reducerPath: 'stockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getStocks: builder.query({
      query: () => '/stocks',
    }),
    getStock: builder.query({
      query: id => `/stocks/${id}`,
    }),
  }),
});

export const { useGetStocksQuery, useGetStockQuery } = stockApi;
