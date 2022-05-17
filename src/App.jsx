import React, { useState, useEffect } from 'react';
import DataService from "simple-localstorage-data-service-stub";
import SaladMaker from './Pages/SaladMaker/SaladMaker';
import { useDispatch } from 'react-redux';
import { productList } from './features/products/products';
import { saladsList } from './features/salads/salads';
import { logic } from './features/logic/logic';


const dataService = DataService();

function App() {
  const dispatch = useDispatch();


  useEffect(() => {

    dataService.get('products').then(response => dispatch(productList(response)));
    dataService.get('salads').then(response => dispatch(saladsList(response)));
    dataService.get("businessLogic").then(response => dispatch(logic(response)));

  }, [])


  return (
    <div className="App">
      <SaladMaker></SaladMaker>
      {/* {
        salads.map(({ id, name, size, ingredients, cost, targetStock, currentStock, price }, index) => {

          return <Card
            key={index}
            id={id}
            name={name}
            size={size}
            ingredients={ingredients}
            cost={cost}
            targetStock={targetStock}
            currentStock={currentStock}
            price={price}
          />

        })
      } */}

      {/* {
        products.map((product, index) => {
          return <Product
            name={product.name}
          />
        })
      } */}
    </div>
  )
}

export default App
