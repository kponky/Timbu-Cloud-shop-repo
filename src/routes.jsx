import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import AllCategories from './Pages/AllCategories';
import LatestProducts from './Components/LatestProducts';
import LatestProductPage from './Pages/LatestProductPage';

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
  <Route path='lastestproduct/:id' element = {<LatestProductPage/>}>
  </Route>

  

  
  </Routes>
  
  </Router>
  )
}

export default routes
