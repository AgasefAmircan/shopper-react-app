import './App.css';
import Promo from './components/Promo';
import Head from './components/Head';
import Discount from './components/Discount';
import CardSlider from './components/CardSlider';
import Info from './components/Info';
import Offer from './components/Offer';
// import Countdown from './components/Countdown';
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
       {/* <Countdown/> */}
       {/* <CountDownTimer/> */}
    </div>
  );
}

export default App;
 