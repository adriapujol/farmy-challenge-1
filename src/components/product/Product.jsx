import React from 'react';
import ProductStyled from './Product.styled';

function Product({ name }) {
    return (
        <ProductStyled>
            <label>{name}</label>
            <button> + </button>
        </ProductStyled>
    )
}

export default Product