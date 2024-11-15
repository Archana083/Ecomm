import { useEffect, useState } from 'react'
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './pages/layout';
import Home from './pages/home/home';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import ProductCard from './component/productCard/productCard';
import ProductList from './pages/product/ProductList';
import CartPage from './pages/cart/cartPage';
import ContactPage from './pages/contact/contact';

function App() {


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  return (
      <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/productlist' element={<ProductList/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/contact' element={<ContactPage/>} />

      </Route>
    </Routes>
      </BrowserRouter>

      </>
  )
}

export default App
