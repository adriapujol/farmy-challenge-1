import React, { useState, useEffect } from 'react';
import SaladEditStyle from './SaladEdit.styled';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad, updateName, updateCost, updatePrice, updateHoursFresh } from '../../features/currentSalad/currentSalad';
import { useNavigate } from 'react-router-dom';
import IngredientsTable from '../ingredientsTable/IngredientsTable';
import ButtonStyled from '../styles/Button';
import ButtonIcon from '../styles/ButtonIcon';
import FlexWrap from '../styles/FlexWrap';
import Size from '../size/Size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';
import { getCost, getPrice, isEmptyObj, combineById, getHoursFresh, getWeight } from '../../helpers/helpers';
import { addSalad, updateSalad } from '../../features/salads/salads';
import { v4 as uuid } from 'uuid';
import DataService from 'simple-localstorage-data-service-stub';
import ButtonPair from '../styles/ButtonPair';

// const dataService = DataService();

function SaladEdit() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("Salad Name");
    const [fullIngredients, setFullIngredients] = useState([]);
    const [targetCost, setTargetCost] = useState(0);
    const [targetWeight, setTargetWeight] = useState(0);
    const [cost, setCost] = useState(0);
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);
    const [editName, setEditName] = useState(false);
    const [hoursFresh, setHoursFresh] = useState(0);



    const products = useSelector((state) => state.products.value);
    const salads = useSelector((state) => state.salads.value);
    const currSalad = useSelector(state => state.currentSalad.value);
    const margin = useSelector(state => state.logic.value.margin);
    const saladTypes = useSelector(state => state.logic.value.saladTypes);


    useEffect(() => {
        setName(currSalad.name);
        setCost(currSalad.cost);
        setPrice(currSalad.price);
    }, []);

    useEffect(() => {
        if (currSalad.id === "") dispatch(currentSalad({ ...currSalad, id: uuid() }))
    }, [currSalad]);

    useEffect(() => {
        if (!isEmptyObj(saladTypes)) {
            setTargetCost(saladTypes[currSalad.size].targetCost);
            setTargetWeight(saladTypes[currSalad.size].targetWeight);
        };

    }, [currSalad.size, saladTypes]);

    useEffect(() => {
        setFullIngredients(combineById(currSalad.ingredients, products))
    }, [currSalad.ingredients])

    useEffect(() => {
        dispatch(updateCost({ cost: getCost(fullIngredients) }));
        setHoursFresh(getHoursFresh(fullIngredients));
        setWeight(getWeight(fullIngredients));
    }, [fullIngredients]);

    useEffect(() => {
        setCost(currSalad.cost.toFixed(2));
        dispatch(updatePrice({ price: getPrice(currSalad.cost, margin) }))
    }, [currSalad.cost, margin]);

    useEffect(() => {
        setPrice(currSalad.price.toFixed(2));
    }, [currSalad.price])

    useEffect(() => {
        dispatch(updateHoursFresh(hoursFresh));
    }, [hoursFresh])

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleNameEdit = () => {
        if (editName) dispatch(updateName({ name: name }));
        setEditName(prevEdit => !prevEdit)
    }

    const handleCancelEditName = () => {
        setEditName(prevEdit => !prevEdit)
    }

    const handleCancel = () => {
        dispatch(currentSalad({
            id: uuid(),
            name: "Salad name",
            size: "large",
            ingredients: [],
            cost: 0,
            targetStock: 0,
            currentStock: 0,
            price: 0
        }));
        setName("Salad Name");
        navigate("/");
    }

    const handleAddSalad = () => {

        const saladExist = salads.find(salad => salad.id === currSalad.id);

        if (currSalad.ingredients.length === 0) return alert("Remember to add ingredients");
        if (!isEmptyObj(saladExist)) {
            dispatch(updateSalad(currSalad))
        } else {
            dispatch(addSalad(currSalad));
            // dataService.create('salads', currSalad).then(salad => {
            //     alert(`${salad.name} added successfully`)
            //     dispatch(addSalad(salad));
            // });
        }
        dispatch(currentSalad({
            id: uuid(),
            name: "Salad name",
            size: "large",
            ingredients: [],
            cost: 0,
            targetStock: 0,
            currentStock: 0,
            price: 0
        }));
        navigate("/")
    }


    return (

        <SaladEditStyle>
            <FlexWrap column around width={"100%"} maxWidth={"1000px"} height={"100px"}>
                <FlexWrap between width={"100%"}>
                    <FlexWrap className='edit-name'>
                        {editName ? <input type="text" placeholder="Salad name here" value={name} onChange={handleNameInput} /> : <label>{currSalad.name}</label>}
                        <FlexWrap column center>
                            <ButtonIcon onClick={handleNameEdit}>
                                {!editName && <FontAwesomeIcon icon={faPen} />}
                                {editName && <FontAwesomeIcon icon={faCheck} />}
                            </ButtonIcon>
                            {editName && <ButtonIcon onClick={handleCancelEditName}><FontAwesomeIcon icon={faXmark} /></ButtonIcon>}
                        </FlexWrap>
                    </FlexWrap>
                    <Size />
                </FlexWrap>
                <FlexWrap column width={"100%"}>
                    <FlexWrap between>
                        <div className='cost'><strong>Target cost/weight:</strong> {targetCost}€/{targetWeight}g</div>
                        <div className="price"><strong>Price:</strong> {price}€</div>
                    </FlexWrap>
                    <FlexWrap between >
                        <div><strong>Actual cost/weight:</strong> {cost}€/{weight}g</div>
                        <div><strong>Hours fresh:</strong> {hoursFresh}</div>
                    </FlexWrap>
                </FlexWrap>
            </FlexWrap>
            <FlexWrap center column maxHeight={"700px"} width={"100%"} maxWidth={"1000px"}>
                <h4>Ingredients</h4>
                <IngredientsTable ingredients={fullIngredients} />
            </FlexWrap>
            <ButtonPair>
                <ButtonStyled cancel onClick={handleCancel}>Cancel</ButtonStyled>
                <ButtonStyled onClick={handleAddSalad}>Save</ButtonStyled>
            </ButtonPair>
        </SaladEditStyle>

    )
}

export default SaladEdit;