import React, { useState, useEffect } from "react";
import { TestimonialData } from "../../assets";
import { Section, Container } from "../shared";
import "./Testimonials.css";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [testimonials] = useState(TestimonialData);

  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        testimonials.length ? (prevIndex + 1) % testimonials.length : 0,
      );
    }, 7000);

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
        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#415681] px-14 text-center text-white lg:flex-auto">
          <div className="progress-bar mb-10 mt-2 h-1 w-full origin-left bg-white"></div>
          <div className="fas fa-quote-left fa-quote"></div>
          <div className="fas fa-quote-right fa-quote"></div>
          <p
            aria-live="polite"
            className="mb-5 line-clamp-4 flex overflow-hidden text-ellipsis text-center text-[16px] leading-[24px]"
          >
            {text}
          </p>
          <div className="user mt-4 flex flex-shrink-0 flex-col items-center justify-end">
            <img
              src={photo}
              alt={name}
              className="h-20 w-20 rounded-full border-4 border-white bg-transparent object-cover"
            />
            <div className="mt-[10px]">
              <h4 className="m-0 font-bold">{name}</h4>
              <p aria-live="polite" className="my-2 mb-2 font-normal">
                {position}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default Testimonials;
