import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperForDetail.scss';

function SwiperForProduct({ goods }) {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      spaceBetween={70}
      loopedSlides={true}
      breakpoints={{
        756: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {goods.map((item, i) => {
        return (
          <SwiperSlide key={i} className="card product_detail-card">
            <img
              src={require(`../../../../Assets/products/${item.image}`)}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body products_detail-card-body">
              <Link className="card-title product_detail-card-title" to="">
                {item.name}
              </Link>
              <p className="card-text product_detail-card-text">
                NT{item.price}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperForProduct;
