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

import { motion } from 'framer-motion';

function Home() {
  const { user, setUser } = useAuth();
  const { cart, setCart } = useCart();
  const [newProducts, setNewProducts] = useState([]);
  //初始化載入日期最新4筆商品
  useEffect(() => {
    let getNewestProducts = async () => {
      let response = await axios.get(`${API_URL}/newProducts`);
      setNewProducts(response.data);
    };
    getNewestProducts();
  }, []);
  console.log('newproducts', newProducts);

  return (
    <div>
      {/* // swiper */}
      <SwiperForHome />

      <div className="mt-5 d-md-flex justify-content-between">
        <img
          src={require('../../Assets/Home/ad/ad_1.png')}
          className="card-img-top home_ad"
          alt="..."
        />
        <img
          src={require('../../Assets/Home/ad/ad_2.png')}
          className="card-img-top home_ad"
          alt="..."
        />
        <img
          src={require('../../Assets/Home/ad/ad_3.png')}
          className="card-img-top home_ad"
          alt="..."
        />
      </div>
      <div className="w-50 mx-auto home_recommend my-5">
        <motion.p
          whileInView={{ scale: 2 }}
          viewport={{ once: true }}
          className=" text-primary home_title text-center"
        >
          New Products !!
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        viewport={{ once: true }}
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
                {item.stock > 0 ? (
                  <button
                    className="btn btn-primary text-light mx-auto"
                    onClick={() => {
                      // --- (1) 判斷是否登入
                      if (!user || user.id === '0') {
                        alert('請先登入再進行購買');
                        return;
                      }
                      // --- (2) 判斷購物車裡面是不是有這個商品
                      if (cart.some((v) => v.id === item.id)) {
                        alert('商品已存在於購物車');
                        return;
                      }
                      // product是指現在加入購物車的這個商品
                      let product = {
                        id: item.id,
                        amount: 1,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                        stock: item.stock,
                      };
                      setCart([...cart, product]);

                      console.log('購物車', cart);
                    }}
                  >
                    加入購物車
                  </button>
                ) : (
                  <button className="btn disabled mx-auto ">已售完</button>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
      <div className="home_recommend my-4">
        <p className="home_title text-center">Recipe</p>
      </div>
      <div className="container">
        <ul className="d-flex row my-5  justify-content-center">
          <li className="  my-3 col-5 col-lg-2 text-center py-2  ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className=" my-3 col-5 col-lg-2 text-center py-2  ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className=" my-3 col-5 col-lg-2 text-center py-2  ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className=" my-3 col-5 col-lg-2 text-center py-2  ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
