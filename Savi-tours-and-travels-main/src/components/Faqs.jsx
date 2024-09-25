import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

function Faqs() {
  return (
    <>
      <div className="bg-gray-900 py-24">
        <div className="container mx-auto md:px-8">
          <div className=" flex flex-col items-center justify-center pb-12">
            <h2 className="text-center text-3xl text-white font-semibold tracking-wide faq-understyle cursor-default">Frequently Asked Questions</h2>
            <span className="mx-auto leading-relaxed text-xl text-gray-100 mt-6">Answers to Common Queries About Our Rental Services</span>
          </div>

          <div className="accordian">
            <Accordion allowZeroExpanded={true} allowMultipleExpanded={false}>
              <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do I make a reservation?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Making a reservation is quick and easy! Simply visit our
                    website or mobile app, select your desired vehicle, choose
                    your rental dates, and complete the booking process. You can
                    also reach out to our customer support team for assistance.{" "}
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What documents do I need to rent a vehicle?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    To rent a vehicle, you'll need a valid driver's license, a
                    credit card for payment and security deposit, and proof of
                    insurance. Additional documentation requirements may vary
                    depending on your location and the type of vehicle you're
                    renting.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can I modify or cancel my reservation?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, you can modify or cancel your reservation online or by
                    contacting our customer support team. However, please note
                    that modification and cancellation policies may vary
                    depending on the terms and conditions of your booking.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem data-aos="fade-right">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Are there any age restrictions for renting a vehicle?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, there are typically age restrictions for renting a
                    vehicle. Generally, renters must be at least 18 years old,
                    although this may vary depending on the location and type of
                    vehicle. Additionally, young driver surcharges may apply to
                    renters under a certain age. Please check our terms and
                    conditions for specific details.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faqs;
