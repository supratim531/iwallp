import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BMW, DKDPW, MAAW, SCW, pillar } from "../../assets";
import { ArrowRight, ArrowLeft } from "react-feather";
import { Section, Container, Modal } from "../shared";
import Certificate from "./Certificate";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <section className="bg-[#415781] flex relative items-center justify-between text-center">
      <Container>
        <Section
          classname="relative flex flex-row items-center justify-between text-center"
          title={"Our Team"}
          label={"THE PILLARS"}
          description={
            <p className="relative flex items-center justify-between max-w-xl mt-1 text-lg font-normal text-justify text-white">
              For years, we have built a legacy of success based on integrity,
              dedication, and relentless advocacy. Our proven track record is a
              testament to our ability to navigate complex legal challenges and
              achieve favourable results for our clients.
            </p>
          }
        ></Section>

        <div className="relative flex items-center justify-center flex-grow text-justify lg:min-w-1/2">
          {/* Pillar Team Cards */}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers
              .slice(
                currentIndex,
                Math.min(currentIndex + visibleCount, teamMembers.length)
              )
              .map((item, index) => (
                <Container>
                  <div
                    key={index}
                    className="bg-black text-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-between h-[380px] max-w-[300px]"
                  >
                    <img
                      src={item.image}
                      alt={item.id}
                      className="object-cover w-24 h-24 mb-4 rounded-full"
                    />
                    <h3 className="text-lg font-semibold text-center">
                      {item.id}
                    </h3>
                    <p className="text-md text-[#C9A267] font-semibold text-center">
                      {item.title}
                    </p>
                    <span className="mt-2 mb-2 text-center text-md ">
                      {item.description}
                    </span>

                    {/* Know More Button */}
                    <button
                      className="mt-1 mb-1 px-4 py-2 bg-[#C9A267] text-white font-semibold rounded-lg "
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
            <div classname="relative flex items-center justify-between">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-0 z-10 top-1/2 items-center text-white bg-[#C9A267] px-4 py-2 rounded-lg disabled:opacity-50 "
              >
                <ArrowLeft size={30} />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= teamMembers.length - visibleCount}
                className="absolute right-0 z-10 top-1/2 items-center text-white bg-[#C9A267] px-4 py-2 rounded-lg disabled:opacity-50 overflow:block"
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
                className="w-24 h-24 mx-auto mb-3 rounded-full"
              />
              <p className="text-sm font-semibold text-black">
                {selectedMember?.id}
              </p>
              <p className="text-[#C9A267] text-sm font-semibold">
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
    </section>
  );
};

export default Team;
