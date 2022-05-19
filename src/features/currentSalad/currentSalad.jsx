import { createSlice } from '@reduxjs/toolkit';

const currentSaladSlice = createSlice({
    name: "currentSalad",
    initialState: { value: {} },
    reducers: {
        currentSalad: (state, action) => {
            state.value = action.payload;
        },
        updateServing: (state, action) => {
            const copyIngredients = [...state.value.ingredients];
            const updatedIngredients = copyIngredients.map(ingredient => {
                if (ingredient.id !== action.payload.id) {
                    return { ...ingredient };
                }
                return { ...action.payload };
            })
            const newState = { ...state.value, ingredients: [...updatedIngredients] }
            state.value = newState
        },
    }
});

export const { currentSalad, updateServing } = currentSaladSlice.actions;

export default currentSaladSlice.reducer;