import React, { useState, useEffect } from 'react';
import Grid from '../../components/styles/Grid';
import Product from '../../components/product/Product';

function SaladMaker({ products, currentSalad }) {
    const [saladId, setSaladId] = useState(null);
    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [cost, setCost] = useState(0);
    const [hoursFresh, setHoursFresh] = useState(0);
    const [price, setPrice] = useState(0);
    const [editName, setEditName] = useState(false);
    const [productList, setProductList] = useState([])

    useEffect(() => {
        if (currentSalad) {
            console.log("existing salad")
            setSaladId(currentSalad.id);
            setName(currentSalad.name);
            setSize(currentSalad.size);
            setIngredients([...currentSalad.ingredients]);
            setCost(currentSalad.cost);
            setPrice(currentSalad.price);
        }
    }, [currentSalad]);
    useEffect(() => {
        if (products) {
            setProductList([...products]);
        }
    }, [products]);


    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleAddIngredient = () => {

    }


    return (
        <Grid>
            <div className="sidebar">
                {
                    productList.map((product, index) => {
                        return <Product
                            key={index}
                            product={product}
                            setIngredients={setIngredients}
                        />
                    })
                }
            </div>
            <div className="content">
                <div className="info">
                    {editName ? <input type="text" placeholder="Salad name here" value={name} onChange={handleNameInput} /> : <h3>{name}</h3>}
                    <button onClick={() => setEditName(prevEdit => !prevEdit)}>edit</button>
                    <div className='size'>{size}</div>
                    <div className='cost'>cost/weight: {cost}€/ 450g</div>
                    <div className="price">{price}</div>

                </div>
                <div className="ingredients">
                    <h4>Ingredients</h4>
                    {
                        ingredients.map((ingredient, index) => {
                            let prodName;
                            products.find((product, index) => {
                                if (product.id === ingredient.id) return prodName = product.name;
                            })
                            return <div key={index}>{prodName}</div>
                        })
                    }
                </div>
                <div className="controls">
                    <button className="cancel">Cancel</button>
                    <button className="save">Save</button>
                </div>
            </div>
        </Grid>
    )
}

export default SaladMaker