import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/Card';
import { useSelector } from 'react-redux';



function Home() {

    const salads = useSelector((state) => state.salads.value);

    return (
        <div>
            {
                salads.map((salad, index) => {
                    return <Card key={index} salad={salad} />
                })
            }
        </div>
    )
}

export default Home