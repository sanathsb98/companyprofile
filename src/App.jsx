import { useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Lenis from '@studio-freight/lenis'
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ContactModale from './components/contactmodale/ContactModale';

function App() {
  const [count, setCount] = useState(0)

  const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

  return (
    <>
    
      <BrowserRouter>
<Navbar/>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/modale' Component={ContactModale} />
        </Routes>
        <Footer/>
      </BrowserRouter>
   
    </>
  )
}

export default App
