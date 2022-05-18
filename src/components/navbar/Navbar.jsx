import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';

export default function Navbar() {

    const dispatch = useDispatch();

    const handleCreate = () => {
        dispatch(currentSalad({}))
    }

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/create" onClick={handleCreate}>Create</Link>
        </nav>
    )
}
