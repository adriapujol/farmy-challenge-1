import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../product/Product';
import { removeProduct } from "../../features/productsSelect/productsSelect";

function ProductsList() {

    const dispatch = useDispatch();

    const productOptions = useSelector(state => state.productOptions.value);
    const currIngredients = useSelector(state => state.currentSalad.value.ingredients);

    useEffect(() => {
        currIngredients.forEach(ingredient => dispatch(removeProduct({ id: ingredient.id })))
    }, [])


    return (
        <div className="sidebar">
            {
                productOptions.map((product, index) => {
                    return <Product
                        key={index}
                        product={product}
                    />
                })
            }
        </div>
    )
}

export default ProductsList;