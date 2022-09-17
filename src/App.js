import './App.css';
import Promo from './components/Promo/Promo'
import Head from './components/Header/Head';
import Discount from './components/Discount';
import CardSlider from './components/CardSlider';
import Info from './components/Info';
import Offer from './components/Offer';
import TopSellers from './components/Sellers/TopSellers';
import Countdown from './components/Countdown';
// import CountDownTimer from './components/CountDownTimer';
// import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App"> 
       <Promo/>
       <Head/>
       <Discount/>
       <CardSlider/>
       <Info/>
       <Offer/>
       <TopSellers/>
       <Countdown/>
       {/* <CountDownTimer/> */}
       {/* <Feedback/> */}
       <Footer/>
    </div> 
  );
}

export default App;
 