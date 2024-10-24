
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store.ve-shop.co/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
    }),
    getOrder: builder.query({
      query: (id) => `/orders/${id}`,
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderQuery,
} = orderApi;
