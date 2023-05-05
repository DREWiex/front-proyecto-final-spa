import { configureStore } from '@reduxjs/toolkit';
import { authSlice, roomSlice } from './slices'

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        rooms: roomSlice.reducer
    }

});