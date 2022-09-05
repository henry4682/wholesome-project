import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
//版面組合用元件
import Header from './components/Header';
import Footer from './components/Footer';
// 以下為各頁面元件
import Home from './pages/Home';
// Account
import AccountLayout from './pages/Account/AccountLayouts';
import AccountInfo from './pages/Account/AccountInfo';
import AccountEdit from './pages/Account/AccountEdit';
import AccountModifyPassword from './pages/Account/AccountModifyPassword';
import AccountOrders from './pages/Account/AccountOrders';
import AccountAddresses from './pages/Account/AccountAddresses';
import AccountCoupons from './pages/Account/AccountCoupons';
import AccountTracking from './pages/Account/AccountTracking';
import AccountMessages from './pages/Account/AccountMessages';
import Login from './pages/Login';
import Register from './pages/Register';
// <<<<<<< HEAD
import Products from './pages/Products';
import Recipes from './pages/Recipes';
// =======

import ProductsMilk from './pages/Products/ProductsMilk';
import ProductsJuice from './pages/Products/ProductsJuice';
import ProductsSnack from './pages/Products/ProductsSnack';
import ProductsSale from './pages/Products/ProductsSale';

import RecipesBeverage from './pages/Recipes/RecipesBeverage';
import RecipesBake from './pages/Recipes/RecipesBake';
import RecipesLight from './pages/Recipes/RecipesLight';

// >>>>>>> 80c15c7506c277da982a71dde8ecf26285c44c61
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

        <Route path="/account/*" element={<AccountLayout />}>
          <Route index element={<AccountInfo />} />
          <Route path="edit" element={<AccountEdit />} />
          <Route path="modifypassword" element={<AccountModifyPassword />} />
          <Route path="orders" element={<AccountOrders />} />
          <Route path="addresses" element={<AccountAddresses />} />
          <Route path="coupons" element={<AccountCoupons />} />
          <Route path="tracking" element={<AccountTracking />} />
          <Route path="messages" element={<AccountMessages />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
{/* <<<<<<< HEAD */}
        <Route path="products/" element={<ProductsMilk />} />
        {/* <Route path="products/juice" element={<Products />} />
        <Route path="products/snack" element={<Products />} /> */}
        <Route path="recipes/beverage" element={<Recipes />} />
        {/* <Route path="recipes/bake" element={<Recipes />} />
        <Route path="recipes/light" element={<Recipes />} /> */}
{/* ======= */}

        <Route path="products/milk" element={<ProductsMilk />} />
        <Route path="products/juice" element={<ProductsJuice />} />
        <Route path="products/snack" element={<ProductsSnack />} />
        <Route path="products/sale" element={<ProductsSale />} />

        <Route path="recipes/beverage" element={<RecipesBeverage />} />
        <Route path="recipes/bake" element={<RecipesBake />} />
        <Route path="recipes/light" element={<RecipesLight />} />
{/* >>>>>>> 80c15c7506c277da982a71dde8ecf26285c44c61 */}
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
