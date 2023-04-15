import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchSlice';
import booksReducer from './booksSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    books: booksReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
