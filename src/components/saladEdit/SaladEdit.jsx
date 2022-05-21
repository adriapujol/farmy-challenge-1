import React, { useState, useEffect } from 'react';
import SaladEditStyle from './SaladEdit.styled';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad, updateName, updateCost, updatePrice, updateHoursFresh } from '../../features/currentSalad/currentSalad';
import { useNavigate } from 'react-router-dom';
import Ingredient from '../../components/ingredient/Ingredient';
import ButtonStyled from '../styles/Button';
import ButtonIcon from '../styles/ButtonIcon';
import ShadowBox from '../styles/ShadowBox';
import FlexWrap from '../styles/FlexWrap';
import Size from '../size/Size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { getCost, getPrice, isEmptyObj, combineById, getHoursFresh } from '../../helpers/helpers';

function SaladEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [name, setName] = useState("Salad Name");
    const [size, setSize] = useState("");
    const [fullIngredients, setFullIngredients] = useState([]);
    const [targetCost, setTargetCost] = useState(0);
    const [targetWeight, setTargetWeight] = useState(0);
    const [cost, setCost] = useState(0);
    const [price, setPrice] = useState(0);
    const [editName, setEditName] = useState(false);
    const [hoursFresh, setHoursFresh] = useState(0);



    const products = useSelector((state) => state.products.value);
    const salads = useSelector((state) => state.salads.value);
    const currSalad = useSelector(state => state.currentSalad.value);
    const margin = useSelector(state => state.logic.value.margin);
    const saladTypes = useSelector(state => state.logic.value.saladTypes);


    useEffect(() => {
        setSize(currSalad.size);
        setCost(currSalad.cost);
        setPrice(currSalad.price);
    }, []);

    useEffect(() => {
        if (!isEmptyObj(saladTypes)) {
            setTargetCost(saladTypes[currSalad.size].targetCost);
            setTargetWeight(saladTypes[currSalad.size].targetWeight);
        };

    }, [currSalad.size, saladTypes]);

    useEffect(() => {
        console.log("COMBINED", combineById(currSalad.ingredients, products))
        setFullIngredients(combineById(currSalad.ingredients, products))
    }, [currSalad.ingredients])

    useEffect(() => {
        dispatch(updateCost({ cost: getCost(fullIngredients) }));
        setHoursFresh(getHoursFresh(fullIngredients));
        console.log("FULL INGREDIENTS", fullIngredients)
        console.log("GETTING HOURS", getHoursFresh(fullIngredients));
    }, [fullIngredients]);

    useEffect(() => {
        setCost(currSalad.cost.toFixed(2));
        dispatch(updatePrice({ price: getPrice(currSalad.cost, margin) }))
    }, [currSalad.cost, margin]);

    useEffect(() => {
        setPrice(currSalad.price.toFixed(2));
    }, [currSalad.price])

    useEffect(() => {
        console.log("hours fresh useEFFECT:", hoursFresh)
        dispatch(updateHoursFresh(hoursFresh));
    }, [hoursFresh])

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleNameEdit = () => {
        if (editName) dispatch(updateName({ name: name }));
        setEditName(prevEdit => !prevEdit)
    }

    const handleCancel = () => {
        dispatch(currentSalad({
            id: "",
            name: "Salad name",
            size: "large",
            ingredients: [],
            cost: 0,
            targetStock: 0,
            currentStock: 0,
            price: 0
        }));
        navigate("/");
    }


    return (

        <SaladEditStyle className="content">
            <ShadowBox className='info'>
                <FlexWrap between>
                    <div className='edit-name'>
                        {editName ? <input type="text" placeholder="Salad name here" value={name} onChange={handleNameInput} /> : <label>{currSalad.name}</label>}
                        <ButtonIcon onClick={handleNameEdit}><FontAwesomeIcon icon={faPen} /></ButtonIcon>
                    </div>
                    <Size></Size>
                </FlexWrap>
                <FlexWrap between>
                    <div className='cost'>Target cost/weight: {targetCost}€/{targetWeight}g</div>
                    <div className="price">Price: {price}</div>
                </FlexWrap>
                <FlexWrap between width={"500px"}>
                    <div>Actual cost/weight: {cost}€/{cost}g</div>
                    <div>Hours fresh: {hoursFresh}</div>
                </FlexWrap>

            </ShadowBox>
            <ShadowBox>
                <FlexWrap center column>
                    <h4>Ingredients</h4>
                    {
                        fullIngredients.map((ingredient, index) => {
                            return <Ingredient
                                key={ingredient.id}
                                ingredient={ingredient}
                            />
                        })

                    }
                </FlexWrap>
            </ShadowBox>
            <div className="controls">
                <ButtonStyled cancel onClick={handleCancel}>Cancel</ButtonStyled>
                <ButtonStyled onClick={() => console.log("Saved")}>Save</ButtonStyled>
            </div>
        </SaladEditStyle>

    )
}

export default SaladEdit;