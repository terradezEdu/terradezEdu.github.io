import logo from './logo.svg';
import './App.css';
import Navbar from './container/Navbar/navbar';
import Home from './container/Home/Home';
import Bio from './container/Bio/bio';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      
      <Home></Home>
      <Bio></Bio>
    </div>
  );
}

export default App;
