import { createSlice } from '@reduxjs/toolkit';
import { roomSlice } from './roomSlice';

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: {},
        role: undefined,
        error: undefined,
        isLoading: false
    },
    reducers: {
        startLoadingAuth: (state) => {
            state.isLoading = true
        },

        authLogin: (state, { payload }) => {
            state.user = payload.user,
            state.role = payload.role,
            state.error = undefined,
            isLoading = false
        },


    }

});

export const {
    startLoadingAuth,
    authLogin
} = roomSlice.actions;