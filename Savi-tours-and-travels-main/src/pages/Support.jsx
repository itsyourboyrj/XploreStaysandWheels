import React, { useEffect } from "react";
import SupportCard from "../components/SupportCard";
import car from "../assets/car-svgrepo-com.svg";
import help from "../assets/help-svgrepo-com.svg";
import contact from "../assets/contact-headset-communication-svgrepo-com.svg";
import payment from "../assets/payment.svg";
import location from "../assets/location.svg";
import discount from "../assets/discount.svg";
import aos from 'aos';
import 'aos/dist/aos.css';

function Support() {

  useEffect(()=>{
    aos.init({
      once: true
    })
  },[])
  return (
    <>
      <div className="bg-gray-900 min-h-screen w-full">
        <div className="text-center text-white py-12 lg:py-24">
          <p className="uppercase text-md md:text-xl tracking-widest font-light mb-4" data-aos="fade-up">
            Welcome to Xplore Wheels support
          </p>
          <h1 className=" text-4xl md:text-7xl font-bold" data-aos="fade-down">How Can We Help?</h1>
        </div>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 container mx-auto w-full gap-4 lg:gap-8 px-4">
          <SupportCard image={help} text="Booking Assistance" hid="#1"/>
          <SupportCard image={payment} text="Payment Queries" hid="#2"/>
          <SupportCard image={discount} text="Student Discounts" hid="#3"/>
          <SupportCard image={car} text="Vehicle Specifications:" hid="#4"/>
          <SupportCard image={location} text="Location Information" hid="#5"/>
          <SupportCard image={contact} text="Contact Us" hid="#6"/>
        </div>
        <div className="container mx-auto p-6 py-24 text-white">
          <div data-aos="fade-right" className="py-8">
            <h1 id="1" className="text-2xl lg:text-4xl mb-4 font-semibold">
              Need help with booking a vehicle from our diverse fleet?
            </h1>
            <p className="lg:text-xl tracking-wider font-light leading-8 lg:leading-9">
              Looking to book a vehicle from our diverse fleet? Whether you're
              planning a solo adventure or a group outing, our user-friendly
              booking process allows you to browse through our selection and
              easily reserve the perfect ride with just a few clicks. Need
              assistance? Our support team is here to help every step of the
              way.
            </p>
          </div>
          <div data-aos="fade-right" className="py-8">
            <h1 id="2" className="text-2xl lg:text-4xl mb-4 font-semibold">
              What payment modes do we accept, and when do we accept payments?
            </h1>
            <p className="lg:text-xl tracking-wider font-light leading-8 lg:leading-9">
              Wondering about our accepted payment modes and when payments are
              due? At our rental service, we strive to make the payment process
              as convenient as possible for our customers. We accept various
              payment methods including online UPI or cash. It's important to
              note that payments are only required at the time of vehicle
              delivery, ensuring a hassle-free experience for you.
            </p>
          </div>
          <div data-aos="fade-right" className="py-8">
            <h1 id="3" className="text-2xl lg:text-4xl mb-4 font-semibold">
              How can LPU students avail of exclusive discounts?
            </h1>
            <p className="lg:text-xl tracking-wider font-light leading-8 lg:leading-9">
              Curious about how LPU students can access exclusive discounts? We
              value our student community and offer special discounts tailored
              specifically for LPU students. Whether you prefer to walk in or
              contact us directly, our team is ready to assist you in availing
              of these fantastic offers, making your rental experience even more
              affordable.
            </p>
          </div>
          <div data-aos="fade-right" className="py-8">
            <h1 id="4" className="text-2xl lg:text-4xl mb-4 font-semibold">
              What are the specifications of our vehicles, including safety
              measures?
            </h1>
            <p className="lg:text-xl tracking-wider font-light leading-8 lg:leading-9">
              Interested in learning more about the specifications of our
              vehicles, including safety measures? Our priority is your safety
              and comfort. That's why our fleet consists of vehicles equipped
              with top-notch features and regular sanitization protocols. From
              spacious interiors to advanced safety systems, we ensure that you
              enjoy a smooth and secure ride every time you choose our services.
            </p>
          </div>
          <div data-aos="fade-right" className="py-8">
            <h1 id="5" className="text-2xl lg:text-4xl mb-4 font-semibold">
              Where are we located, and how can you find us?
            </h1>
            <p className="lg:text-xl tracking-wider font-light leading-8 lg:leading-9">
              Need to know where we're located and how to find us? Conveniently
              situated near LPU and Law Gate, our rental service is easily
              accessible to our customers. Whether you're planning to visit us
              in person or require directions, you can find our exact address
              and location details on our website. We look forward to welcoming
              you soon!
            </p>
          </div>
          <div data-aos="fade-right" className="py-8">
            <h1 id="6" className="text-2xl lg:text-4xl mb-4 font-semibold">
              How can you reach out to us for further assistance?
            </h1>
            <p className="lg:text-xl tracking-wider font-light leading-8 lg:leading-9">
              How can you reach out to us for further assistance? We're here to
              support you every step of the way. Whether you have questions,
              feedback, or require personalized assistance, our dedicated team
              is just a message away. You can chat with our AI assistant for
              quick support, or reach out to us directly via phone or email.
              Your satisfaction is our priority, and we're committed to
              providing you with the best possible rental experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
