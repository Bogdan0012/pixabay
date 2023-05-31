import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './Slices/ImageSlice';
import videoReducer from './Slices/VideoSlice';

const store = configureStore({
  reducer: {
    images: imageReducer,
    video: videoReducer,
  },
});

export default store;