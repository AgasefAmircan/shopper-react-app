import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useSelector } from "react-redux";
import "../Header/Header.css";
// import Cart from "../Cart/Cart";
import {
  FaHeart,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
  // FaLinkedin,
} from "react-icons/fa";

const Head = () => {
  const state=useSelector((state)=>state.handleCart)
  const [nav, setNav] = useState(true);
  return (
    <div className="header">
      <div className=" flex justify-between pt-6 pb-6">
        <div className="logo">
          <a href="/home" className="text-3xl text-black">
            Shopper
          </a>
        </div>

        <button
          className="hidden closes absolute "
          onClick={() => setNav(!nav)}
        >
          {!nav ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`navLinks ${
            !nav
              ? "block" && "transition-all ease-in duration-1000 opacity-1000"
              : "hidden"
          }`}
        >
          <a href="/home">
            <li className="text-black">Home</li>
          </a>
          <a href="/category">
            <li className="text-black">Catalog</li>
          </a>
          <a href="/product">
            <li className="text-black">Shops </li>
          </a>
          <a href="/about">
            <li className="text-black">About</li>
          </a>
          <a href="contact">
            <li className="text-black">Contact</li>
          </a>
          <a href="/faq">
            <li className="text-black">FAQ</li>
          </a>
        </ul>
        <div className={`icons h-9 flex ${!nav ? "block" : "hidden"} `}>
          <FontAwesomeIcon icon={faLinkedin} />
          <FaSearch className=" text-gray-700 rounded border-spacing-4" />
          <a href="/account">
            {" "}
            <FaUser className="text-gray-700" path="/account" />
          </a>
          <a href="/account">
            <FaHeart className="text-gray-700" path="/account" />{" "}
          </a>
          <a href="/cart">
          <button className="relative flex justify-center items-center">
            {" "}
            <FaShoppingCart
              className="text-gray-700"
              style={{ stroke: "black", strokeWidth: "1", background: "#fff" }}
            /><p className="text-white bg-orange-400 rounded-full px-1 text-sm">{state.length} </p> 
            {/* {cart.length > 0 && (
              <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-5 ">
                {cart.length}
              </span>
            )} */}
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
