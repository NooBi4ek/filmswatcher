import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    async ({name}:any,thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/title/search?search=${name}&filter=id,names&limit=999`);
      return response.data;
    }
  );


export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchData: [],
    status: 'idle',
  },
  reducers: {
    clearSearchData (state) {
      state.searchData = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.searchData = action.payload;
      })
  },
});

export const { clearSearchData } = searchSlice.actions;

export default searchSlice.reducer;
