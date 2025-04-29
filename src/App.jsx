import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';

function App() {

  return(
    <>  
    <BrowserRouter>
    <Navbar />
    <Hero />
  </BrowserRouter>
  </>

)
}

export default App
