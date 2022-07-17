import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { moviesApi } from "../features/Api";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath] : moviesApi.reducer,
    search: searchReducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(moviesApi.middleware),

});


setupListeners(store.dispatch)