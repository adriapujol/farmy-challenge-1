import React from 'react';
import ProductStyled from './Product.styled';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad, addIngredients } from '../../features/currentSalad/currentSalad';
import { productsOptions, removeProduct } from "../../features/productsSelect/productsSelect";

function Product({ product }) {
    const dispatch = useDispatch();
    const currSalad = useSelector((state) => state.currentSalad.value);

    const handleAddIngredient = () => {
        const updatedIngredients = [...currSalad.ingredients, { id: product.id, numOfServings: 1 }];
        dispatch(addIngredients(updatedIngredients));
        dispatch(removeProduct({ id: product.id }));
        // setIngredients(prevIngredients => {
        //     return [...prevIngredients, { id: product.id, numOfServings: 1 }];
        // })
    }

    return (
        <ProductStyled>
            <label>{product.name}</label>
            <button onClick={handleAddIngredient}> + </button>
        </ProductStyled>
    )
}

export default Product