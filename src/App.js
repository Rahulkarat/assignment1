import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>
      {/* <Add/> */}
    </div>
  );
}

export default App;
