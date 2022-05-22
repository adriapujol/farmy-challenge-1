import React from 'react';
import HomeStyled from './Home.styled';
import Card from '../../components/card/Card';
import { useSelector } from 'react-redux';



function Home() {

    const salads = useSelector((state) => state.salads.value);

    return (
        <HomeStyled>
            {
                salads.map((salad, index) => {
                    return <Card key={index} salad={salad} />
                })
            }
        </HomeStyled>
    )
}

export default Home