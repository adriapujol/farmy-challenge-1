import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonIcon from '../styles/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import FlexWrap from '../styles/FlexWrap';
import { currentSalad, updateServing, deleteIngredients } from '../../features/currentSalad/currentSalad';
import { productList } from '../../features/products/products';
import { productsOptions, removeProduct, addProduct } from "../../features/productsSelect/productsSelect";

function Ingredient({ ingredient }) {

    const dispatch = useDispatch();

    const currIngredientList = useSelector(state => state.currentSalad.value.ingredients);
    const products = useSelector(state => state.products.value);
    const [numServings, setNumServings] = useState(1);
    const [currIngredient, setCurrentIngredient] = useState({})
    const { id, name, costPerServing, supplier, hoursFresh } = ingredient;

    useEffect(() => {
        console.log("CURR INGREDIENTS FIRST RENDER:", currIngredient);
        const currProd = products.find(prod => prod.id === id);
        console.log("CURRENT PRODUCT FILTER:", currProd)
        setCurrentIngredient(currProd);
    }, []);

    useEffect(() => {
        console.log("CURRENT PRODUCT WHEN CHANGE:", currIngredient)
    }, [currIngredient])

    const handleAddServing = () => {
        const currIng = { ...currIngredientList.find(ingredient => ingredient.id === id) };
        console.log("FUCK", currIng);
        currIng.numOfServings = ++currIng.numOfServings;
        console.log("UPDATE CHECK", currIng);
        setNumServings(prevState => ++prevState);
        dispatch(updateServing(currIng));
    }

    const handleSubstractServing = () => {
        const currIng = { ...currIngredientList.find(ingredient => ingredient.id === id) };
        if (currIng.numOfServings > 1) currIng.numOfServings = --currIng.numOfServings;
        console.log("UPDATE CHECK", currIng);
        if (numServings > 1) setNumServings(prevState => --prevState);
        dispatch(updateServing(currIng));
    }

    const deleteIngredient = () => {
        dispatch(deleteIngredients({ id: id }));
        dispatch(addProduct({ ...ingredient }));
    }

    console.log("INGREDIENT", currIngredient);
    console.log("THIS IS THE ID", id);

    return (
        <FlexWrap even>
            <div>{currIngredient.name}</div>
            <div>{currIngredient.costPerServing}</div>
            <div>{numServings}</div>
            <ButtonIcon onClick={handleSubstractServing}>-</ButtonIcon>
            <ButtonIcon onClick={handleAddServing}>+</ButtonIcon>
            <ButtonIcon onClick={deleteIngredient}><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
        </FlexWrap>
    )
}

export default Ingredient;