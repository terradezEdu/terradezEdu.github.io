import logo from './logo.svg';
import './App.css';
import Navbar from './container/Navbar/navbar';
import Home from './container/Home/Home';
import Bio from './container/Bio/bio';
import Researchs from './container/Researchs/researchs';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar></Navbar>
      </header>
      <div className='container' style={{textAlign: 'center'}}>
        <Home></Home>
        <Bio></Bio>
      </div>
      <div className='float-left'>
        <Researchs></Researchs>
      </div>
    </div>
  );
}

export default App;
