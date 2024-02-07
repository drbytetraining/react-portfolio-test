import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/Test';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Er404 from './components/Er404';
import Header from './components/Header';
import Services from './components/Services';
import Api from './components/Api';
import { NavBar } from './assets/data';




const App = () => {
  return (
    <div>
      {/* <Test/>   */}

      {/* <BrowserRouter> */}
        <NavBar />
        {/* <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<About />} path='/about' />
          <Route element={<Contact />} path='/contact' />
          <Route element={<Services />} path='/services' />
          <Route element={<Portfolio />} path='/portfolio' />
          <Route element={<Er404 />} path='*' />
        </Routes>
        <Footer />
      </BrowserRouter> */}

      {/* <Api/> */}
    </div>
  )
}

export default App
