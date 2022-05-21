import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/products";
import saladsReducer from "../features/salads/salads";
import logicReducer from "../features/logic/logic";
import currentSaladReducer from "../features/currentSalad/currentSalad";
import productSelectReducer from "../features/productsSelect/productsSelect";

const store = configureStore({
    reducer: {
        products: productsReducer,
        salads: saladsReducer,
        logic: logicReducer,
        currentSalad: currentSaladReducer,
        productOptions: productSelectReducer,
    },

});

export default store;
