
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:8000/api',  // استخدام عنوان API Laravel
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
    getAscProducts: builder.query({
      query: () => "/products?sort=asc",
    }),
    getDescProducts: builder.query({
      query: () => "/products?sort=desc",
    }),
    getLimitedProducts: builder.query({
      query: () => "/products?limit=8",
    }),
    getWomenProducts: builder.query({
      query: () => "/products/category/women",
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetAscProductsQuery,
  useGetDescProductsQuery,
  useGetLimitedProductsQuery,
  useGetWomenProductsQuery,
} = productApi;
