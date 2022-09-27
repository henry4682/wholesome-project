import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperForHome.scss';

function SwiperForHome() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
        },
      }}
      loop={true}
      navigation
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className=" home_banner d-flex align-items-center">
          <img
            src={require('../../../Assets/Home/banner/banner_1.jpeg')}
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" home_banner d-flex align-items-center">
          <img
            src={require('../../../Assets/Home/banner/banner_2.webp')}
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" home_banner d-flex align-items-center">
          <img
            src={require('../../../Assets/Home/banner/banner_3.png')}
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" home_banner d-flex align-items-center">
          <img
            src={require('../../../Assets/Home/banner/banner_4.png')}
            className="card-img-top"
            alt="..."
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperForHome;
