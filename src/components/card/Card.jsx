import React from 'react'
import CardStyle from './Card.styled';
import { useDispatch } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';
import { removeSalad } from '../../features/salads/salads';
import { useNavigate } from 'react-router-dom';
import FlexWrap from '../styles/FlexWrap';
import ShadowBox from '../styles/ShadowBox';
import ButtonIcon from '../styles/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

function Card({ salad }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id, name, size, ingredients, cost, targetStock, currentStock, price } = salad;

    const handleEdit = () => {
        dispatch(currentSalad(salad));
        navigate("/create");
    }

    const handleDelete = () => {
        dispatch(removeSalad({ id: id }));
    }

    return (

        <CardStyle>
            <h3>{name}</h3>
            <p>{size}</p>
            <ul>
                {
                    ingredients.map((item, index) => {
                        return <li key={index}>{item.id}</li>
                    })
                }
            </ul>
            <p>Cost: {cost.toFixed(2)}€</p>
            <p>Price: {price.toFixed(2)}€</p>
            <FlexWrap between>
                <ButtonIcon onClick={handleEdit}><FontAwesomeIcon icon={faPen} /></ButtonIcon>
                <ButtonIcon onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
            </FlexWrap>
        </CardStyle>
    )
}

export default Card;