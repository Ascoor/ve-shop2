import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    // جلب جميع الفئات
    getCategories: builder.query({
      query: () => '/categories',
    }),
    // جلب فئة واحدة حسب معرفها
    getCategory: builder.query({
      query: (id) => `/categories/${id}`,
    }),
    // إضافة فئة جديدة
    addCategory: builder.mutation({
      query: (newCategory) => ({
        url: '/categories',
        method: 'POST',
        body: newCategory,
      }),
    }),
    // تحديث فئة موجودة
    updateCategory: builder.mutation({
      query: ({ id, updatedCategory }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: updatedCategory,
      }),
    }),
    // حذف فئة
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categoryApi;
