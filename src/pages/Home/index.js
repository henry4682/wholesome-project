import React from 'react';
import './index.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import SwiperForHome from './SwiperForHome';
import 'swiper/css/pagination';
import { useAuth } from '../../context/auth';
import { useCart } from '../../context/cart';
import {
  successToastAlert,
  warningAlert,
  warningToastAlert,
} from '../../components/Alert';

import { motion } from 'framer-motion';

function Home() {
  const { user, setUser } = useAuth();
  const { cart, setCart } = useCart();
  const [newProducts, setNewProducts] = useState([]);
  const [newRecipe, setNewRecipe] = useState([]);
  //初始化載入日期最新4筆商品
  useEffect(() => {
    let getNewestProducts = async () => {
      let response = await axios.get(`${API_URL}/newProducts`);
      setNewProducts(response.data.productData);
      setNewRecipe(response.data.recipeData);
    };
    getNewestProducts();
  }, []);

  return (
    <div>
      {/* // swiper */}
      <SwiperForHome />

      <div className="mt-5 d-md-flex justify-content-between">
        <img
          src={require('../../Assets/Home/ad/ad-1.png')}
          className="card-img-top home_ad"
          alt="..."
        />
        <img
          src={require('../../Assets/Home/ad/ad-2.png')}
          className="card-img-top home_ad"
          alt="..."
        />
        <img
          src={require('../../Assets/Home/ad/ad-3.png')}
          className="card-img-top home_ad"
          alt="..."
        />
      </div>
      <div className="w-50 mx-auto home_recommend ">
        <motion.p
          whileInView={{ scale: 1.5 }}
          className=" text-primary home_title text-center"
        >
          NEW PRODUCTS
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="container"
      >
        <ul className="d-flex row gy-3 justify-content-center ">
          {newProducts.map((item, i) => {
            return (
              <li
                key={i}
                className=" d-flex flex-column my-3 col-5 col-lg-2 text-center py-2 "
              >
                <img
                  className="cart_product_pic"
                  src={require(`../../Assets/products/${item.image}`)}
                  alt=""
                />
                <Link
                  className="text-dark text-truncate py-2"
                  to={`/productDetail/${item.id}`}
                >
                  {item.name}
                </Link>
                <div className=" my-2 text-primary">
                  NT$ <em className="add-on text-primary">{item.price}</em>
                </div>

                <button
                  className="btn btn-primary text-light mx-auto"
                  onClick={() => {
                    // --- (1) 判斷是否登入
                    if (!user || user.id === '0') {
                      warningAlert('您尚未登入', '請先登入再進行購買');
                      return;
                    }
                    // --- (2) 判斷購物車裡面是不是有這個商品
                    if (cart.some((v) => v.id === item.id)) {
                      warningToastAlert('商品已存在於購物車', 1200, false);
                      return;
                    }
                    // product是指現在加入購物車的這個商品
                    let product = {
                      id: item.id,
                      amount: 1,
                      name: item.name,
                      price: item.price,
                      image: item.image,
                    };
                    setCart([...cart, product]);
                    successToastAlert('商品加入購物車成功', 1200, false);
                    console.log('購物車', cart);
                  }}
                >
                  加入購物車
                </button>
              </li>
            );
          })}
        </ul>
      </motion.div>
      <div className="w-50 mx-auto home_recommend ">
        <motion.p
          whileInView={{ scale: 1.5 }}
          className="home_title text-primary text-center"
        >
          RECIPE
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="container"
      >
        <ul className="d-flex row my-5  justify-content-center">
          {newRecipe.map((v, i) => {
            return (
              <li
                key={i}
                className="d-flex flex-column home_recipe_card my-3 mx-2 col-5 col-lg-2 text-center py-2  "
              >
                <div className="home_recipe_img_container justify-content-center">
                  <img
                    className="home_recipe_pic "
                    src={require(`../Recipes/Asset/recipe-image/${v.main_img}`)}
                    alt=""
                  />
                </div>
                <div className="py-2">{v.title}</div>
                <Link to={`/recipeDetail/${v.id}`} className="home_read">
                  {' '}
                  繼續閱讀
                </Link>
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}

export default Home;
