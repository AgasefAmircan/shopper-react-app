import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../asset/Header.css";
import {
  FaHeart,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Head = () => {
  const [nav, setNav] = useState(true);
  const [show,setShow]=useState(false);

  const handleShow=()=> setShow(true)
  const handleClose=()=> setShow(false)
  return (
    <div className="header">
      <Modal show={show} onHide={handleClose} className="w-96 block ml-[75%] "  >
        <div className="modal">
          <div className="">Your Cart(2)
          <Button onClick={handleClose}>
            <FaTimes/>
          </Button>
          </div>
        </div>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className="bg-" onClick={handleClose}>
           <a href="/checkout"> Continue to Ckeckout</a>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            View Cart
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="mobile flex justify-between pt-6 pb-6" >
        <div className="logo">
          <a href="/home" className="text-3xl">
            Shopper
          </a>
        </div>

        <button className="hidden closes absolute " onClick={() => setNav(!nav)}>
          {!nav ? <FaTimes /> : <FaBars />}
        </button>
          <ul className={`navLinks ${!nav ? "block" &&"transition-all ease-in duration-1000 opacity-1000" : "hidden"}`}>
            <a href="/home">
              <li>Home</li>
            </a>
            <a href="/product">
              <li>Catalog</li>
            </a>
            <a href="/shop">
              <li>Shops</li>
            </a>
            <a href="/about"> 
              <li>About</li>
            </a>
            <a href="contact">
              <li>Contact</li>
            </a>
            <a href="/faq">
              <li>FAQ</li>
            </a>
          </ul>
          <div className={`icons h-9 flex ${!nav ? "block" : "hidden"} `}>
            <FaSearch className="" />
            <FaUser className="" />
            <FaHeart className="" />
            <FaShoppingCart className="" onClick={handleShow}/>
          </div>
        </div>
      </div>
  );
};

export default Head;

// import React from "react";
// // import { useState } from "react";
// import {
//   FaHeart,
//   FaSearch,
//   FaUser,
//   FaShoppingCart,
// //   FaBars,
// //   FaTimes,
// } from "react-icons/fa";
// import "../asset/Header.css";
// const Header = () => {
// //   const [nav, setNav] = useState(false);
//   return (
//     <div className="header md:block">
//       <Header className="flex justify-between pt-6 pb-6">
//         <div className="logo">
//           <a href="/home" className="text-3xl">
//             SHOPPER
//           </a>
//         </div>
//         <button className="hidden closes">

//         </button>

//         <ul className='navLinks flex '>
//           <a href="/home">
//             <li>Home</li>
//           </a>
//           <a href="/product">
//             <li>Catalog</li>
//           </a>
//           <a href="/shop">
//             <li>Shop</li>
//           </a>
//           <a href="/about">
//             <li>About</li>
//           </a>
//           <a href="contactUs">
//             <li>Contact Us</li>
//           </a>
//           <a href="/faq">
//             <li>FAQ</li>
//           </a>
//         </ul>
//         <div className="icons flex">
//           <FaSearch className="" />
//           <FaUser className="" />
//           <FaHeart className="" />
//           <FaShoppingCart className="" />
//         </div>
//       </Header>
//     </div>
//   );
// };

// export default Header;
