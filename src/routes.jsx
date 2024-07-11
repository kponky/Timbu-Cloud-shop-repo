import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import AllCategories from './Pages/AllCategories';
import LatestProductPage from './Pages/LatestProductPage';
import FeatureProducts from './Pages/FeatureProducts';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import CardInfo from './Components/CardInfo';
// import MainLayout from './Layouts/MainLayout';

const routes = () => {
  return (
  <Router>
  <Routes>
  <Route path = "/" element = {<Home/>} />
  <Route index  element = {<Home/>} />
  <Route path='/allCategories' element = {<AllCategories/>}> </Route>
  <Route path='/aboutUs' element={<AboutUs/>} ></Route>
  <Route path='latestproduct' element = {<LatestProductPage/>}>
  </Route>
  <Route path='latestproduct/:id' element = {<LatestProductPage/>}>
  </Route>
  <Route path='featureproduct' element = {<FeatureProducts/>}>
  </Route>
  <Route path='featureproduct/:id' element = {<FeatureProducts/>}>
  </Route>
  <Route path='/cart' element= {<Cart/>}> </Route>
  <Route path='/checkout' element= {<Checkout/>}> </Route>
  <Route path='/cardInfo' element= {<CardInfo/>}> </Route>

  

  
  </Routes>
  
  </Router>
  )
}

export default routes
