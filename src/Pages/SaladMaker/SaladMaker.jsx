import React from 'react';
import Grid from '../../components/styles/Grid';
import ProductsList from '../../components/products/ProductsList';
import SaladEdit from '../../components/saladEdit/SaladEdit';

function SaladMaker() {
    return (
        <Grid>
            <ProductsList />
            <SaladEdit></SaladEdit>
        </Grid>
    )
}

export default SaladMaker