import React from 'react';
import './index.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../utils/config';
import SwiperForHome from './SwiperForHome';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';

function Home() {
  const [newProducts, setNewProducts] = useState([]);
  useEffect(() => {
    let getNewestProducts = async () => {
      let response = await axios.get(`${API_URL}/newProducts`);
      setNewProducts(response.data);
    };
    getNewestProducts();
  }, []);

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
      <div className="home_recommend my-5">
        <p className="home_title text-center">New Products !!</p>
      </div>
      <div className="container">
        <ul className="d-flex row gy-3 justify-content-center ">
          {newProducts.map((item, i) => {
            return (
              <li key={i} className=" my-3 col-5 col-lg-2 text-center py-2 ">
                <img
                  className="cart_product_pic"
                  src={require(`../../Assets/products/${item.image}`)}
                  alt=""
                />
                <div className=" py-2 text-center">{item.name}</div>
                <div className="my-2 text-primary">
                  NT$ <em className="add-on text-primary">{item.price}</em>
                </div>
                <button className="btn btn-primary text-light px-4">
                  加入購物車
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="home_recommend my-5">
        <p className="home_title text-center">Recipe</p>
      </div>
      <div className="container">
        <ul className="d-flex row my-5  justify-content-center">
          <li className=" col-sm-5  col-md-4  col-lg-3 text-center py-2 ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className="col-sm-5  col-md-4  col-lg-3 text-center py-2 ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className="col-sm-5  col-md-4  col-lg-3 text-center py-2 ">
            <img
              className="home_recipe_pic"
              src={require('../../Assets/products/milk2019.jpg')}
              alt=""
            />
            <div className="py-2">隔日燕麥</div>
            <a className="home_read"> 繼續閱讀</a>
          </li>
          <li className="col-sm-5  col-md-4  col-lg-3 text-center py-2 ">
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
