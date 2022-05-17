import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: []
}

const logicSlice = createSlice({
    name: "logic",
    initialState: { value: initialState },
    reducers: {
        logic: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { logic } = logicSlice.actions;

export default logicSlice.reducer;