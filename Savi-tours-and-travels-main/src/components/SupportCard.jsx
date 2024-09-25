import React, { useEffect } from 'react'
import aos from 'aos';
import 'aos/dist/aos.css';

function SupportCard({image, text, hid}) {
  useEffect(()=>{
    aos.init({
      once: true
    })
  },[])
  return (
    <a data-aos="zoom-in" href={hid} className='bg-gray-950 flex flex-col justify-center items-center p-8 shadow-lg text-white text-lg lg:text-xl rounded-lg hover:bg-black cursor-pointer'>
        <div>
            <img src={image} alt="Support" className='mb-6' />
        </div>
        <span>{text}</span>
    </a>
  )
}

export default SupportCard