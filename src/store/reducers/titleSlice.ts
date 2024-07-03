import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTitle = createAsyncThunk(
    'title/fetchTitle',
    async ({id}:any,thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/title?id=${id}`);
      return response.data;
    }
  );


export const titleSlice = createSlice({
  name: 'title',
  initialState: {
    titleData: [],
    status: 'idle',
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTitle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTitle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(action.payload);
        state.titleData = action.payload;
      })
  },
});

export const {  } = titleSlice.actions;

export default titleSlice.reducer;
