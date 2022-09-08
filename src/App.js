import './App.css';
import Promo from './components/Promo';
import Header from './components/Header';
import Discount from './components/Discount';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="App"> 
       <Promo/>
       <Header/>
       <Discount/>
       <NavBar/>
    </div>
  );
}

export default App;
