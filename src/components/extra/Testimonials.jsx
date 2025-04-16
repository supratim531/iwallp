import React, { useState, useEffect } from "react";
import { TestimonialData } from "../../assets";
import { Section, Container } from "../shared";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials] = useState(TestimonialData);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        testimonials.length ? (prevIndex + 1) % testimonials.length : 0
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) return <p>Loading testimonials...</p>;

  const { name, position, photo, text } = testimonials[index];
  return (
    <Container>
      <Section
        classname="relative flex items-center justify-between text-center"
        title={"What they say"}
        label={"TESTIMONIALS"}
        description={
          "With numerous successful outcomes and satisfied clients, we have established ourselves as a beacon of excellence in Kolkata's legal and investigative communities."
        }
      >
        <div className="relative flex flex-col overflow-hidden items-center justify-center text-center h-80 px-14 bg-[#415681] rounded-2xl text-white lg:flex-auto lg:w-[60%]">
          <div className="w-full h-1 mt-2 mb-10 origin-left bg-white progress-bar"></div>
          <div className="fas fa-quote-left fa-quote"></div>
          <div className="fas fa-quote-right fa-quote"></div>
          <p
            aria-live="polite"
            className="text-[16px] leading-[24px] text-justify flex overflow-hidden text-ellipsis mb-5 line-clamp-4"
          >
            {text}
          </p>
          <div className="flex flex-col items-center justify-end flex-shrink-0 mt-auto user">
            <img
              src={photo}
              alt={name}
              className="object-cover w-20 h-20 bg-transparent border-4 border-white rounded-full"
            />
            <div className="mt-[10px]">
              <h4 className="m-0 font-bold">{name}</h4>
              <p aria-live="polite" className="my-2 mb-2 font-normal ">
                {position}
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-row text-white bg-red-500">
          Hello
        </div>
      </Section>
    </Container>
  );
};

export default Testimonials;
