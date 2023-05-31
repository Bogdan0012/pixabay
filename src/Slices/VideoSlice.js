import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../modules/api';

export const getAsync = createAsyncThunk(
    'video/get',
    async (search) => {
      const response = await api.searchVideos(search);
      return response;
    }
  );

  export const getByUserAsync = createAsyncThunk(
    'video/getbyuser',
    async (username) => {
      const response = await api.searchVideosByUser(username);
      return response;
    }
  );

const videoSlice = createSlice({
  name: 'video',
  initialState: {
    values: null
  },
  reducers: {
      reset: (state) => {
        state.values = null;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAsync.fulfilled, (state, action) => {
          if(action && action.payload) {
              state.values = action.payload;
          }
          else {
              state.values = {};
          }
        })
        .addCase(getByUserAsync.fulfilled, (state, action) => {
          if(action && action.payload) {
              state.values = action.payload;
          }
          else {
              state.values = {};
          }
        })
    },
});

export const { reset } = videoSlice.actions

export const selectValues = (state) => state.video.values;

export default videoSlice.reducer;