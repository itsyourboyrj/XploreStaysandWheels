import { useEffect } from "react";
import { Link } from "react-router-dom";
import aos from 'aos';
import 'aos/dist/aos.css';

function ServiceCard({item}) {
    useEffect(()=>{
        aos.init({
            once: true
          })
    },[])
  return (
        <div className="p-4 md:w-1/3" data-aos="fade-up">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={item.imageUrl} alt="blog"/>
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 uppercase">{item.category.split(",")[0]}</h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.name}</h1>
                    <p className="leading-relaxed mb-3"><b>&#8377;{item.price[3]}</b> / 24hrs.</p>
                    <div className="flex items-center flex-wrap ">
                    <Link to="/vehicleDetails" state={{item}} className='bg-red-500 rounded w-full p-2 text-white uppercase text-center'>Book now</Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ServiceCard