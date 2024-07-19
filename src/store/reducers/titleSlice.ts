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
    src:'',
    poster:'',
    status: 'idle',
  },
  reducers: {
    chooseEpisode(state,action) { 
     state.src = action.payload.video;
     state.poster = action.payload.preview;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTitle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTitle.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.titleData = action.payload;


        if(action.payload.player.list[1].hls.fhd!==null) {
          state.src = action.payload.player.list[1].hls.fhd;
        }
        
        else {
          state.src = action.payload.player.list[1].hls.hd;
        }

        if(action.payload.player.list[1].preview!==null) {
          state.poster = action.payload.player.list[1].preview;
        }

        else {
          state.poster = action.payload.posters.medium.url;
        }
        
      })
  },
});

export const { chooseEpisode } = titleSlice.actions;

export default titleSlice.reducer;
