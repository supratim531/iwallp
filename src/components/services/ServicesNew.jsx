import React from "react";
import { Container } from "../shared";
import { OurServicesImage } from "../../assets";
import { Link } from "react-router-dom";

const ServiceNew = () => {
  return (
    <section
      id="service"
      style={{
        backgroundImage: `url(${OurServicesImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full text-white"
    >
      <Container className="flex w-full flex-col md:flex-row">
        <div className="flex flex-1 flex-col justify-center py-12 pt-[32rem] sm:pt-[28rem] md:pt-[22rem] lg:pt-72">
          <span className="mb-2 text-sm text-secondary">Our Service</span>
          <h2 className="mb-6 text-3xl font-extrabold md:text-5xl">
            WHAT WE DO
          </h2>
          <p className="mb-6 max-w-lg text-sm leading-relaxed text-gray-200 md:text-base">
            When your rights are at stake, you need a legal team that will fight
            tirelessly on your behalf. Our firm specializes in protecting the
            rights of our clients, ensuring that they receive fair treatment and
            due process under the law.
          </p>
          <Link
            to={"/our-services"}
            className="w-fit bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            KNOW MORE
          </Link>
        </div>

        {/* Right: Background Image */}
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${OurServicesImage})`,
          }}
        ></div>
      </Container>
    </section>
  );
};

export default ServiceNew;
