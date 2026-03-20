import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Certificate from "./Certificate";

import { Section, Container, Modal } from "../shared";
import { FaSearch, FaShieldAlt } from "react-icons/fa";
import { pillar } from "../../assets";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function richText(text, maxLength) {
  if (typeof text !== "string") return "";
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength) + "...";
}

const imageMap = {
  "Mr-Deepak-Kumar-Dutta-500x500.webp":
    "https://innerworkadvisorsllp.com/images/members/Mr-Deepak-Kumar-Dutta-500x500.webp",
  "Mr-Asim-Ali-500x500.webp":
    "https://innerworkadvisorsllp.com/images/members/Mr-Asim-Ali-500x500.webp",
  "Mr-Sujit-Chakraborty-500x500.webp":
    "https://innerworkadvisorsllp.com/images/members/Mr-Sujit-Chakraborty-500x500.webp",
  "Faiyaz-Ahmed-500x500.webp":
    "https://innerworkadvisorsllp.com/images/members/Faiyaz-Ahmed-500x500.webp",
    "Amiya-Kumar-Lahiri-500x500.webp":""
};

const services = [
  {
    icon: <FaSearch className="text-3xl text-secondary" />,
    title: "INVESTIGATION",
    urlPath: "/private-investigation-kolkata",
    description:
      "Uncovering truth, gathering evidence, solving mysteries, ensuring accountability, delivering justice.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-secondary" />,
    title: "PERSONAL SECURITY",
    urlPath: "/security-guard-services-kolkata",
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
    autoplay: true,
    autoplaySpeed: 3000,
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
        className="relative !my-0 flex flex-col items-center justify-between py-1 text-center"
        title={"Team"}
        label={"OUR TEAM"}
        description={
          "Innerwork Advisors LLP is powered by a multidisciplinary team of professionals, including directors, partners and experienced executives across advisory, compliance, operations and support functions. Our team brings together expertise, integrity and a shared commitment to delivering reliable and practical solutions for clients across sectors. We believe that strong outcomes are driven by strong people — working with accountability, collaboration and purpose."
        }
      >
        <div>
          <img
            src={"https://innerworkadvisorsllp.com/images/team.webp"}
            alt="our-team.webp"
          />
        </div>
      </Section>

      <Section
        className="relative flex flex-row items-center justify-between text-center"
        title={"Our Team"}
        label={"THE PILLARS"}
        description={
          <div className="relative mt-1 flex text-center text-lg font-normal">
            For years, we have built a legacy of success based on integrity,
            dedication, and relentless advocacy. Our proven track record is a
            testament to our ability to navigate complex legal challenges and
            achieve favourable results for our clients.
          </div>
        }
      ></Section>

      <div className="flex h-fit w-full flex-col items-center justify-center gap-6 bg-slate-200">
        <div className="h-fit w-full p-8">
          <Slider {...settings}>
            {teamMembers.map((item, index) => (
              <div
                id="slider-boxes"
                key={index}
                className="flex h-[500px] flex-col rounded-xl border-b-[8px] border-secondary bg-white p-4"
              >
                <div className="flex flex-col items-center">
                  <div className="rounded-full border-black p-6">
                    {item.image && (
                      <img
                        src={item.image}
                        alt="team-images"
                        className="h-[180px] w-[180px] rounded-full object-cover"
                      />
                    )}
                  </div>
                  <h2 className="text-center text-xl font-bold text-black">
                    {item.id}
                  </h2>
                  <h3 className="min-h-[22px] text-center text-[15px] font-medium text-gray-500">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-2 min-h-[84px] px-2 text-center leading-relaxed">
                  {richText(item.description, 100)}
                </div>

                <div className="mt-auto flex items-center justify-center pt-4">
                  <button
                    className="rounded-xl bg-secondary px-6 py-2 font-semibold text-white duration-200 hover:bg-black"
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
