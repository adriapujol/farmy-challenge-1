import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Product from '../product/Product';

function Products() {

    const products = useSelector((state) => state.products.value);
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        setListProducts([...products]);
    }, [products]);

    return (
        <div className="sidebar">
            {
                listProducts.map((product, index) => {
                    return <Product
                        key={index}
                        product={product}
                        setIngredients={setListProducts}
                    />
                })
            }
        </div>
    )
}

export default Products;