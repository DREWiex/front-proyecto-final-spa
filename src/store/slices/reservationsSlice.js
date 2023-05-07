import { createSlice } from '@reduxjs/toolkit';

export const reservationsSlice = createSlice({

    name: 'reservations',
    initialState: {
        reservations: [],
        error: undefined
    },

    reducers: {
        userReservations: (state, { payload }) => {
            state.reservations = payload,
            state.error = undefined
        },

        reservationsError: (state, { payload }) => {
            state.reservations = [],
            state.error = payload
        },

    }

});

export const {
    userReservations,
    reservationsError
} = reservationsSlice.actions;