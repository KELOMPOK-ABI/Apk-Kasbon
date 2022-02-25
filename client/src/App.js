import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/Navbar'

import AppTitle from './components/AppTitle';
import Home from './pages/Home'
import AddKasbon from './pages/AddKasbon'
import DetailKasbon from './pages/DetailKasbon'

import {
  Routes,
  Route
}from 'react-router-dom'


function App() {
  return ( 
    <div className="App container-fluid">
    <AppTitle></AppTitle>
    <Navbar></Navbar>

    <Routes>
      
      <Route exact path="/" element={ <Home/>
      } />

      <Route exact path="/kasbons/addkasbon" element={
        <AddKasbon></AddKasbon>
      } />
      
      <Route exact path = "/kasbons/info/:id" element={
        <DetailKasbon></DetailKasbon>
      }>

      </Route>
    </Routes>
    
    </div>
  );
}

export default App;
