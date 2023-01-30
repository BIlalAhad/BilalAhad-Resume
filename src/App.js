
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className='overflow-x-hidden'>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="./#about" element={<Home/>}/>
        <Route path="./Portfolio" element={<Home/>}/>
        <Route path="./#contact" element={<Home/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
