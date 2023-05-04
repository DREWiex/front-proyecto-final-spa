import { createSlice } from '@reduxjs/toolkit';

export const roomSlice = createSlice({

    name: 'rooms',
    initialState: {
        room: [],
        isLoading: false
    },
    reducers: {
        startLoadingRoom: (state) => {
            state.isLoading = true
        },
        setRoom: (state, { payload }) => {
            state.isLoading = false,
            state.room = payload
        }
    }

});

export const {
    startLoadingRoom,
    setRoom
} = roomSlice.actions;