import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AllVehicles from '../Vehicles';
import ServiceCard from '../components/ServiceCard';

function Services() {
    let { type } = useParams();
    const [vehicleType, setVehicleType] = useState(type)

    useEffect(()=>{
        setVehicleType(type)
    },[type])

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
          });
    },[])

    return (
    <>
        <div className='container text-center py-6 mx-auto'>
            <div className='text-4xl font-semibold tracking-wide'>Vehicle rental tariffs in law gate</div>
            <div>*All prices are exclusive of taxes and fuel. Images used for representation purposes only, actual color may vary</div>
        </div>
        {/* Toggle */}
        <div className=''>
            <ul className='flex flex-wrap items-center justify-center mx-auto w-fit md:border-2  p-1 rounded-full'>
                <li className={`${vehicleType==="all"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("all")}>All</li>
                <li className={`${vehicleType==="bike"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("bike")}>Bikes</li>
                <li className={`${vehicleType==="5seater"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("5seater")}>5 Seaters</li>
                <li className={`${vehicleType==="7seater"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("7seater")}>7 Seaters</li>
                <li className={`${vehicleType==="luxury"?"bg-red-500 rounded-full text-white font-semibold":""} cursor-pointer px-2 md:px-4 md:py-1`} onClick={()=>setVehicleType("luxury")}>Luxury Cars</li>
            </ul>
        </div>
        {/* Toggle */}
        <section className="text-gray-600 body-font">
                <div className="container px-5 py-12 pb-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {AllVehicles.filter((vehicle)=>vehicle.category.includes(vehicleType)).sort((a, b) => b.price[0] - a.price[0]).map((item)=>{return(
                           <ServiceCard key={item.id} item={item}/>
                        )})}
                    </div>
                </div>
        </section>
    </>
  )
}

export default Services