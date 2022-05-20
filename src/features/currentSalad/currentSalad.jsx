import { createSlice } from '@reduxjs/toolkit';

const currentSaladSlice = createSlice({
    name: "currentSalad",
    initialState: {
        value: {
            id: "",
            name: "Salad name",
            size: "large",
            ingredients: [],
            cost: 0,
            targetStock: 0,
            currentStock: 0,
            price: 0
        }
    },
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
        addIngredients: (state, action) => {
            state.value = { ...state.value, ingredients: [...action.payload] }
        },
        deleteIngredients: (state, action) => {
            const copyIngredients = [...state.value.ingredients];
            const updatedIngredients = copyIngredients.filter(ingredient => {
                return ingredient.id !== action.payload.id
            });
            state.value = { ...state.value, ingredients: [...updatedIngredients] }
        },
    }
});

export const { currentSalad, updateServing, addIngredients, deleteIngredients } = currentSaladSlice.actions;

export default currentSaladSlice.reducer;