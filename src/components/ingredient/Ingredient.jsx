import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonIcon from '../styles/ButtonIcon';
import IngredientStyled from './Ingredient.styled';
import ServingControl from '../styles/ServingControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons'
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
        const currProd = products.find(prod => prod.id === id);
        setCurrentIngredient(currProd);
    }, []);

    useEffect(() => {
    }, [currIngredient])

    const handleAddServing = () => {
        const currIng = { ...currIngredientList.find(ingredient => ingredient.id === id) };
        currIng.numOfServings = ++currIng.numOfServings;
        setNumServings(prevState => ++prevState);
        dispatch(updateServing(currIng));
    }

    const handleSubstractServing = () => {
        const currIng = { ...currIngredientList.find(ingredient => ingredient.id === id) };
        if (currIng.numOfServings > 1) currIng.numOfServings = --currIng.numOfServings;
        if (numServings > 1) setNumServings(prevState => --prevState);
        dispatch(updateServing(currIng));
    }

    const deleteIngredient = () => {
        dispatch(deleteIngredients({ id: id }));
        dispatch(addProduct({ ...ingredient }));
    }

    return (
        <IngredientStyled width={"100%"}>
            <div>{currIngredient.name}</div>
            <div>Cost per serving: {currIngredient.costPerServing}</div>
            <ServingControl>
                <ButtonIcon onClick={handleSubstractServing}><FontAwesomeIcon icon={faCircleMinus} /></ButtonIcon>
                <div>{numServings}</div>
                <ButtonIcon onClick={handleAddServing}><FontAwesomeIcon icon={faCirclePlus} /></ButtonIcon>
            </ServingControl>
            <ButtonIcon onClick={deleteIngredient}><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
        </IngredientStyled>
    )
}

export default Ingredient;