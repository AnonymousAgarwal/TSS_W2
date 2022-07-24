import './App.css';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Music from './pages/Music';
import Tech from './pages/Tech';
import Sports from './pages/Sports';
import Home from './pages/Home';

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component=Home
      break
    case "/music":
      Component=Music
      break
    case "/tech":
      Component=Tech
      break
    case "/sports":
      Component=Sports
      break
    case "/contact":
      Component=Contact
      break
  }
  return (
    <div>
    <Navbar/>
    <Component/>
    </div>
  );
}

export default App;
