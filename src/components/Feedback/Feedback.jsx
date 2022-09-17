import React,{useRef,useState}from "react";
import { ReactDOM } from 'react'
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Carousel } from '@trendyol-js/react-carousel'
// import { Carousel } from 'react-responsive-carousel'
// import Child from '../asset/images/child.jpg'
// import Kid from '../asset/images/child.jpg'
// import Kid2 from '../asset/images/child.jpg'
// import Kid3 from '../asset/images/child.jpg'
// import Kid4 from '../asset/images/child.jpg'
// import Kid5 from '../asset/images/child.jpg'
const Feedback = () => {
  return (
    <div className="py-12 block">
      <div className="header flex flex-col justify-center items-center">
        <p className="text-gray-400 mb-3">WHAT BUYERS SAY</p>
      </div>
      <h4 className="mb-10 text-4xl font-medium">Latest buyers Reviews</h4>
    </div>
  );
};

export default Feedback;
