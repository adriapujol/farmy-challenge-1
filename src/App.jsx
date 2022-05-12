import React, { useState, useEffect } from 'react';
import DataService from "simple-localstorage-data-service-stub";
import Card from './components/card/Card';
import Product from './components/product/Product';


const dataService = DataService();

function App() {
  const [products, setProducts] = useState([]);
  const [businessLogic, setBusinessLogic] = useState(null);
  const [salads, setSalads] = useState([]);

  useEffect(() => {
    dataService.get("businessLogic").then(response => setBusinessLogic(response));
    dataService.get('products').then(response => setProducts(response));
    dataService.get('salads').then(response => setSalads(response));
  }, [])

  return (
    <div className="App">
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
      {
        products.map((product, index) => {
          return <Product
            name={product.name}
          />
        })
      }
    </div>
  )
}

export default App
