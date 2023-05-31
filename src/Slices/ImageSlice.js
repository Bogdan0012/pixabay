import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../modules/api';

export const getAsync = createAsyncThunk(
    'images/get',
    async (search) => {
      const response = await api.searchImages(search);
      return response;
    }
  );

const imageSlice = createSlice({
  name: 'images',
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
          state.status = 'idle';
          if(action && action.payload) {
              state.values = action.payload;
          }
          else {
              state.values = {};
          }
        })
    },
});

export const { reset } = imageSlice.actions

export const selectValues = (state) => state.images.values;

export default imageSlice.reducer;