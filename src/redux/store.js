import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cards/cardSlice';

export const store = configureStore({
  reducer: {
    cards: cardReducer,
  },
});