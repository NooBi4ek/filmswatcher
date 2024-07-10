import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTitles = createAsyncThunk(
    'title/fetchTitles',
    async ({page}:any,thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/title/updates?filter=id,names,type,status,posters,season&limit=9&page=${page}`);
      return response.data;
    }
  );


export const titlesSlice = createSlice({
  name: 'titles',
  initialState: {
    titlesData: [],
    status: 'idle',
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTitles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTitles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.titlesData = action.payload;
      })
  },
});

export const {  } = titlesSlice.actions;

export default titlesSlice.reducer;
