import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// const tabs = ["Tab1", "Tab2"];
const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setSliderData(data))
      .catch((error) => console.error("Error loading team data:", error));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < sliderData.length - 3 ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-12 bg-[#415781] text-white gap-8">
      {/* Left Section: Card Slider */}
      <div className="relative flex flex-col items-center lg:w-1/2">
        {/* Cards Wrapper */}
        {sliderData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sliderData
              .slice(currentIndex, currentIndex + 3)
              .map((expert, index) => (
                <div
                  key={index}
                  className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-[350px] max-w-[300px]"
                >
                  <img
                    src={expert.image}
                    alt={expert.id}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-center">
                    {expert.id}
                  </h3>
                  <p className="text-sm text-[#C9A267] font-semibold text-center">
                    {expert.title}
                  </p>
                  <p className="text-sm text-center mt-2 line-clamp-4">
                    {expert.description}
                  </p>
                </div>
              ))}
          </div>
        ) : (
          <p>Loading team members...</p>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-white bg-[#C9A267] px-4 py-2 rounded-lg disabled:opacity-50 "
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= sliderData.length - 3}
            className="text-white bg-[#C9A267] px-4 py-2 rounded-lg disabled:opacity-50 overflow:block"
          >
            →
          </button>
        </div>
      </div>
      {/* Right Section */}
      <div className="text-left lg:text-right lg:w-1/2">
        <h2 className="text-[#C9A267] italic text-lg font-bold">Our Team</h2>
        <p className="text-3xl font-bold">EXPERTS AT WORK</p>

        <div className="flex items-center gap-3 mt-2">
          {/* Left border */}
          <hr className="flex-1 border-t border-[#C9A267]" />
          <i className="fa fa-bank text-[#C9A267] text-xl"></i>
          {/* Right border */}
          <hr className="w-[15%] flex border-t border-[#C9A267]" />
        </div>

        <p className="text-lg mt-4">
          Our other team members who are uphelding the organization for years,
          and are still continuing to support us till now.
        </p>
      </div>
    </div>
  );
};

export default Slider;
