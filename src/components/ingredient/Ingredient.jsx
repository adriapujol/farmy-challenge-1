import React, { } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad, updateServing } from '../../features/currentSalad/currentSalad';
import { productList } from '../../features/products/products';

function Ingredient({ ingredient, index, setIngredients }) {

    const dispatch = useDispatch();

    const currIngredient = useSelector((state) => state.currentSalad.value.ingredients[index]);
    const products = useSelector((state) => state.products.value);

    const { id, name, costPerServing, supplier, hoursFresh } = ingredient;

    const handleAddServing = () => {
        const currIng = { ...currIngredient };
        currIng.numOfServings = ++currIng.numOfServings;
        console.log("UPDATE CHECK", currIng);
        dispatch(updateServing(currIng));
        // cosnt currIngred = 
        // dispatch(currentSalad({ ...currSalad, ingredients: []numOfServings: ++currSalad.numOfServings }));
    }

    const handleSubstractServing = () => {
        const currIng = { ...currIngredient };
        if (currIng.numOfServings !== 0) currIng.numOfServings = --currIng.numOfServings;
        console.log("UPDATE CHECK", currIng);
        dispatch(updateServing(currIng));
        // cosnt currIngred = 
        // dispatch(currentSalad({ ...currSalad, ingredients: []numOfServings: ++currSalad.numOfServings }));
    }

    console.log("INGREDIENT", currIngredient);

    return (
        <div>
            <div>{name}</div>
            <div>{costPerServing}</div>
            <div>{supplier}</div>
            {/* <div>{currSalad.ingredientnumOfServings}</div> */}
            <button onClick={handleAddServing}>+</button>
            <button onClick={handleSubstractServing}>-</button>
        </div>
    )
}

export default Ingredient;