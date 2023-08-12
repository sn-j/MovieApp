import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl, token } from './constant'





export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),

  endpoints: (builder) => ({
    getMovieByCategory: builder.query({
      query: (query) => ({
        url: `/movie/${query.path}`,
        headers: {
          Authorization: token
        },
        params: {
          page: query.page
        }
      })
    }),
  })
});

export const { useGetMovieByCategoryQuery } = movieApi;