import React from "react";
import { Container } from "../shared";
import { OurServicesImage } from "../../assets";
import { Link } from "react-router-dom";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
const services = [
  {
    icon: <FaSearch className="text-3xl text-secondary" />,
    title: "INVESTIGATION",
    urlPath: "/investigation",
    description:
      "Uncovering truth, gathering evidence, solving mysteries, ensuring accountability, delivering justice.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-secondary" />,
    title: "PERSONAL SECURITY",
    urlPath: "/security-services",
    description:
      "Protecting lives, securing assets, ensuring safety, providing peace of mind and confidence.",
  },
];

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
        <div className="flex flex-1 flex-col justify-center py-12 pt-[30rem] sm:pt-[26rem] md:pt-[20rem] lg:pt-[16rem]">
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
            className="w-fit bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            KNOW MORE
          </Link>
          <section className="absolute bottom-[-36rem] left-[50%] z-10 w-[85%] translate-x-[-50%] bg-[#2d3440] py-12 min-[350px]:bottom-[-30rem] min-[400px]:bottom-[-28rem] min-[576px]:bottom-[-22rem] md:bottom-[-16rem] md:w-[640px] xl:-bottom-48">
            <div className="">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="px-6 text-justify text-white last:border-none md:w-1/2 md:border-r md:border-slate-400"
                  >
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="mb-2 text-center text-lg font-bold duration-200 hover:text-secondary">
                      <Link to={service.urlPath}>{service.title}</Link>
                    </h3>
                    <p className="text-center text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
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
