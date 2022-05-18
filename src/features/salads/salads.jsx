import { createSlice } from '@reduxjs/toolkit';

const saladsSlice = createSlice({
    name: "salads",
    initialState: { value: [] },
    reducers: {
        saladsList: (state, action) => {
            state.value = action.payload;
        },
        addSalad: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeSalad: (state, action) => {
            state.value = state.value.filter(salad => salad.id !== action.payload.id);
        },
    }
});

export const { saladsList, addSalad, removeSalad } = saladsSlice.actions;

export default saladsSlice.reducer;

