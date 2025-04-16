import React, { useState, useEffect } from "react";
import { Image1, Image2, Image3 } from "../../assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Content } from "../../assets";
import Container from "../shared/Container/Container";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  // FaMobileAlt,
  // FaEnvelope,
  // FaPhoneAlt,
} from "react-icons/fa";
const images = [Image1, Image2, Image3];

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
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const contactCTA = () => {
    window.location.href = "#contact";
  };
  const bookCTA = () => {
    window.location.href = "#book";
  };

  return (
    // Desktop Version
    <header id="header" className="relative w-full h-screen overflow-hidden">
      <div className="relative flex items-center justify-between px-4 py-2 text-center bg-gray-700">
        {/* Number and mail in golden box */}
        <div className="bg-[#C9A267] px-2 border-2 border-black text-white relative flex">
          <div className="relative flex items-center justify-between px-4 py-3 text-sm">
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

        <h1 className="text-[#C9A267] items-center justify-between text-center px-4 py-3 font-extrabold relative flex">
          Welcome to Innerwork Advisors LLP
        </h1>
        <div className="bg-[#C9A267] px-2 border-2 border-black text-white text-lg relative flex">
          <div className="relative flex items-center justify-between px-4 py-3 text-sm">
            Email Id :{"  "}
            <a
              href="mailto:innerworkadvisorsllp@gmail.com"
              className="flex flex-col px-1 text-sm font-semibold"
            >
              innerworkadvisorsllp@gmail.com
            </a>
          </div>
          {/*END -  Number and mail in golden box */}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative inset-0 flex items-center justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full"
            />

            {/* Overlay container*/}
            <Container>
              <div className="absolute top-0 left-0 w-full px-4 py-3">
                {/* Social media icons */}
                <ul className="relative flex flex-row space-x-4">
                  <li>
                    <a
                      href="https://x.com/Innerworkllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <FaFacebookF className="text-white text-md" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Innerworkllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <FaTwitter className="text-white text-md" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Innerworkllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <FaInstagram className="text-white text-md" />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/Innerworkllp"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="border-[3px] rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <FaLinkedinIn className="text-white text-md" />
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
              {/*END - Social media icons */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-3 py-2 text-center text-white bg-opacity-50">
                {/* Headings on Images with slicing*/}
                <span className="mb-4 text-4xl md:text-4xl">
                  <strong>
                    {Content[index].title.length === 33
                      ? Content[index].title.substring(
                          0,
                          Math.floor(Content[index].title.length / 2)
                        )
                      : Content[index].title.substring(
                          0,
                          Math.floor(Content[index].title.length / 2 + 1.5)
                        )}
                  </strong>
                </span>

                <span className="mb-4 text-4xl md:text-4xl">
                  <strong>
                    {Content[index].title.length === 33
                      ? Content[index].title.substring(
                          Math.floor(Content[index].title.length / 2)
                        )
                      : Content[index].title.substring(
                          Math.floor(Content[index].title.length / 2 + 1.5)
                        )}
                  </strong>
                </span>
                {/* Description with slicing */}
                <span className="relative items-center justify-between mb-2 text-lg text-center">
                  <em>
                    {Content[index]?.description
                      .split(" ")
                      .slice(0, 10)
                      .join(" ")}
                  </em>
                </span>
                <span className="relative items-center justify-between mb-6 text-lg text-center">
                  <em>
                    {Content[index]?.description.split(" ").slice(10).join(" ")}
                  </em>
                </span>
                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 px-6 py-3 mt-6 mb-8">
                  {/* Know More Button */}
                  <button
                    className="px-6 py-3 !bg-blue-400 text-white !font-semibold !text-lg !rounded-lg !shadow-md !border-2 !border-black hover:!bg-blue-800 transition-all duration-300"
                    onClick={bookCTA}
                  >
                    Book Consultation
                  </button>

                  {/* Contact Us Button */}
                  <button
                    className="px-6 py-3 bg-white !text-gray-900 !font-semibold !text-lg !rounded-lg !shadow-md !border-2 !border-black hover:!bg-[#C9A267] transition-all duration-300"
                    onClick={contactCTA}
                  >
                    CONTACT US
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
        className="absolute p-3 text-black transition-all duration-100 bg-white bg-opacity-50 rounded-full left-6 top-1/2 hover:bg-opacity-70"
        onClick={prevSlide}
      >
        <FaChevronLeft size={30} />
      </button>
      {/* Navigation Arrows - Right*/}
      <button
        className="absolute p-3 text-black transition-all duration-100 bg-white bg-opacity-50 rounded-full right-6 top-1/2 hover:bg-opacity-70"
        onClick={nextSlide}
      >
        <FaChevronRight size={30} />
      </button>
      {/*End -  Navigation Arrows */}
    </header>
  );
};

export default Header;
