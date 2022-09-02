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
<<<<<<< HEAD
import Products from './pages/Products';
import Milk from './pages/Products/components/Milk';
import Recipes from './pages/Recipes';
=======

import ProductsMilk from './pages/Products/ProductsMilk';
import ProductsJuice from './pages/Products/ProductsJuice';
import ProductsSnack from './pages/Products/ProductsSnack';
import ProductsSale from './pages/Products/ProductsSale';

import RecipesBeverage from './pages/Recipes/RecipesBeverage';
import RecipesBake from './pages/Recipes/RecipesBake';
import RecipesLight from './pages/Recipes/RecipesLight';

>>>>>>> 80c15c7506c277da982a71dde8ecf26285c44c61
import ShoppingCart from './pages/ShoppingCart';
import NotFound from './pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Menu /> */}
      {/* 路由表 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
<<<<<<< HEAD
        <Route path="products/*" element={<Products />} />
        {/* <Route path="products/juice" element={<Products />} />
        <Route path="products/snack" element={<Products />} /> */}
        <Route path="recipes/beverage" element={<Recipes />} />
        {/* <Route path="recipes/bake" element={<Recipes />} />
        <Route path="recipes/light" element={<Recipes />} /> */}
=======

        <Route path="products/milk" element={<ProductsMilk />} />
        <Route path="products/juice" element={<ProductsJuice />} />
        <Route path="products/snack" element={<ProductsSnack />} />
        <Route path="products/sale" element={<ProductsSale />} />

        <Route path="recipes/beverage" element={<RecipesBeverage />} />
        <Route path="recipes/bake" element={<RecipesBake />} />
        <Route path="recipes/light" element={<RecipesLight />} />
>>>>>>> 80c15c7506c277da982a71dde8ecf26285c44c61
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
