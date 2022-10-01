import React, { useEffect } from "react";
import { useState } from "react";
import "./TopSellers.css";
// import Women from "../../asset/images/famale.jpg";
import Men from "../../asset/images/male.jpg";
import Child from "../../asset/images/child.jpg";
const TopSellers = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };
  const [data, setData] = useState([]);
  const getPorduct = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
      // console.log(json);
      setData(json);
    })
  };
  useEffect(() => {
    getPorduct();
  }, []);

  // async function datas(){
  // fetch("https://fakestoreapi.com/products/1")
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  return (
    <div className="py-24">
      <div className="header flex justify-center items-center">
        <p className="font-bold text-4xl">Top month Sellers</p>
      </div>
      <div className="bloc-tabs">
        <button
          className={toggle === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Women
        </button>
        <button
          className={toggle === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Men
        </button>
        <button
          className={toggle === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Kids
        </button>
      </div>
      <div className="container flex-wrap">
        <div
          className={toggle === 1 ? "content p-0 active-content" : "content"}
        >
          <div className="items">
            {data.map((product) => (
              <div className="item item-1 hover:bg-slate-200" id={product.id}>
               <a href="/item"> <img src={product.image} className="hover:scale-y-90 hover:scale-x-90 transition-all ease-in duration-300" alt="" /> </a>
                <span className="badgeintop">New</span>
                <div className="item-info">
                  <a href={`/item`} className="hover:bg-slate-300">{product.category}</a>
                  <b>
                  <a href="/item"> <h5 className="fw-bold hover:bg-slate-400 ">{product.title}</h5> </a>
                  </b>
                  <span className="price hover:bg-slate-300 cursor-pointer">{product.price} $</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={toggle === 2 ? "content  active-content" : "content"}>
          <div className="items">
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Men} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className={toggle === 3 ? "content  active-content" : "content"}>
          <div className="items">
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
            <div className="item item-1">
              <img src={Child} alt="" />
              <span className="badgeintop">New</span>
              <div className="item-info">
                <a href="#shoes"> Shoes</a>
                <b>
                  <h5 className="fw-bold">Leather mid-heel Sandals</h5>
                </b>
                <span className="price">$129.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellers;
