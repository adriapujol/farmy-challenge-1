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
import saladPicture from '../../img/salad.png';


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

        <CardStyle size={size}>
            <FlexWrap column center height={"100%"} width={"100%"}>
                <p className="size">{size === "large" ? "L" : size === "medium" ? "M" : "S"}</p>
                <img src={saladPicture} alt="salad" />
                <FlexWrap center>
                    <h2>{name}</h2>
                </FlexWrap>
                <p>Cost: <strong>{cost.toFixed(2)}€</strong></p>
                <p>Price: <strong>{price.toFixed(2)}€</strong></p>
                <FlexWrap between id="card-buttons">
                    <ButtonIcon onClick={handleDelete}><FontAwesomeIcon icon={faTrashCan} /></ButtonIcon>
                    <ButtonIcon onClick={handleEdit}><FontAwesomeIcon icon={faPen} /></ButtonIcon>
                </FlexWrap>
            </FlexWrap >
        </CardStyle >
    )
}

export default Card;