import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Certificate from "./Certificate";
import { Link } from "react-router-dom";

import { Section, Container, Modal } from "../shared";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { BMW, DKDPW, MAAW, SCW, pillar, TeamImage } from "../../assets";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const imageMap = {
  "Mr-Bibaswas-Mukherjee-500x500.webp": BMW,
  "Mr-Deepak-Kumar-Dutta-500x500.webp": DKDPW,
  "Mr-Asim-Ali-500x500.webp": MAAW,
  "Mr-Sujit-Chakraborty-500x500.webp": SCW,
};

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
    infinite: false,
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
          infinite: false,
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
        className="relative flex flex-col items-center justify-between text-center"
        title={"Team"}
        label={"OUR TEAM"}
      >
        <div>
          <img src={TeamImage} alt="our-team.webp" />
        </div>
      </Section>

      <Section
        className="relative flex flex-row items-center justify-between text-center"
        title={"Our Team"}
        label={"THE PILLARS"}
        description={
          <div className="relative flex mt-1 text-lg font-normal text-center">
            For years, we have built a legacy of success based on integrity,
            dedication, and relentless advocacy. Our proven track record is a
            testament to our ability to navigate complex legal challenges and
            achieve favourable results for our clients.
          </div>
        }
      ></Section>

      <div className="flex-col items-center justify-center w-full gap-6 fllex h-fit bg-slate-200">
        <div className="w-full p-8 h-fit">
          <Slider {...settings}>
            {teamMembers.map((item, index) => (
              <div
                id="slider-boxes"
                key={index}
                className="flex h-full flex-col items-center justify-center rounded-xl border-b-[8px] border-secondary bg-white"
              >
                <div className="p-6 rounded-full">
                  {item.image && (
                    <img
                      src={item.image}
                      alt="team-images"
                      className="object-cover rounded-full"
                    />
                  )}
                </div>

                <div className="flex flex-col items-center justify-center gap-2 p-4 pb-6">
                  <h2 className="text-2xl font-bold text-center text-black">
                    {item.id}
                  </h2>
                  <p className="text-center text-[17px]">{item.title}</p>
                  <span className="mt-2 mb-2 text-center text-md">
                    {item.description}
                  </span>
                  <button
                    className="px-8 py-3 font-semibold text-white duration-200 rounded-xl bg-secondary hover:bg-black"
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
              className="w-24 h-24 mx-auto mb-3 rounded-full"
            />
            <p className="text-sm font-semibold text-black">
              {selectedMember?.id}
            </p>
            <p className="text-sm font-semibold text-[#C9A267]">
              {selectedMember?.title}
            </p>
            <p className="mt-2 text-sm text-justify text-gray-700">
              {selectedMember?.extra}
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="self-center px-4 py-2 mt-3 mb-3 text-white bg-red-600 rounded-md"
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
