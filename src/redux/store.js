import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import thunk from 'redux-thunk';
import weatherReducer from './weatherSlice';

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: [thunk],
});

export default store;
