import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Services from './pages/Services';
import Support from './pages/Support';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';
import VehicleDetails from './pages/VehicleDetails';
import Terms from './pages/Terms';

function RouteContent() {
  return (
    <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/services/:type' element = {<Services/>}/>
        <Route path='/support' element = {<Support/>}/>
        <Route path='/aboutUs' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/bookNow' element = {<Book/>}/>
        <Route path='/vehicleDetails' element = {<VehicleDetails/>}/>
        <Route path='/termsnconditions' element = {<Terms/>}/>
    </Routes>
  )
}

export default RouteContent