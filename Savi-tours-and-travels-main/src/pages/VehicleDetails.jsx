import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import aos from 'aos';
import 'aos/dist/aos.css';

function VehicleDetails() {
  const [duration, setDuration] = useState(["3", "24 Hrs"])
    const location = useLocation();
    const data = location.state?.item

    useEffect(()=>{
      aos.init({
        once: true
      })
    },[])

  return (
    <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-10 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={data.imageUrl} data-aos="fade-right"/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0" >
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1" data-aos="fade-up">{data?.name}</h1 >
        <ul className='px-6'>
            {data?.description?.map((item, index)=>{return(
                <li data-aos="fade-up" key={index} className=' list-disc'>{item}</li>
            )})}
        </ul>
        <div className='flex items-center justify-end'>
                    <span className="mr-3 font-semibold">Select Duration:</span>
                    <div className="relative">
                      <select
                        value={duration[0]}
                       onChange={(e)=> {setDuration([e.target.value,e.target.options[e.target.selectedIndex].textContent])}}
                        className="rounded-md border-[1.5px] appearance-none py-1  text-base pl-3 pr-10 form-control"
                      >
                        <option value="0">Hourly</option>
                        <option value="1">6 Hrs</option>
                        <option value="2">12 Hrs</option>
                        <option value="3">24 Hrs</option>
                        <option value="4">Monthly</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
        <div className="flex items-center pb-5 border-b-2 border-gray-100 mb-4">
        </div>
        <div className="flex flex-wrap gap-2 justify-around md:justify-between">
          <span className="title-font font-medium text-2xl text-gray-900 "><b>&#8377;{data.price[duration[0]]}</b> / {duration[1]}</span>
          <div className=' flex gap-2 font-semibold'>
            <Link to={`/services/${data.category.split(",")[0]}`} className="flex text-black bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-sm md:text-lg shadow-lg">Go Back</Link>
            <Link to="/bookNow" className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-sm md:text-lg shadow-lg">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {duration[0]==="5"&&
  <div className="text-center pt-8">
        *Price and availability may vary for monthly rentals based on the season and availability of the vehicle.
    </div>}
</section>
  )
}

export default VehicleDetails