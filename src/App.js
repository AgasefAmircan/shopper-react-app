import Home from "../src/pages/Home/Home";
import About from "./pages/About/About";
import Categories from "./pages/Category/Categories";
import ProductPage from '../src/pages/Product/ProductPage'
import Error from "./pages/Error/Error";
// import Head from "./components/Header/Head";
// import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Cart from "./components/Cart/Cart";
// import { useState,useEffect } from "react";
function App() {
  // useEffect(() => {
  //  document.body.oncontextmenu=function (){
  //   return false;
  //  };
  //  document.onselectstart=function(e){
  //   return false;
  //  };
  //  document.onkeydown=function(e){
  //   if(e.altKey==123){
  //     return false;
  //   }
  //   if(e.ctrlKey && e.shiftKey && e.key==73){
  //     return false;
  //   }
  //   if(e.ctrlKey && e.shiftKey && e.altKey==74){
  //     return false;
  //   }
  //   if(e.ctrlKey && e.altKey==85){
  //     return false;
  //   }
  //  }
  // });
  // const [products, setProducts] = useState([]);
  // const [filters, setFilters] = useState([]);
  // const [cart, setCart] = useState([]);

  // const [activeCategory, setActiveCategory] = useState("All");
  // const [activePrice, setActivePrice] = useState("");
  // const [isShowCart, setIsShowCart] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // // Fetch data
  // const fetchProducts = async () => {
  //   setIsLoading(true);
  //   try {
  //     const data = await fetch("https://fakestoreapi.com/products");
  //     const products = await data.json();
  //     setProducts(products.data);
  //     setFilters(products.data);
  //     setIsLoading(false);
  //   } catch (err) {
  //     setIsLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // //Handle Add to Cart
  // const handleAddToCart = (product) => {
  //   setCart((prev) => {
  //     const findProductInCart = prev.find((item) => item.id === product.id);

  //     if (findProductInCart) {
  //       return prev.map((item) =>(
  //         item.id === product.id ? { ...item, amount: item.amount + 1 } : item));
  //     } else {
  //       return [...prev, { ...product, amount: 1 }];
  //     }
  //   });
  // };

  // //Handle Remove to Cart
  // const handleRemoveFromCart = (id) => {
  //   setCart((prev) => {
  //     return prev.reduce((cal, item) => {
  //       if (item.id === id) {
  //         if (item.amount === 1) {
  //           return cal;
  //         } else {
  //           return [...cal, { ...item, amount: item.amount - 1 }];
  //         }
  //       }
  //       return [...cal,{...item}]
  //     },[]);
  //   });
  // };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/item/:id" element={<ProductPage />} />
          <Route path="/category" element={<Categories />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      {/* {isShowCart && (
        <Cart
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToCart={handleAddToCart}
          setIsShowCart={setIsShowCart}
        />
      )} */}
    </div>
  );
}

export default App;
