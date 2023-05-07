import { configureStore } from '@reduxjs/toolkit';
import { authSlice, roomSlice, usersSlice } from './slices'

export const store = configureStore({

    reducer: {
        auth: authSlice.reducer,
        rooms: roomSlice.reducer,
        users: usersSlice.reducer
    }

});