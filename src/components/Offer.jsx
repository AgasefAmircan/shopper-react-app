import React from "react";
import { FaArrowRight } from "react-icons/fa";
import  offer1 from '../asset/images/offer1.jpg'
import  offer2 from '../asset/images/offer2.jpg'
import  offer3 from '../asset/images/offer3.jpg'
import  offer4 from '../asset/images/offer4.jpg'
const Offer = () => {
  return (
    <div className="pt-12">
      <div className="header flex flex-col justify-center ">
        <h6 className="text-gray-400 mb-3">New Collection</h6>
        <h2 className="mb-4 font-medium text-4xl">Best Picks 2022</h2>
        <p className="mb-10 text-gray-500">
              Appear, dry there darkness they're seas, dry waters thing fly midst. Beast, above fly brought Very green.
            </p>
      </div>
      <div className="offers"></div>
      <div className="image-content-1 flex">
        <div>
          <img src={offer1} alt="" />
          <p>Bags Collection</p>
          <span><a href="shop">Shop Now</a> <FaArrowRight/></span>
        </div>
        <div>
          <img src={offer2} alt="" />
          <p>Bags Collection</p>
          <span><a href="shop">Shop Now</a> <FaArrowRight/></span>
        </div>
      </div>
      <div className="image-content-2 flex">
        <div>
          <img src={offer3} alt="" />
        </div>
        <div>
          <img src={offer4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
