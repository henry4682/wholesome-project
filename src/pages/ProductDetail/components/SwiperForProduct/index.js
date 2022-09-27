import React from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import './SwiperForDetail.scss';

function SwiperForProduct({ goods, setPage }) {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={true}
      breakpoints={{
        756: {
          slidesPerView: 3,
          spaceBetween: 50,
          centeredSlides: false,
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 40,
          centeredSlides: false,
        },
      }}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {goods.map((item, i) => {
        return (
          <SwiperSlide
            key={i}
            className="card product_detail-card  d-flex flex-column  align-items-center"
          >
            <img
              className="productList_product_pic"
              src={require(`../../../../Assets/products/${item.image}`)}
              alt=""
            />
            <div className="  py-2 ">
              <Link
                className=" card-title products_list-card-title word-wrap "
                to={`/productDetail/${item.id}`}
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                  setPage(1)
                }}
              >
                <div className="text-truncate">{item.name}</div>
              </Link>
            </div>
            <div className=" my-2 text-primary products_list-card-text">
              <em className="add-on text-primary">NT${item.price}</em>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default SwiperForProduct;
