import React from 'react';
import ProductStyled from './Product.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addIngredients } from '../../features/currentSalad/currentSalad';
import { removeProduct } from "../../features/productsSelect/productsSelect";

function Product({ product }) {
    const dispatch = useDispatch();
    const currSalad = useSelector((state) => state.currentSalad.value);

    const handleAddIngredient = () => {
        const updatedIngredients = [...currSalad.ingredients, { id: product.id, numOfServings: 1 }];
        dispatch(addIngredients(updatedIngredients));
        dispatch(removeProduct({ id: product.id }));
    }

    return (
        <ProductStyled>
            <label>{product.name}</label>
            <button onClick={handleAddIngredient}> + </button>
        </ProductStyled>
    )
}

export default Product