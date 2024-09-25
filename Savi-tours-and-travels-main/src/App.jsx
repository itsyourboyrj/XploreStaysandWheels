
import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import RouteContent from './Route'
import { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [mobilePadding, setMobilePadding] = useState(false);
  const path = location.pathname;
  const getFromChild = (data) => {
    setMobilePadding(data);
  };
  


  return (
    <>
    <Header parentfn={getFromChild}/>
    <div className={` ${mobilePadding ? "pt-14" : ""}  min-h-screen w-full ${
            path !== "/" ? "savi-page-body" : ""
          } `}>
    <RouteContent/>
    </div>
    <Footer/>
    </>
  )
}

export default App
