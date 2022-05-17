import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
}

const productSlice = createSlice({
    name: "products",
    initialState: { value: initialState },
    reducers: {
        productList: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { productList } = productSlice.actions;

export default productSlice.reducer;