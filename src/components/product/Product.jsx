import React from 'react';
import ProductStyled from './Product.styled';

function Product({ product, setIngredients }) {


    const handleAddIngredient = () => {
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