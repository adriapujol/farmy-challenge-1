import React from 'react'
import CardStyle from './Card.styled';

function Card({ id, name, size, ingredients, cost, targetStock, currentStock, price }) {

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
            <p>{cost}</p>
            <p>{targetStock}</p>
            <p>{currentStock}</p>
            <p>{price}</p>
        </CardStyle>
    )
}

export default Card;