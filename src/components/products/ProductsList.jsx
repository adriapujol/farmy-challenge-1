import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../product/Product';
import { removeProduct } from "../../features/productsSelect/productsSelect";
import FlexWrap from '../styles/FlexWrap';
import ProductsStyled from './Products.styled';


function ProductsList() {

    const dispatch = useDispatch();

    const [searchField, setSearchField] = useState("");

    const productOptions = useSelector(state => state.productOptions.value);
    const currIngredients = useSelector(state => state.currentSalad.value.ingredients);



    useEffect(() => {
        currIngredients.forEach(ingredient => dispatch(removeProduct({ id: ingredient.id })))
    }, [])


    const handleSearch = e => {
        setSearchField(e.target.value);
    }

    const filtered = productOptions.filter(product => product.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
        <ProductsStyled className="sidebar">
            <div className="input-box">
                <input type="text" onChange={handleSearch} />
            </div>
            <div className="products-list">

                {
                    filtered.map((product, index) => {
                        return <Product
                            key={index}
                            product={product}
                        />
                    })
                }
            </div>
        </ProductsStyled>
    )
}

export default ProductsList;