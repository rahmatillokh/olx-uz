import React from "react";
import "./category.css";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Category(props) {
  return (
    <>
      <div className="category">
        <h1>Главные категории</h1>
        <ul className="collections">
          {props.category.map((item, id) => (
            <li key={id} className="item">
              <div className="image">
                <img src={item.img} width="50px" alt="" />
              </div>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="res__category">
        <h1>Главные категории</h1>
        <Swiper className="mySwiper collections">
          {props.category.map((item, id) => (
            <SwiperSlide key={id} className="item">
              <div className="image">
                <img src={item.img} width="50px" alt="" />
              </div>
              <p>{item.text}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Category;
