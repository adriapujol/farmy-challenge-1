import React from 'react'
import CardStyle from './Card.styled';
import { useDispatch } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';
import { useNavigate } from 'react-router-dom';
import FlexWrap from '../styles/FlexWrap';
import ShadowBox from '../styles/ShadowBox';


function Card({ salad }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, name, size, ingredients, cost, targetStock, currentStock, price } = salad;

    const handleEdit = () => {
        dispatch(currentSalad(salad));
        navigate("/create");
    }

    return (
        <ShadowBox>

            <FlexWrap column center>
                <h3>{name}</h3>
                <p>{size}</p>
                <ul>
                    {
                        ingredients.map((item, index) => {
                            return <li key={index}>{item.id}</li>
                        })
                    }
                </ul>
                <p>{cost}</p>
                <p>{targetStock}</p>
                <p>{currentStock}</p>
                <p>{price}</p>
                <button onClick={handleEdit}>Edit</button>
            </FlexWrap>
        </ShadowBox>
    )
}

export default Card;