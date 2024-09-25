import React from 'react'

function Contact() {
  return (
    <section className="text-gray-100 bg-gray-900 body-font relative h-screen">
  <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.839209999298!2d75.6930141765058!3d31.25287417433754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f8fc41f1989%3A0x9dc056b05d9eb992!2sH.D%20apartments!5e0!3m2!1sen!2sin!4v1713023851840!5m2!1sen!2sin" style={{"filter": "grayscale(1) contrast(1.2) opacity(0.4);"}}></iframe>
      {/* <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a className="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p className="leading-relaxed">123-456-7890</p>
        </div>
      </div> */}
    </div>

    <div className='md:w-1/2 lg:w-1/3'>
      <h2 className='text-2xl md:text-4xl font-semibold text-center py-8'>Get in touch with us</h2>
      <div className='mb-8'>
      <span className='text-xl md:text-2xl font-semibold text-red-500'>Address:</span>
      <p className='mt-4 md:text-lg tracking-wide leading-10'>HD Apartments, law gate, near LPU, maheru, phagwara, punjab , 144401</p>
      </div>
      <div className='mb-8'>
      <span className='text-xl md:text-2xl font-semibold text-red-500'>Contact:</span>
      <p className='mt-4 md:text-lg tracking-wide leading-10'>6299069730</p>
      </div>
      <div className='mb-8'>
      <span className='text-xl md:text-2xl font-semibold text-red-500'>Email:</span>
      <p className='mt-4 md:text-lg tracking-wide leading-10'>support@xplorerentals.in</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Contact