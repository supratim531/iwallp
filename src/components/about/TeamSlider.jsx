import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Certificate from "./Certificate";
import { Section, Container, Modal } from "../shared";
import { BMW, DKDPW, MAAW, SCW, pillar } from "../../assets";

import { FaCode } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageMap = {
  "Mr-Bibaswas-Mukherjee-500x500.webp": BMW,
  "Mr-Deepak-Kumar-Dutta-500x500.webp": DKDPW,
  "Mr-Asim-Ali-500x500.webp": MAAW,
  "Mr-Sujit-Chakraborty-500x500.webp": SCW,
};

const TeamSlider = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updatedData = pillar.map((selectedMember) => ({
      ...selectedMember,
      image: imageMap[selectedMember.image] || selectedMember.image, // Ensure correct image mapping
    }));
    setTeamMembers(updatedData);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1,
      //     initialSlide: 1,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container id="about">
      <Section
        classname="relative flex flex-row items-center justify-between text-center"
        title={"Our Team"}
        label={"THE PILLARS"}
        description={
          <p className="relative mt-1 flex text-center text-lg font-normal">
            For years, we have built a legacy of success based on integrity,
            dedication, and relentless advocacy. Our proven track record is a
            testament to our ability to navigate complex legal challenges and
            achieve favourable results for our clients.
          </p>
        }
      ></Section>

      <div className="fllex h-fit w-full flex-col items-center justify-center gap-6 bg-slate-200">
        <div className="h-fit w-full p-8">
          <Slider {...settings}>
            {teamMembers.map((item, index) => (
              <div
                id="slider-boxes"
                key={index}
                className="flex flex-col items-center justify-center rounded-xl border-b-[8px] border-red-400 bg-white"
              >
                <div className="rounded-full p-6">
                  {item.image && (
                    <img
                      src={item.image}
                      className="rounded-full object-cover"
                    />
                  )}
                </div>

                <div className="flex flex-col items-center justify-center gap-2 p-4 pb-6">
                  <h2 className="text-center text-2xl font-bold text-black">
                    {item.id}
                  </h2>
                  <p className="text-center text-[17px]">{item.title}</p>
                  <span className="text-md mb-2 mt-2 text-center">
                    {item.description}
                  </span>
                  <button
                    className="rounded-xl bg-secondary px-8 py-3 font-semibold hover:bg-black hover:text-white"
                    onClick={() => {
                      setIsModalOpen(true);
                      setSelectedMember(item);
                    }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          title={"Designated Partner"}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="text-center">
            <img
              src={selectedMember?.image}
              alt={selectedMember?.id}
              className="mx-auto mb-3 h-24 w-24 rounded-full"
            />
            <p className="text-sm font-semibold text-black">
              {selectedMember?.id}
            </p>
            <p className="text-sm font-semibold text-[#C9A267]">
              {selectedMember?.title}
            </p>
            <p className="mt-2 text-justify text-sm text-gray-700">
              {selectedMember?.extra}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mb-3 mt-3 self-center rounded-md bg-red-600 px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </Modal>
      )}
      <Certificate />
    </Container>
  );
};

export default TeamSlider;
