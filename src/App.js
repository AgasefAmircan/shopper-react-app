// import Promo from "./components/Promo/Promo";
// import Head from "./components/Header/Head";
// import Discount from "./components/Discount";
// import CardSlider from "./components/CardSlider/CardSlider";
// import Product from "./components/Products/Product";
// import Info from "./components/Info";
// import Offer from "./components/Offer";
// import TopSellers from "./components/Sellers/TopSellers";
// import Countdown from "./components/Countdown";
// // import CountDownTimer from './components/CountDownTimer';
// import Feedback from "./components/Feedback/Feedback";
// import Company from "./components/Company";
// import Footer from "./components/Footer/Footer";
import Home from '../src/pages/Home/Home'
import About from "./pages/About/About";
import Categories from './pages/Category/Categories';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/category" element={<Categories/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
