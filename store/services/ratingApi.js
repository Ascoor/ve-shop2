import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const ratingApi = createApi({
  reducerPath: 'ratingApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getRatings: builder.query({
      query: () => '/ratings',
    }),
    getRating: builder.query({
      query: id => `/ratings/${id}`,
    }),
  }),
});

export const { useGetRatingsQuery, useGetRatingQuery } = ratingApi;
