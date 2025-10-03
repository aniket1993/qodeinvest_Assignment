import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    open: false,
};

export const PageLoderSlice = createSlice({
    name: 'pageLoader',
    initialState,
    reducers: {
        showLoader: (state, action) => {
            state.open = action.payload
        },
    },

});

export const { showLoader } = PageLoderSlice.actions;


export default PageLoderSlice.reducer;
