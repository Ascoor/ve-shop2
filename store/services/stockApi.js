
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store.ve-shop.co/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: () => "/stocks",
    }),
    getStock: builder.query({
      query: (id) => `/stocks/${id}`,
    }),
  }),
});

export const {
  useGetStocksQuery,
  useGetStockQuery,
} = stockApi;
