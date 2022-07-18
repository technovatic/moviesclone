import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { moviesApi } from "../features/Api";
import searchReducer from "../features/searchSlice";
import favReducer from '../features/favSlice';
import buttonReducer from '../features/buttonSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath] : moviesApi.reducer,
    search: searchReducer,
    fav: favReducer,
    button: buttonReducer
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(moviesApi.middleware),

});


setupListeners(store.dispatch)