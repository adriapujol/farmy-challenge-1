import React from 'react';
import ProductStyled from './Product.styled';
import { useSelector, useDispatch } from 'react-redux';
import { addIngredients } from '../../features/currentSalad/currentSalad';
import { removeProduct } from "../../features/productsSelect/productsSelect";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';


function Product({ product }) {
    const dispatch = useDispatch();
    const currSalad = useSelector((state) => state.currentSalad.value);

    const handleAddIngredient = () => {
        const updatedIngredients = [...currSalad.ingredients, { id: product.id, numOfServings: 1 }];
        dispatch(addIngredients(updatedIngredients));
        dispatch(removeProduct({ id: product.id }));
    }

    return (
        <ProductStyled onClick={handleAddIngredient}>
            <label>{product.name}</label>
            <FontAwesomeIcon icon={faCirclePlus} />
        </ProductStyled>
    )
}

export default Product