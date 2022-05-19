import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';
import { v4 as uuid } from 'uuid';

export default function Navbar() {

    const dispatch = useDispatch();

    const handleCreate = () => {
        dispatch(currentSalad(
            {
                id: uuid(),
                name: "Salad name",
                size: "large",
                ingredients: [],
                cost: 0,
                targetStock: 0,
                currentStock: 0,
                price: 0
            }
        ));
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create" onClick={handleCreate}>Create</Link>
        </nav>
    )
}
