import { createSlice } from '@reduxjs/toolkit';
const initalState = [

];


const product = createSlice({
    name: 'oder',
    initialState: initalState,
    reducers: {
        AddToOder: (state, action) => {
            console.log("hihi");
        },
        DeleteOder : (state,action) => {

        },

    }

});

const { reducer, actions } = product;
export const { test } = actions;
export default reducer;