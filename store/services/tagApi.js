
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const tagApi = createApi({
  reducerPath: "tagApi",
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://store.ve-shop.co/api',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getTags: builder.query({
      query: () => "/tags",
    }),
    getTag: builder.query({
      query: (id) => `/tags/${id}`,
    }),
  }),
});

export const {
  useGetTagsQuery,
  useGetTagQuery,
} = tagApi;
