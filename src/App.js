import './App.css';
import Promo from './components/Promo/Promo'
import Head from './components/Header/Head';
import Discount from './components/Discount';
import CardSlider from './components/CardSlider';
import Info from './components/Info';
import Offer from './components/Offer';
import TopSellers from './components/Sellers/TopSellers';
import Countdown from './components/Countdown';
import Feedback from './components/Feedback'
// import CountDownTimer from './components/CountDownTimer';
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
       <Feedback/>
       {/* <CountDownTimer/> */}
    </div> 
  );
}

export default App;
 