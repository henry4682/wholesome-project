import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
//版面組合用元件
import Header from './components/Header';
import Footer from './components/Footer';
// 以下為各頁面元件
import Home from './pages/Home';
import AccountInfo from './pages/Account/AccountInfo';
import AccountEdit from './pages/Account/AccountEdit';
import AccountModifyPassword from './pages/Account/AccountModifyPassword';
import AccountCoupons from './pages/Account/AccountCoupons';
import AccountOrders from './pages/Account/AccountOrders';
import AccountTracking from './pages/Account/AccountTracking';
import Login from './pages/Login';
import Register from './pages/Register';

import ProductsMilk from './pages/Products/ProductsMilk';
import ProductsJuice from './pages/Products/ProductsJuice';
import ProductsSnack from './pages/Products/ProductsSnack';
import ProductsSale from './pages/Products/ProductsSale';

import RecipesBeverage from './pages/Recipes/RecipesBeverage';
import RecipesBake from './pages/Recipes/RecipesBake';
import RecipesLight from './pages/Recipes/RecipesLight';

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
        <Route path="account" element={<AccountInfo />} />
        <Route path="account/edit" element={<AccountEdit />} />
        <Route
          path="account/modifypassword"
          element={<AccountModifyPassword />}
        />
        <Route path="account/coupons" element={<AccountCoupons />} />
        <Route path="account/orders" element={<AccountOrders />} />
        <Route path="account/tracking" element={<AccountTracking />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="products/milk" element={<ProductsMilk />} />
        <Route path="products/juice" element={<ProductsJuice />} />
        <Route path="products/snack" element={<ProductsSnack />} />
        <Route path="products/sale" element={<ProductsSale />} />

        <Route path="recipes/beverage" element={<RecipesBeverage />} />
        <Route path="recipes/bake" element={<RecipesBake />} />
        <Route path="recipes/light" element={<RecipesLight />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
