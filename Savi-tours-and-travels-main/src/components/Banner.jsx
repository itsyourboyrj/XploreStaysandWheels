import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import tik from "../assets/green-tik.png"

function Banner() {
  const AllFeatures =  [
    "24/7 Customer Support",
    "Flexible Booking Options",
    "Wide Vehicle Selection",
    "Secure Online Payments",
    "GPS Navigation Included",
    "Affordable Rental Rates",
    "Easy Pickup/Drop-off",
    "Child Safety Seats",
    "Mileage Packages Available",
    "Fuel Efficient Models",
    "Pet-Friendly Options",
    "No Hidden Fees",
    "Customizable Packages",
    "Special Weekend Deals",
    "Adventure Equipment Rental",
    "Monthly Rental Discounts",
    "Zero Deposit Options",
    "VIP Membership Benefits",
    "Car and Bike Combos"
];
  useEffect(() => {
    const splide = new Splide( '.splide', {
      type   : 'loop',
      drag   : 'free',
      focus  : 'center',
      perPage: 5,
      pauseOnFocus:false,
      pauseOnHover:false,
      arrows:false,
      pagination:false,
      autoScroll: {
        pauseOnHover:false,
        pauseOnFocus:false,
        speed: 0.8,
      },
      breakpoints: {
        460: {
          perPage: 1,
          gap: '.04rem',
        },
        640: {
          perPage: 2,
          gap: '.04rem',
        },
        795: {
          perPage: 3,
          gap: '.7rem',
        },
        1200: {
          perPage: 4,
          gap: '.7rem',
        },
      },

    } );
    splide.mount({ AutoScroll });

    return () => {
      splide.destroy(); // Make sure to destroy Splide instance when component unmounts
    };
  }, []);
  return (
    <div className="splide bg-black text-gray-200 shadow-xl drop-shadow-xl">
    <div className="splide__track">
      <ul className="splide__list">
        {AllFeatures.map((feature, id)=>{return(
        <li key={id} className="splide__slide flex justify-center items-center gap-2 py-6 lg:py-8">
          <img src={tik}  width="20" alt='Green tik'/>
          <span className='text-lg whitespace-nowrap'>{feature}</span>
        </li>
        )})}
      </ul>
    </div>
  </div>
  )
}

export default Banner