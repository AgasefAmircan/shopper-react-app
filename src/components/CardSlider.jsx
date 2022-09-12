import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import famale from "../asset/images/famale.jpg";
import male from "../asset/images/male.jpg";
import child from "../asset/images/child.jpg";
import { FaArrowRight } from "react-icons/fa";
const CardSlider = () => {
  return (
    <div className="card mt-5">
      <div className="category flex ">
        <a href="/shop" className="cursor-pointer">
        <div className="famale">
          <img src={famale} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl  flex justify-center text-center items-center" style={{'color':'white'}}>Women</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/shop" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4">Shop Woman 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        <a href="/shop" className="cursor-pointer">
        <div className="male">
          <img src={male} alt="" />
          <p className="-mt-60  mb-28 font-semibold text-5xl " style={{'color':'white'}}>Men</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/shop" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4">Shop Woman 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
        <a href="/shop" className="cursor-pointer">
        <div className="child">
          <img src={child} alt="" />
          <p className="-mt-60 mb-28 font-semibold text-5xl" style={{'color':'white'}}>Kids</p>
          <div className="shop  bg-white justify-center items-center text-center flex ">
          <a href="/shop" className="pt-2 pb-2 pl-4 pr-4 bg-white flex justify-center items-center gap-4">Shop Woman 
          <FaArrowRight/></a>
          </div>
        </div>
        </a>
      </div>
    </div>
  );
};

export default CardSlider;
