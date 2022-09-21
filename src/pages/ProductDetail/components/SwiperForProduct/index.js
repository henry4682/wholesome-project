import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperForDetail.scss';

function SwiperForProduct({ goods }) {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={false}
      breakpoints={{
        756: {
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: true,
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 50,
          centeredSlides: false,
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
              <Link
                className="card-title product_detail-card-title"
                to={`/productDetail/${item.id}`}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }}
              >
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
