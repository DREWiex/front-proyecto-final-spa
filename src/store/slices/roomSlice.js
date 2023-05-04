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
        },
        setRoomByID: (state, { payload }) => {
            state.isLoading = true, // así no entra directamente en el map cuando vuelve al índex desde la RoomDetailPage
            state.room = payload
        }
    }

});

export const {
    startLoadingRoom,
    setRoom,
    setRoomByID
} = roomSlice.actions;