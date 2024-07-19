import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGenres = createAsyncThunk(
    'genres/fetchGenres',
    async (thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/genres`);
      return response.data;
    }
  );


export const genresSlice = createSlice({
  name: 'genres',
  initialState: {
    genresData: [],
    status: 'idle',
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.genresData = action.payload;
      })
  },
});

export const {  } = genresSlice.actions;

export default genresSlice.reducer;
