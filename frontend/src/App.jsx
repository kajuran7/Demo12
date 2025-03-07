import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from "react-router-dom";
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Designs from './Components/Designs';
import Contact from './Components/Contact';
import Signup from './Components/Signup';
import DesignDetails from './Components/DesignDetails';
import Download from './Components/Download';
import Dashboard from './Components/Admin/Dashboard';
import AdminRoutes from './Components/AdminRoutes';
import Payment from './Components/Payment';
import Success from './Components/success';
import Checkout from './Components/Checkout';

function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Designs" element={<Designs />} />
        <Route path="/Register" element={<Signup />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/designs/:id" element={<DesignDetails />} />
        <Route path="/Admin/*" element={<AdminRoutes><Dashboard /></AdminRoutes>} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
