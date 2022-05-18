import React, { useState, useEffect, useMemo } from 'react';
import Grid from '../../components/styles/Grid';
import Product from '../../components/product/Product';
import { useSelector } from 'react-redux';

function SaladMaker() {
    const [saladId, setSaladId] = useState(null);
    const [name, setName] = useState("Salad Name");
    const [size, setSize] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [cost, setCost] = useState(0);
    const [hoursFresh, setHoursFresh] = useState(0);
    const [price, setPrice] = useState(0);
    const [editName, setEditName] = useState(false);
    const [productList, setProductList] = useState([]);
    const [currentTargetCost, setCurrentTargetCost] = useState(0);


    const products = useSelector((state) => state.products.value);
    const salads = useSelector((state) => state.salads.value);
    const currentSalad = useSelector(state => state.currentSalad.value);
    const margin = useSelector(state => state.logic.value.margin);
    const saladTypes = useSelector(state => state.logic.value.saladTypes);

    const isEmptyObj = obj => {
        for (const property in obj) {
            return false;
        }
        return true;
    }

    console.log("currentSalad", currentSalad);
    console.log(saladTypes);

    const getTargetCost = () => {
        if (size === "large") {
            console.log("this is large");
            console.log(saladTypes.large);
        }
    }

    useEffect(() => {
        if (!isEmptyObj(currentSalad)) {
            console.log("existing salad")
            setSaladId(currentSalad.id);
            setName(currentSalad.name);
            setSize(currentSalad.size);
            setIngredients([...currentSalad.ingredients]);
            setCost(currentSalad.cost);
            setPrice(currentSalad.price);
        }
    }, []);


    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleAddIngredient = () => {

    }


    return (
        <Grid>
            <div className="sidebar">
                {
                    products.map((product, index) => {
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
                    <button className="save" onClick={getTargetCost}>Save</button>
                </div>
            </div>
        </Grid>
    )
}

export default SaladMaker