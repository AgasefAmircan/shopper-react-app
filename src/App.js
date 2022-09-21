import "./App.css";
import Promo from "./components/Promo/Promo";
import Head from "./components/Header/Head";
import Discount from "./components/Discount";
import CardSlider from "./components/CardSlider/CardSlider";
import Product from "./components/Products/Product";
import Info from "./components/Info";
import Offer from "./components/Offer";
import TopSellers from "./components/Sellers/TopSellers";
import Countdown from "./components/Countdown";
// import CountDownTimer from './components/CountDownTimer';
import Feedback from "./components/Feedback/Feedback";
import Company from "./components/Company";
import Footer from "./components/Footer/Footer";
import {BrowserRouter as Router, Route,} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Promo />
      <Head />
      <Discount />
      <CardSlider />
      <Product/>
      <Info />
      <Offer />
      <TopSellers />
      <Countdown />
      {/* <CountDownTimer/> */}
      <Feedback />
      <Company />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
