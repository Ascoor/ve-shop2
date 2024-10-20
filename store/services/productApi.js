import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://app.ve-shop.co/api',  // استخدام عنوان API Laravel
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
    getBrands: builder.query({
      query: () => "/brands",  // Assuming Laravel API provides this route
    }),
    getCategories: builder.query({
      query: () => "/categories",  // Assuming Laravel API provides this route
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetBrandsQuery,
  useGetCategoriesQuery,
} = productApi;
