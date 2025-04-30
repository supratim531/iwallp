import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { ArrowRight, ArrowLeft } from "react-feather";
import { Section, Container, Modal } from "../shared";
import Certificate from "./Certificate";
import { Swiper, SwiperSlide } from "swiper/react";

import { BMW, DKDPW, MAAW, SCW, pillar, TeamImage } from "../../assets";

const imageMap = {
  "Mr-Bibaswas-Mukherjee-500x500.webp": BMW,
  "Mr-Deepak-Kumar-Dutta-500x500.webp": DKDPW,
  "Mr-Asim-Ali-500x500.webp": MAAW,
  "Mr-Sujit-Chakraborty-500x500.webp": SCW,
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // const scrollRef = useRef(null);
  const visibleCount = 3;

  useEffect(() => {
    const updatedData = pillar.map((selectedMember) => ({
      ...selectedMember,
      image: imageMap[selectedMember.image] || selectedMember.image, // Ensure correct image mapping
    }));
    setTeamMembers(updatedData);
  }, []);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    // scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
      // scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-between bg-[#415781] text-center">
      <Container>
        <Section
          className="relative flex flex-row items-center justify-between text-center"
          title={"Our Team"}
          label={"THE PILLARS"}
          description={
            <p className="relative mt-1 flex max-w-xl items-center justify-between text-justify text-lg font-normal text-white">
              For years, we have built a legacy of success based on integrity,
              dedication, and relentless advocacy. Our proven track record is a
              testament to our ability to navigate complex legal challenges and
              achieve favourable results for our clients.
            </p>
          }
        ></Section>

        <div className="lg:min-w-1/2 relative flex flex-grow items-center justify-center text-justify">
          {/* Pillar Team Cards */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers
              .slice(
                currentIndex,
                Math.min(currentIndex + visibleCount, teamMembers.length),
              )
              .map((item, index) => (
                <Container>
                  <div
                    key={index}
                    className="flex h-[380px] max-w-[300px] flex-col items-center justify-between rounded-lg bg-black p-6 text-white shadow-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.id}
                      className="mb-4 h-24 w-24 rounded-full object-cover"
                    />
                    <h3 className="text-center text-lg font-semibold">
                      {item.id}
                    </h3>
                    <p className="text-md text-center font-semibold text-[#C9A267]">
                      {item.title}
                    </p>
                    <span className="text-md mb-2 mt-2 text-center">
                      {item.description}
                    </span>

                    {/* Know More Button */}
                    <button
                      className="mb-1 mt-1 rounded-lg bg-[#C9A267] px-4 py-2 font-semibold text-white"
                      onClick={() => {
                        setSelectedMember(item); // Set the selected team selectedMember
                        setIsModalOpen(true); // Open the modal
                      }}
                    >
                      Know More
                    </button>
                  </div>
                </Container>
              ))}
            <div className="relative flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 z-10 items-center rounded-lg bg-[#C9A267] px-4 py-2 text-white disabled:opacity-50"
              >
                <ArrowLeft size={30} />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= teamMembers.length - visibleCount}
                className="overflow:block absolute right-0 top-1/2 z-10 items-center rounded-lg bg-[#C9A267] px-4 py-2 text-white disabled:opacity-50"
              >
                <ArrowRight size={30} />
              </button>
            </div>
          </div>

          {/*END - Pillar Team Cards */}
          {/* <div className="relative flex flex-row items-center justify-between px-2 py-2 ml-2 text-white bg-black">
            HELLO
          </div> */}
        </div>

        {/* Modal */}
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
    </section>
  );
};

export default Team;
