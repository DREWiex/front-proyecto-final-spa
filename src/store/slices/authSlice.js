import { createSlice } from '@reduxjs/toolkit';

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
            state.user = payload,
            state.role = payload.role,
            state.error = undefined,
            state.isLoading = false
        },


    }

});

export const {
    startLoadingAuth,
    authLogin
} = authSlice.actions;