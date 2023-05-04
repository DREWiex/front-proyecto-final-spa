import { configureStore } from '@reduxjs/toolkit';
import { roomSlice } from './slices/roomSlice';

export const store = configureStore({

    reducer: {
        rooms: roomSlice.reducer
    }

});