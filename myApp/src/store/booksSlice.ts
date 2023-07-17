import { createSlice } from '@reduxjs/toolkit';
import { Book } from '../data/mockedData';

const initialState: Array<Book> = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBooks(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addBooks } = booksSlice.actions;

export default booksSlice.reducer;
