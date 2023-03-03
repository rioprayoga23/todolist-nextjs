import { Todos } from "@/pages/_app";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const todosApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["TODOS"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todos[], number>({
      query: (startData) => `/todos?_start=${startData}&_limit=10`,
      providesTags: ["TODOS"],
    }),
    createTodos: builder.mutation<Todos, Todos>({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["TODOS"],
    }),
    updateTodos: builder.mutation<Todos, Todos>({
      query: (todo) => ({
        url: `/todos/${todo.id}`,
        method: "PATCH",
        body: todo,
      }),
      invalidatesTags: ["TODOS"],
    }),
    deleteTodos: builder.mutation<Todos, number>({
      query: (id) => ({
        url: `/todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TODOS"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useUpdateTodosMutation,
  useDeleteTodosMutation,
  useCreateTodosMutation,
  util: { getRunningQueriesThunk },
} = todosApi;

export const { getTodos } = todosApi.endpoints;
