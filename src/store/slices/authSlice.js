import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({

    name: 'auth',
    initialState: {
        user: {
            role: undefined // con la propiedad 'role' se gestionará la protección de rutas
        },
        error: undefined,
        isLoading: false
    },
    reducers: {
        startLoadingAuth: (state) => {
            state.isLoading = true
        },

        onAuth: (state, { payload }) => { // gestiona tanto el login como el registro de usuarios
            state.user = payload, // entra en el try y devuelve el objeto de la propiedad 'user'
            state.error = undefined, // no recibe la propiedad 'errors' en el try, por eso se mantiene el valor por defecto
            state.isLoading = false
        },

        authError: (state, { payload }) => {
            state.user = {}, // no recibe la propiedad 'data' en el catch, por eso se mantiene el valor por defecto
            state.error = [ payload ], // entra en el catch y devuelve el objeto de la propiedad 'errors' // convierto en array para poder renderizar con map
            state.isLoading = false
        },

        onLogout: (state) => {
            state.user = {},
            state.error = undefined,
            state.isLoading = false
        },

        setError: (state) => {
            state.error = undefined
        }

    }

});

export const {
    startLoadingAuth,
    onAuth,
    authError,
    onLogout,
    setError
} = authSlice.actions;