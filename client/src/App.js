import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import {
  Home,
  Users,
  Kasbon,
  DetailKasbon,
  AddKasbon, 
  UpdateKasbon,
}from './pages'
import Navbar from './components/Navbar'
import AppTitle from './components/AppTitle'

import {
  Routes,
  Route,
}from 'react-router-dom'


function App() {
  return ( 
    <div className="App container-fluid">
    <AppTitle></AppTitle>
    <Navbar></Navbar>

    <Routes>
      
      <Route exact path="/" element={ <Home/>
      } />

      <Route exact path="/users" element={
        <Users></Users>
      } />

      <Route exact path="/kasbons/kasbon" element={
        <Kasbon></Kasbon>
      } />

      <Route exact path="/kasbons/info/:id" element={
        <DetailKasbon></DetailKasbon>
      } />

      <Route exact path="/kasbons/addkasbon" element={
        <AddKasbon></AddKasbon>
      } /> 

      <Route exact path="/kasbons/update/:id" element={
        <UpdateKasbon></UpdateKasbon>
      } /> 

    </Routes>
    </div>
  );
}

export default App;
