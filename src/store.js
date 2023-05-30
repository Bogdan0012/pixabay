import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './Slices/ImageSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
});

export default store;