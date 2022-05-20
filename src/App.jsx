import React, { useState, useEffect } from 'react';
import DataService from "simple-localstorage-data-service-stub";
import SaladMaker from './Pages/SaladMaker/SaladMaker';
import Home from './Pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import { useDispatch } from 'react-redux';
import { productList } from './features/products/products';
import { productsOptions } from './features/productsSelect/productsSelect';
import { saladsList } from './features/salads/salads';
import { logic } from './features/logic/logic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const dataService = DataService();

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    dataService.get('products').then(response => {
      dispatch(productList(response));
      dispatch(productsOptions(response));
    });
    dataService.get('salads').then(response => dispatch(saladsList(response)));
    dataService.get("businessLogic").then(response => dispatch(logic(response)));

  }, [])


  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<SaladMaker />} />
          <Route path="/edit" element={<SaladMaker />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
