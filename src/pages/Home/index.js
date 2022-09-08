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
        <div className="bg-primary home_block"></div>
        <div className="bg-primary home_block"></div>
        <div className="bg-primary home_block"></div>
      </div>

      <div className="recommend mt-5">
        <p className="home_title text-center">Hot Sale</p>
      </div>

      <div className="container">
        <ul className="d-flex justify-content-around">
          <li className=" product_item text-center py-2 ">
            <img src="" alt="" />
            <div className="py-1">梅子醋</div>
            <div className="price-add pt-2">加購價</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              我要加購
            </button>
          </li>
          <li className=" product_item text-center py-2 ">
            <img src="" alt="" />
            <div className="py-1">梅子醋</div>
            <div className="price-add pt-2">加購價</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              我要加購
            </button>
          </li>
          <li className=" product_item text-center py-2 ">
            <img src="" alt="" />
            <div className="py-1">梅子醋</div>
            <div className="price-add pt-2">加購價</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              我要加購
            </button>
          </li>
          <li className=" product_item text-center py-2 ">
            <img src="" alt="" />
            <div className="py-1">梅子醋</div>
            <div className="price-add pt-2">加購價</div>
            <div className="my-2 text-primary">
              NT$ <em className="add-on text-primary">3,566</em>
            </div>
            <button className="btn btn-primary text-light px-4">
              我要加購
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
