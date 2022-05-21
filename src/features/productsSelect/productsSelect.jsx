import { createSlice } from '@reduxjs/toolkit';

const initialState = []

const productsSelectSlice = createSlice({
    name: "productsOptions",
    initialState: { value: initialState },
    reducers: {
        productsOptions: (state, action) => {
            state.value = action.payload;
        },
        removeProduct: (state, action) => {
            const copyProds = [...state.value];
            const updateProds = copyProds.filter(prod => {
                return prod.id !== action.payload.id
            });
            state.value = [...updateProds]
        },
        addProduct: (state, action) => {
            const newState = [...state.value, { ...action.payload }];
            const sortedList = newState.sort((a, b) => a.id > b.id ? 1 : (b.id > a.id ? -1 : 0));
            state.value = [...sortedList]
        },
    }
});

export const { productsOptions, removeProduct, addProduct } = productsSelectSlice.actions;

export default productsSelectSlice.reducer;