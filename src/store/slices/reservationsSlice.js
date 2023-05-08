import { createSlice } from '@reduxjs/toolkit';

export const reservationsSlice = createSlice({

    name: 'reservations',
    initialState: {
        reservations: [],
        reservation: undefined,
        error: undefined,
        loadingReservations: false
    },

    reducers: {
        userReservations: (state, { payload }) => {
            state.reservations = payload,
            state.error = undefined
        },

        reservationByID: (state, { payload }) => {
            state.reservation = payload,
            state.error = undefined,
            state.loadingReservations = false
        },

        reservationsError: (state, { payload }) => {
            state.reservations = [],
            state.error = payload
        },

        onLoadingReservations: (state) => {
            state.loadingReservations = true
        }

    }

});

export const {
    userReservations,
    reservationByID,
    reservationsError,
    onLoadingReservations
} = reservationsSlice.actions;