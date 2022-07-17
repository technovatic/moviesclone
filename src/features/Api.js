import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useParams } from "react-router-dom";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),

  endpoints: (builder) => {
    const API_KEY = "e41e10a70ecb26587607640ae2112868";
    return {
      getDiscover: builder.query({
        query: () => ({
          url: `/discover/movie?api_key=${API_KEY}&with_network=123&language=en-US`,
          method: "GET",
        }),
      }),

      getTopRated: builder.query({
        query: () => ({
          url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
          method: "GET",
        }),
      }),

      getTrending: builder.query({
        query: () => ({
          url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
          method: "GET",
        }),
      }),

      getComedy: builder.query({
        query: () => ({
          url: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
          method: "GET",
        }),
      }),

      getTvShow: builder.query({
        query: () => ({
          url: `/discover/tv?api_key=${API_KEY}&with_network=123&language=en-US`,
          method: "GET",
        }),
      }),

      getPopular: builder.query({
        query: () => {
          return {
            url: `/movie/popular?api_key=${API_KEY}&page=1&language=en=US`,
            method: "GET",
          };
        },
      }),

      getById: builder.query({
        query: (info) => {
          const { id, type } = info;
          return {
            url: `/${type}/${id}?language=en-US&api_key=${API_KEY}`,
            method: "GET",
          };
        },
      }),
    };
  },
});

export const {
  useGetDiscoverQuery,
  useGetComedyQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetTvShowQuery,
  useGetPopularQuery,
  useGetByIdQuery,
} = moviesApi;
