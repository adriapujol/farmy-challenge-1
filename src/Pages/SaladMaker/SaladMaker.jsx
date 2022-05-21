import React, { useState, useEffect, useMemo } from 'react';
// import SaladMakerStyle from './SaladMaker.styled';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';
import { useNavigate } from 'react-router-dom';
import Grid from '../../components/styles/Grid';
import Ingredient from '../../components/ingredient/Ingredient';
import ProductsList from '../../components/products/ProductsList';
import SaladEdit from '../../components/saladEdit/SaladEdit';

function SaladMaker() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [name, setName] = useState("Salad Name");
    const [size, setSize] = useState("");
    const [fullIngredients, setFullIngredients] = useState([]);
    const [cost, setCost] = useState(0);
    const [price, setPrice] = useState(0);
    const [editName, setEditName] = useState(false);



    const products = useSelector((state) => state.products.value);
    const salads = useSelector((state) => state.salads.value);
    const currSalad = useSelector(state => state.currentSalad.value);
    const margin = useSelector(state => state.logic.value.margin);
    const saladTypes = useSelector(state => state.logic.value.saladTypes);

    const isEmptyObj = obj => {
        for (const property in obj) {
            return false;
        }
        return true;
    }

    const getTargetCost = () => {
        if (size === "large") {
            console.log("this is large");
            console.log(saladTypes.large);
        }
    }

    useEffect(() => {
        if (!isEmptyObj(currSalad)) {
            setName(currSalad.name);
            setSize(currSalad.size);
            setCost(currSalad.cost);
            setPrice(currSalad.price);
        }
    }, []);


    // To clean when going from edit to create

    useEffect(() => {
        if (isEmptyObj(currSalad)) {
            setName("Salad Name");
        }
    }, [currSalad]);

    useEffect(() => {
        console.log("CHANGED INGREDIENTS LIST FULL")
        const tempIng = [];
        currSalad.ingredients.forEach(ingredient => {
            const tempProd = products.find(prod => prod.id === ingredient.id);
            tempIng.push(tempProd);
        })
        console.log("TEMP ING CHECK", tempIng);
        setFullIngredients([...tempIng]);
    }, [currSalad.ingredients])

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleAddIngredient = () => {

    }


    const handleCancel = () => {
        dispatch(currentSalad({}));
        navigate("/");
    }


    return (
        <Grid>
            <ProductsList />
            <SaladEdit></SaladEdit>
            {/* <div className="content">
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
                        (currSalad && currSalad.ingredients.length > 0) && fullIngredients.map((ingredient, index) => {
                            return <Ingredient
                                key={ingredient.id}
                                ingredient={ingredient}
                            />
                        })

                    }
                </div>
                <div className="controls">
                    <button className="cancel" onClick={handleCancel}>Cancel</button>
                    <button className="save" onClick={getTargetCost}>Save</button>
                </div>
            </div> */}
        </Grid>
    )
}

export default SaladMaker