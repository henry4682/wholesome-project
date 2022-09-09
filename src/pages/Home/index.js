import React from 'react';
import './index.scss';
import { FiArrowLeftCircle } from 'react-icons/fi';

function Home(props) {
  return (
    // swiper
    <div>
      <div>
        <img src="https://picsum.photos/id/694/600/400" alt="" />
      </div>

      <div className="d-flex justify-content-between">
        <div className="bg-primary home_block home_block_1 py-3">
          <p className="home_h2 mb-4">加入會員</p>
          <p className="home_h3 mb-4">贈送註冊金</p>
          <p className="home_h1 mb-4">100元</p>
        </div>
        <div className="bg-primary home_block home_block_2 py-3 ">
          <p className="home_h2 mb-4">加入會員</p>
          <p className="home_h3 mb-4">贈送註冊金</p>
          <p className="home_h1 mb-4">100元</p>
        </div>
        <div className="bg-primary home_block home_block_3 py-3">
          <p className="home_h2 mb-4">加入會員</p>
          <p className="home_h3 mb-4">贈送註冊金</p>
          <p className="home_h1 mb-4">100元</p>
        </div>
      </div>

      <div className="home_recommend my-5">
        <p className="home_title text-center">Hot Sale</p>
      </div>

      <div className="container">
        <ul className="d-flex  row">
          <li className=" col-md-4  col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
          <li className=" col-md-4 col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
          <li className="col-md-4 col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
          <li className=" col-md-4 col-lg-3 text-center py-2 ">
            <img className="cart_product_pic" src="" alt="" />
            <div className="py-2">梅子醋</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              加入購物車
            </button>
          </li>
        </ul>
      </div>

      <div className="home_recommend my-5">
        <p className="home_title text-center">Recipe</p>
      </div>

      <div className="container">
        <ul className="d-flex row my-5">
          <li className=" col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <button className="home_read"> 繼續閱讀</button>
          </li>
          <li className="col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <button className="home_read"> 繼續閱讀</button>
          </li>
          <li className="col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <button className="home_read"> 繼續閱讀</button>
          </li>
          <li className="col-md-6 col-lg-3 text-center py-2 ">
            <img className="home_recipe_pic" src="" alt="" />
            <div className="py-2">隔日燕麥</div>
            <button className="home_read"> 繼續閱讀</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
