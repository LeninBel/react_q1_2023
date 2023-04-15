import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    saveSearch(state, action) {
      return action.payload;
    },
  },
});

export const { saveSearch } = searchSlice.actions;

export default searchSlice.reducer;
