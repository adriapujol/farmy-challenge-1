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
        updateSalad: (state, action) => {
            const saladList = [...state.value];
            const newSalads = saladList.map(salad => {
                if (salad.id === action.payload.id) return action.payload;
                return salad;
            });
            state.value = [...newSalads];
        }
    }
});

export const { saladsList, addSalad, removeSalad, updateSalad } = saladsSlice.actions;

export default saladsSlice.reducer;

