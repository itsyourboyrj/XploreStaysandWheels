import React from 'react'

function FeatureCard({head, desc, icon}) {
  return (
    <div className='text-gray-200 relative bg-gray-800 p-8 pt-16 rounded-lg hover:bg-black hover:text-white cursor-default transition-all duration-300'>
        <div className='hover:-mt-6 transition-all duration-500'>
          <img src={icon} alt="icon" width="65" className='mb-4'/>
        <div className='text-3xl mb-4 font-semibold'>{head}</div>
        <div className='text-xl'>{desc}</div>
        </div>
    </div>
  )
}

export default FeatureCard