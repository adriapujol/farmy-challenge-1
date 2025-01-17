import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentSalad } from '../../features/currentSalad/currentSalad';
import { productsOptions } from "../../features/productsSelect/productsSelect";
import { v4 as uuid } from 'uuid';
import NavbarStyled from './Navbar.styled';
import FlexWrap from '../styles/FlexWrap';

export default function Navbar() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products.value);

    const handleCreate = () => {
        dispatch(productsOptions(products));
        dispatch(currentSalad(
            {
                id: uuid(),
                name: "Salad name",
                size: "large",
                ingredients: [],
                cost: 0,
                targetStock: 0,
                currentStock: 0,
                price: 0,
                hoursFresh: 0
            }
        ));
    }

    const handleHome = () => {
        dispatch(productsOptions(products));
    }

    return (
        <NavbarStyled>
            <FlexWrap between heigth={"100%"} width={"95%"}>
                <Link to="/" onClick={handleHome}>Mel's Kitchen</Link>
                <Link to="/create" onClick={handleCreate}>Create</Link>
            </FlexWrap>
        </NavbarStyled>
    )
}
