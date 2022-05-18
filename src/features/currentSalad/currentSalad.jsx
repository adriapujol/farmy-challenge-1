import { createSlice } from '@reduxjs/toolkit';

const currentSaladSlice = createSlice({
    name: "currentSalad",
    initialState: { value: {} },
    reducers: {
        currentSalad: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { currentSalad } = currentSaladSlice.actions;

export default currentSaladSlice.reducer;