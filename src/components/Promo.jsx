import React from "react";
import truck from "../asset/images/truck.svg";
import usa from "../asset/images/usa.svg";
import "../asset/Promo.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaMedium,
  FaChevronDown,
  FaBars,
} from "react-icons/fa";
const Promo = () => {
  return (
    <>
      <div className="bg">
        <div className="responsive">
          <span className="truck">
            <img className="pr-2" src={truck} alt="" /> FREE SHIPPING WORLDWIDE
          </span>
          <button className="">
            <FaBars />
          </button>
        </div>
      </div>
      <div className="promo close ">
        <div className="sec-1  hidden">
          <span id="truck">
            <img className="pr-2" src={truck} alt="" /> FREE SHIPPING WORLDWIDE
          </span>
          <span className="">
            <img src={usa} alt="" />
            United States <FaChevronDown />
          </span>
          <span className="">
            USD <FaChevronDown />
          </span>
          <span className="">
            English
            <FaChevronDown />
          </span>
        </div>
        <div className="sec-2 ">
          <div className="sec-2-1">
            <a href="/shipping">Shipping</a>
            <a href="/fag"> FAG</a>
            <a href="/contact"> Contact</a>
          </div>
          <div className="sec-2-2 ">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaMedium />
          </div>
        </div>
      </div>
    </>
  );
};

export default Promo;
