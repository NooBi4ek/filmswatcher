import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchTitles = createAsyncThunk(
    'title/fetchTitles',
    async ({page}:any,thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/title/updates?filter=id,names,type,status,posters,season,genres&items_per_page=9&page=${page}`);
      return response.data;
    }
  );

  export const fetchTitlesPagesByCategory = createAsyncThunk(
    'title/fetchTitlesPagesByCategory',
    async ({genres}:any,thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/title/search?genres=${genres}&filter=id,names,type,status,posters,season,genres&items_per_page=9`);
      console.log(response);
      return response.data;
    }
  );
  export const fetchTitlesByCategory = createAsyncThunk(
    'title/fetchTitlesByCategory',
    async ({page,genres}:any,thunkAPI) => {
      const response = await axios.get(`https://api.anilibria.tv/v3/title/search?genres=${genres}&filter=id,names,type,status,posters,season,genres&items_per_page=9&page=${page}`);
      console.log(response);
      return response.data;
    }
  );


export const titlesSlice = createSlice({
  name: 'titles',
  initialState: {
    titlesData: [],
    genresPage: 0,
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
        console.log(action.payload)
      })
      .addCase(fetchTitlesPagesByCategory.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTitlesPagesByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.titlesData = action.payload;
        state.genresPage = action.payload.pagination.pages;
      })
      .addCase(fetchTitlesByCategory.fulfilled, (state, action) => {
        state.titlesData=[];
        state.status = 'succeeded';
        state.titlesData = action.payload;
        console.log(action.payload)
      })
  },
});

export const {  } = titlesSlice.actions;

export default titlesSlice.reducer;
