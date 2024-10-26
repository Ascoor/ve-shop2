import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const brandApi = createApi({
  reducerPath: 'brandApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getBrands: builder.query({
      query: () => '/brands',
    }),
    getBrand: builder.query({
      query: id => `/brands/${id}`,
    }),
  }),
});

export const { useGetBrandsQuery, useGetBrandQuery } = brandApi;
