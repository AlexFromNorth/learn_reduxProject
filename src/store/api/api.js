import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// добавить .env
const API_URL = "http://localhost:4300/recipes";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Recipe"],
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (builder) => ({
    getRecipes: builder.query({
      //добавление сортировки по id в обратную сторону
      query: () => "/?_sort=id&_order=desc",
      // query: () => "/",
      providesTags: () =>[{
        type: 'Recipe'
      }]
    }),
  }),
});

export const { useGetRecipesQuery } = api;
