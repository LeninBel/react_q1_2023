import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchSlice';
import booksReducer from './booksSlice';
import { cartoonApi } from '../services/cartoonApi/cartoonApi';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    books: booksReducer,
    [cartoonApi.reducerPath]: cartoonApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cartoonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
