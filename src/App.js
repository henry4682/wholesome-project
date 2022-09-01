import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
//版面組合用元件
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
// 以下為各頁面元件
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Recipes from './pages/Recipes';
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />
      {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products/milk" element={<Products />} />
        {/* <Route path="products/juice" element={<Products />} />
        <Route path="products/snack" element={<Products />} /> */}
        <Route path="recipes/beverage" element={<Recipes />} />
        {/* <Route path="recipes/bake" element={<Recipes />} />
        <Route path="recipes/light" element={<Recipes />} /> */}
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
