import React, { useState } from 'react';
import './App.css'; // Create App.css for styling 
import Sidebar from './components/layout/SideBar';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CustomerPage from './pages/CustomerPage';
import PaymentPage from './pages/PaymentPage';
import TripPage from './pages/TripPage';
import VehiclePage from './pages/VehiclePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';




function App() {
  

  return (
    
      <Routes>
        <Route path="/" element = {<HomePage />}/>
        
        <Route path="/customer" element = {<CustomerPage />}/>
          
        <Route path="/payment" element = {<PaymentPage />}/>
  
        <Route path="/trip" element = {<TripPage />}/>
      
        <Route path="/vehicle" element = {<VehiclePage />}/>
      
      </Routes>
  )
}

export default App;
