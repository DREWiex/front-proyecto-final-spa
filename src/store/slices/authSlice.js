import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: {},
        error: undefined,
        isLoading: false
    },
    reducers: {
        startLoadingAuth: (state) => {
            state.isLoading = true
        },

        authLogin: (state, { payload }) => {
            state.user = payload, // entra en el try y devuelve el objeto de la propiedad 'user'
            state.error = undefined, // no recibe la propiedad 'errors' en el try, por eso se mantiene el valor por defecto
            state.isLoading = false
        },

        errorAuth: (state, { payload }) => {
            state.user = {}, // no recibe la propiedad 'data' en el catch, por eso se mantiene el valor por defecto
            state.error = [ payload ], // entra en el catch y devuelve el objeto de la propiedad 'errors' // convierto en array para poder renderizar con map
            state.isLoading = false
        },

        onLogout: (state) => {
            state.user = {},
            state.error = undefined,
            state.isLoading = false
        }

    }

});

export const {
    startLoadingAuth,
    authLogin,
    errorAuth,
    onLogout
} = authSlice.actions;