import './App.css';
import Promo from './components/Promo';
import Head from './components/Head';
import Discount from './components/Discount';
import Info from './components/Info';
import Countdown from './components/Countdown';
function App() {
  return (
    <div className="App"> 
       <Promo/>
       <Head/>
       <Discount/>
       <Info/>
       <Countdown/>
    </div>
  );
}

export default App;
 