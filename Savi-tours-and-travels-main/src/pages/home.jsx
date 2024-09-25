import { ReactTyped } from "react-typed";
import FeatureCard from '../components/featureCard';
import Banner from "../components/Banner";
import off_road from "../assets/offroad.svg";
import car from "../assets/car.svg";
import streets from "../assets/streets.svg";
import group from "../assets/business-goal.svg"
import AllVehicles from "../Vehicles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import Contact from "./Contact";
import Faqs from "../components/Faqs";
import aos from 'aos';
import 'aos/dist/aos.css';


function Home() {

  const [randomArray, setRandomArray] = useState([]);

  const generateRandomNumbers = () => {
    const newNumbers = [];
    while (newNumbers.length < 16) {
        const randomNumber = Math.floor(Math.random() * (AllVehicles.length-1)) + 1;
        if (!newNumbers.includes(randomNumber)) {
            newNumbers.push(randomNumber);
        }
    }
    setRandomArray(newNumbers);
};

  useEffect(()=>{
    generateRandomNumbers()
   const intId =  setInterval(() => {
    generateRandomNumbers()
    }, 3000);
    return()=>{
      clearInterval(intId)
    }
  },[])

  useEffect(()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
      aos.init({
        once: true
      })
},[])
  
  return (
    <>
    <div id="home" className="head-top min-h-screen bg-black text-white flex flex-col items-center justify-center relative ">
      <div className="top-overlay"></div>
      <div className='w-full h-screen flex flex-col justify-center items-center relative'>
        <div className='text-3xl md:text-7xl xl:text-8xl text-center font-semibold '>
        <div data-aos="fade-up">Your One Stop</div>
        <div data-aos="fade-down" >Rental Solution for</div>
        </div>
        <div className='text-3xl md:text-7xl font-bold text-red-500 h-1'>
        <ReactTyped showCursor={false} strings={["Bikes","5 Seater cars", "7 Seater Cars", "Premium cars"]} typeSpeed={51} backSpeed={21} loop/> 
        </div>
      </div>
      <div className='flex pt-20 md:pt-28 container pb-12 lg:pb-16'>
        <div data-aos="fade-up" data-aos-duration="500" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-4 md:px-12'>
            <FeatureCard head="Off-Road Explorers" desc="Conquer diverse terrain with rugged SUVs and versatile mountain bikes." icon={off_road}/>
            <FeatureCard head="Luxury Drives" desc="Indulge in luxury with premium cars and bikes for sophisticated travels." icon={car}/>
            <FeatureCard head="Group Excursions" desc="Seamless transportation for group outings with spacious 7 Seater vehicles." icon={group}/>
            <div className='hidden md:block lg:hidden'>
            <FeatureCard head="City Commuters" desc="Navigate urban streets effortlessly with compact cars and bikes." icon={streets}/>
            </div>
        </div>
      </div>
    </div>

    <Banner/>

    <section className="text-gray-300 body-font bg-gray-900">
      <div className="container px-5 py-12 pb-24 mx-auto">
        <div className="text-center mb-20 text-3xl text-white font-semibold tracking-wide fleet-understyle cursor-default" data-aos="fade-up">
          OUR FLEET
        </div>
        <div className="flex flex-wrap -m-4">
          {randomArray.slice(0,3).map((item, index)=>{return(
          <div key={index} className={`lg:w-1/4 md:w-1/2 p-4 w-full relative `} data-aos="zoom-in">
            <a className="block relative h-48 rounded overflow-hidden">
              <img alt={AllVehicles[item]?.name} className="object-cover object-center w-full h-full block transition-all duration-700" style={{ transition: 'opacity 0.7s ease-in-out' }} src={AllVehicles[item]?.imageUrl}/>
            </a>
            <div className="mt-4">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">{AllVehicles[item]?.category.split(",")[0]}</h3>
              <h2 className="text-white title-font text-lg font-medium">{AllVehicles[item]?.name}</h2>
              <p className="mt-1"><b>&#8377;{AllVehicles[item]?.price[3]}</b> / 24hrs.</p>
            </div>
          </div>
          )})}
          <div className={`lg:w-1/4 md:w-1/2 p-4 w-full relative  !z-10`} data-aos="zoom-in">
            <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center !z-50">
              <Link to="/services/all" className="text-xl text-white hover:text-red-500">View More....</Link>
            </div>
            <a className="block relative h-48 rounded overflow-hidden opacity-40">
              <img alt={AllVehicles[randomArray[3]]?.name} className="object-cover object-center w-full h-full block transition-all duration-700"  src={AllVehicles[randomArray[3]]?.imageUrl}/>
            </a>
            <div className="mt-4 opacity-40">
              <h3 className="text-gray-200 text-xs tracking-widest title-font mb-1">{AllVehicles[randomArray[3]]?.category.split(",")[0]}</h3>
              <h2 className="text-white title-font text-lg font-medium">{AllVehicles[randomArray[3]]?.name}</h2>
              <p className="mt-1"><b>&#8377;{AllVehicles[randomArray[3]]?.price[3]}</b> / 24hrs.</p>
            </div>
          </div>
          
        </div>
        <div className="text-center pt-8">
        *All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary.
        </div>
      </div>
    </section>

        <section class="text-gray-600 body-font">
        <div class="container px-6 py-16 mx-auto max-w-6xl">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={100} enableScrollSpy/>+</h2>
              <p class="leading-relaxed text-orange-400 tracking-wider font-semibold">Happy Customers</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={30} enableScrollSpy/></h2>
              <p class="leading-relaxed text-orange-400 tracking-wider font-semibold">Min Doorstep Delivery</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={25} enableScrollSpy/>+</h2>
              <p class="leading-relaxed text-orange-400 tracking-wider font-semibold">Cars</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2 border-l">
              <h2 class="title-font font-semibold text-4xl md:text-6xl text-red-500"><CountUp end={5} enableScrollSpy/>+</h2>
              <p class="leading-relaxed text-orange-400 tracking-wider font-semibold">Bikes</p>
            </div>
          </div>
        </div>
      </section>



    <section className="text-gray-100 body-font bg-gray-800">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4 ">Unmatched Variety, Endless Possibilities</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-xl">Dive into the boundless possibilities offered by our extensive array of vehicles, ensuring that every traveler finds their perfect match, tailored precisely to their unique travel requirements, preferences, and aspirations.</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[10]]?.imageUrl} data-aos="zoom-in"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[11]]?.imageUrl} data-aos="zoom-in"/>
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded" src={AllVehicles[randomArray[12]]?.imageUrl} data-aos="zoom-in"/>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block rounded" src={AllVehicles[randomArray[13]]?.imageUrl} data-aos="zoom-in"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[14]]?.imageUrl} data-aos="zoom-in"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[15]]?.imageUrl} data-aos="zoom-in"/>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section className='service-btm-bg-girl bg-white relative px-10'>
        <div className='top-overlay'></div>
        <div className='mx-auto max-w-4xl flex items-center h-[75vh] relative'>
          <div className='text-white'>
            <div className='uppercase text-sm md:text-md tracking-widest mb-6 opacity-85'>Tailored Travel Experiences</div>
            <div className='text-2xl md:text-4xl tracking-wide font-semibold mb-6'>Customize your journey with our collection of cars and bikes, designed to cater to your unique preferences and destinations.</div>
            <div className='pt-6'>
                <Link to="/contact" className="p-2 px-8 border-2 text-white hover:text-red-500 hover:border-red-500">GET IN TOUCH</Link>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-gray-800 ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:-m-2 -m-1 ">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block rounded" src={AllVehicles[randomArray[6]]?.imageUrl} data-aos="flip-left"/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[4]]?.imageUrl} data-aos="flip-right"/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[5]]?.imageUrl} data-aos="flip-left"/>
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[8]]?.imageUrl} data-aos="flip-right"/>
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block rounded" src={AllVehicles[randomArray[9]]?.imageUrl} data-aos="flip-left"/>
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block rounded" src={AllVehicles[randomArray[7]]?.imageUrl} data-aos="flip-right"/>
                </div>
              </div>
          </div>
        </div>
      </section>

      <Faqs/>

    </>
  )
}

export default Home