import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3 } from "../../assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Content } from "../../assets";
import Container from "../shared/Container/Container";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const images = [Image1, Image2, Image3];

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

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const contactCTA = () => {
    window.location.href = "#contact";
  };
  // const bookCTA = () => {
  //   window.location.href = "#book";
  // };

  return (
    // Desktop Version
    <header id="home" className="relative h-screen w-full">
      <div className="relative mt-[5.2rem] flex flex-col items-center justify-center bg-primary-dark px-4 py-2 text-center xl:flex-row xl:justify-between">
        <div className="relative flex border-2 border-black bg-[#C9A267] px-2 text-white">
          <div className="relative flex items-center justify-between p-2 text-sm">
            24x7 Emergency :{"  "}
            <a
              href="tel:9073672051"
              className="flex-col px-1 text-sm font-semibold"
            >
              9073672051
            </a>
            {"  "}|{"  "}
            <a
              href="tel:9073932051"
              className="flex-col px-1 text-sm font-semibold"
            >
              9073932051
            </a>
          </div>
        </div>

        <h1 className="relative flex items-center justify-between px-4 py-3 text-center text-xl font-extrabold text-[#C9A267]">
          Welcome to Innerwork Advisors LLP
        </h1>

        <div className="relative flex border-2 border-black bg-[#C9A267] px-2 text-lg text-white">
          <div className="relative flex items-center justify-between p-2 text-sm">
            Email Id :{"  "}
            <a
              href="mailto:info@innerworkadvisorsllp.com"
              className="flex flex-col px-1 text-sm font-semibold"
            >
              info@innerworkadvisorsllp.com
            </a>
          </div>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative inset-0 flex h-screen items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative inset-0 h-full w-full transition-opacity duration-[3000] ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />

            {/* Overlay container*/}
            <Container>
              <div className="absolute left-0 top-0 w-full px-4 py-3">
                {/* Social media icons */}
                <ul className="relative z-10 flex flex-row space-x-4">
                  <li>
                    <a
                      href="https://www.facebook.com/innerworkadvisorsllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] transition-transform hover:scale-110">
                        <FaFacebookF className="text-md text-white" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Innerworkllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] transition-transform hover:scale-110">
                        <FaTwitter className="text-md text-white" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/innerworkadvisorsllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] transition-transform hover:scale-110">
                        <FaInstagram className="text-md text-white" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/innerwork-advisors-llp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[3px] transition-transform hover:scale-110">
                        <FaLinkedinIn className="text-md text-white" />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>

              {/*END - Social media icons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 px-3 py-2 text-center text-white">
                {/* Headings on Images with slicing*/}
                <span className="mb-4 text-4xl md:text-4xl">
                  <strong>
                    {Content[index].title.length === 33
                      ? Content[index].title.substring(
                          0,
                          Math.floor(Content[index].title.length / 2),
                        )
                      : Content[index].title.substring(
                          0,
                          Math.floor(Content[index].title.length / 2 + 1.5),
                        )}
                  </strong>
                </span>

                <span className="mb-4 text-4xl md:text-4xl">
                  <strong>
                    {Content[index].title.length === 33
                      ? Content[index].title.substring(
                          Math.floor(Content[index].title.length / 2),
                        )
                      : Content[index].title.substring(
                          Math.floor(Content[index].title.length / 2 + 1.5),
                        )}
                  </strong>
                </span>

                {/* Description with slicing */}
                <span className="relative mb-2 items-center justify-between text-center text-lg">
                  <em>
                    {Content[index]?.description
                      .split(" ")
                      .slice(0, 10)
                      .join(" ")}
                  </em>
                </span>

                <span className="relative mb-6 items-center justify-between text-center text-lg">
                  <em>
                    {Content[index]?.description.split(" ").slice(10).join(" ")}
                  </em>
                </span>

                {/* CTA Buttons */}
                <div className="z-20 mb-8 flex flex-wrap gap-4 px-6 py-3">
                  {/* Know More Button */}
                  <button
                    className="w-full !rounded-lg !border-2 !border-black !bg-primary-light px-6 py-3 !text-lg !font-semibold text-white !shadow-md transition-all duration-300 hover:!bg-primary-dark sm:w-auto"
                    onClick={contactCTA}
                  >
                    Book Consultation
                  </button>

                  {/* Contact Us Button */}
                  <button
                    className="w-full !rounded-lg !border-2 !border-black bg-white px-6 py-3 !text-lg !font-semibold !text-gray-900 !shadow-md transition-all duration-300 hover:!bg-[#C9A267] sm:w-auto"
                    onClick={contactCTA}
                  >
                    Contact Us
                  </button>
                </div>
                {/*End - CTA Buttons */}
              </div>
            </Container>
            {/* End - Overlay container*/}
          </div>
        ))}
      </div>
      {/* End - Image Container */}

      {/* Navigation Arrows - left*/}
      <button
        className="absolute left-6 top-1/2 rounded-full bg-white bg-opacity-50 p-3 text-black transition-all duration-100 hover:bg-opacity-70"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </button>

      {/* Navigation Arrows - Right*/}
      <button
        className="absolute right-6 top-1/2 rounded-full bg-white bg-opacity-50 p-3 text-black transition-all duration-100 hover:bg-opacity-70"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </button>
      {/*End -  Navigation Arrows */}

      <section className="absolute bottom-[-36rem] left-[50%] z-10 w-[85%] translate-x-[-50%] bg-[#2d3440] py-12 min-[350px]:bottom-[-30rem] min-[400px]:bottom-[-28rem] min-[576px]:bottom-[-22rem] md:bottom-[-16rem] md:w-[640px] xl:-bottom-48">
        <div className="">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-0">
            {services.map((service, index) => (
              <div
                key={index}
                className="px-6 text-justify text-white last:border-none md:w-1/2 md:border-r md:border-slate-400"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
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
    </header>
  );
};

export default Header;
