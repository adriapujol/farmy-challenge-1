import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ButtonIcon from '../styles/ButtonIcon';
import IngredientStyled from './Ingredient.styled';
import ServingControl from '../styles/ServingControl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import FlexWrap from '../styles/FlexWrap';
import { updateServing, deleteIngredients, updateCost } from '../../features/currentSalad/currentSalad';
import { addProduct } from "../../features/productsSelect/productsSelect";
import { getCost, combineById } from '../../helpers/helpers';

function Ingredient({ ingredient }) {

    const dispatch = useDispatch();

    const currIngredientList = useSelector(state => state.currentSalad.value.ingredients);
    const products = useSelector(state => state.products.value);
    const [numServings, setNumServings] = useState(1);
    const [currIngredient, setCurrentIngredient] = useState({})
    const { id } = ingredient;

    useEffect(() => {
        const currProd = products.find(prod => prod.id === id);
        setCurrentIngredient(currProd);
        setNumServings(ingredient.numOfServings);
    }, []);

    useEffect(() => {
    }, [currIngredient]);

    useEffect(() => {
        dispatch(updateCost({ cost: getCost(combineById(currIngredientList, products)) }));
    }, [numServings])

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
        const tempIngredient = { ...ingredient };
        delete tempIngredient.numOfServings;
        dispatch(addProduct(tempIngredient));
    }

    return (
        <IngredientStyled>
            <td>{currIngredient.name}</td>
            <td>{currIngredient.costPerServing}€</td>
            <td>
                <ServingControl>
                    <div>{numServings}</div>
                    <FlexWrap column center>
                        <ButtonIcon onClick={handleAddServing}><FontAwesomeIcon icon={faCaretUp} /></ButtonIcon>
                        <ButtonIcon onClick={handleSubstractServing}><FontAwesomeIcon icon={faCaretDown} /></ButtonIcon>
                    </FlexWrap>
                </ServingControl>
            </td>
            <td>{currIngredient.weightPerServing}g</td>
            <td>
                <ButtonIcon onClick={deleteIngredient}><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
            </td>
        </IngredientStyled>
    )
}

export default Ingredient;