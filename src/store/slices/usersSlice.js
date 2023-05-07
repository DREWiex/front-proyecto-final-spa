import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({

    name: 'users',
    initialState: {
        user: [],
        error: undefined,
        isLoading: false,
    },
    reducers: {
        onLoading: (state) => {
            state.isLoading = true
        },

        setUsers: (state, { payload }) => {
            state.user = payload,
            state.error = undefined,
            state.isLoading = false
        },

        usersError: (state, { payload }) => {
            state.user = [],
            state.error = payload
            state.isLoading = false
        },

    }

});

export const {
    onLoading,
    setUsers,
    usersError
} = usersSlice.actions;