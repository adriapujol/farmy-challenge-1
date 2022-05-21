import React, { useState, useEffect } from 'react';
import SaladEditStyle from './SaladEdit.styled';
import { useSelector, useDispatch } from 'react-redux';
import { currentSalad, updateName } from '../../features/currentSalad/currentSalad';
import { useNavigate } from 'react-router-dom';
import Ingredient from '../../components/ingredient/Ingredient';
import ButtonStyled from '../styles/Button';
import ShadowBox from '../styles/ShadowBox';
import FlexWrap from '../styles/FlexWrap';
import Size from '../size/Size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function SaladEdit() {
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

    const getTargetCost = () => {
        if (size === "large") {
            console.log("this is large");
            console.log(saladTypes.large);
        }
    }

    useEffect(() => {
        setSize(currSalad.size);
        setCost(currSalad.cost);
        setPrice(currSalad.price);
    }, []);

    useEffect(() => {
        const tempIng = [];
        currSalad.ingredients.forEach(ingredient => {
            const tempProd = products.find(prod => prod.id === ingredient.id);
            tempIng.push(tempProd);
        })
        setFullIngredients([...tempIng]);
    }, [currSalad.ingredients])

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
                <FlexWrap>
                    <div className='edit-name'>
                        {editName ? <input type="text" placeholder="Salad name here" value={name} onChange={handleNameInput} /> : <label>{currSalad.name}</label>}
                        <button onClick={handleNameEdit}><FontAwesomeIcon icon={faPen} /></button>
                    </div>
                    <Size></Size>
                </FlexWrap>
                <div className='cost'>cost/weight: {cost}€/ 450g</div>
                <div className="price">{price}</div>

            </ShadowBox>
            <div className="ingredients">
                <h4>Ingredients</h4>
                {
                    fullIngredients.map((ingredient, index) => {
                        return <Ingredient
                            key={ingredient.id}
                            ingredient={ingredient}
                        />
                    })

                }
            </div>
            <div className="controls">
                <ButtonStyled className="cancel" onClick={handleCancel}>Cancel</ButtonStyled>
                <ButtonStyled className="save" onClick={getTargetCost}>Save</ButtonStyled>
            </div>
        </SaladEditStyle>

    )
}

export default SaladEdit;