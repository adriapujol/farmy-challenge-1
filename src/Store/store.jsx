import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/products";
import saladsReducer from "../features/salads/salads";
import logicReducer from "../features/logic/logic";
import currentSaladReducer from "../features/currentSalad/currentSalad";

const store = configureStore({
    reducer: {
        products: productsReducer,
        salads: saladsReducer,
        logic: logicReducer,
        currentSalad: currentSaladReducer,
    },

});

export default store;
