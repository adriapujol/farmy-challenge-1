import React from 'react'
import CardStyle from './Card.styled';
import DataService from 'simple-localstorage-data-service-stub';
import { useDispatch } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';
import { removeSalad } from '../../features/salads/salads';
import { useNavigate } from 'react-router-dom';
import FlexWrap from '../styles/FlexWrap';
import ButtonIcon from '../styles/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';


// const dataService = DataService();

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
        // dataService.delete(`salads/${id}`).then(salads => console.log(salads));
    }

    return (

        <CardStyle>
            <h3>{name}</h3>
            <p>{size}</p>
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