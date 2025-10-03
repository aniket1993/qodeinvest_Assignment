import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
    message: '',
    heading: '',
    type: 'info',
    autoHide: 6000,
};

export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
        showSnackbar: (state, action) => {
            state.open = true
            state.message = action.payload.message;
            state.heading = action.payload.heading;
            state.type = action.payload.type;
            state.autoHide = action.payload.autoHide || 6000;
        },
        hideSnackbar: (state) => {
            state.open = false
        }

    },

});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;


export default snackbarSlice.reducer;
