import React from 'react';
import ProductStyled from './Product.styled';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad, addIngredients } from '../../features/currentSalad/currentSalad';

function Product({ product, setIngredients }) {
    const dispatch = useDispatch();
    const currSalad = useSelector((state) => state.currentSalad.value);

    const handleAddIngredient = () => {
        const updatedIngredients = [...currSalad.ingredients, { id: product.id, numOfServings: 1 }];
        dispatch(addIngredients(updatedIngredients));
        setIngredients(prevIngredients => {
            return [...prevIngredients, { id: product.id, numOfServings: 1 }];
        })
    }

    return (
        <ProductStyled>
            <label>{product.name}</label>
            <button onClick={handleAddIngredient}> + </button>
        </ProductStyled>
    )
}

export default Product