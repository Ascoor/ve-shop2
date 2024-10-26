import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const reviewApi = createApi({
  reducerPath: 'reviewApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getReviews: builder.query({
      query: () => '/reviews',
    }),
    getReview: builder.query({
      query: id => `/reviews/${id}`,
    }),
  }),
});

export const { useGetReviewsQuery, useGetReviewQuery } = reviewApi;
