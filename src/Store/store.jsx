import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/products";
import saladsReducer from "../features/salads/salads";
import logicReducer from "../features/logic/logic";

const store = configureStore({
    reducer: {
        products: productsReducer,
        salads: saladsReducer,
        logic: logicReducer,
    },

});

export default store;
