import React, { useState, useEffect, useRef } from "react";
import { certificate1, certificate2, certificates } from "../../assets";
import { ArrowRight, ArrowLeft } from "react-feather";
import { Section, Container, Modal } from "../shared";

import "@fortawesome/fontawesome-free/css/all.min.css";

const imageMap = {
  "certificate1.jpg": certificate1,
  "certificate2.jpg": certificate2,
};

const Certificate = () => {
  const [certificate, setcertificate] = useState([]);
  const [selectedCertificate, setselectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollRef = useRef(null);
  const visibleCount = 1;

  useEffect(() => {
    const updatedData = certificates.map((selectedCertificate) => ({
      ...selectedCertificate,
      image: imageMap[selectedCertificate.image] || selectedCertificate.image, // Ensure correct image mapping
    }));
    setcertificate(updatedData);
  }, []);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const nextSlide = () => {
    if (currentIndex < certificate.length - visibleCount) {
      setCurrentIndex(currentIndex + 1);
      scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex items-center justify-between bg-[#415781] text-center">
      <Container>
        <Section
          className="relative flex items-center justify-center text-center"
          title={"Our Achievements"}
          label={"CERTIFICATES"}
          description={
            <p className="relative mt-1 flex max-w-lg items-center justify-between text-center text-lg font-normal text-white">
              This is our certificate section for reliabilty
            </p>
          }
        ></Section>

        <div className="lg:min-w-1/2 relative flex items-center justify-center text-justify">
          {/* Certificate Cards */}
          <div
            ref={scrollRef}
            className="no-scrollbar grid grid-cols-1 overflow-x-auto scroll-smooth transition-transform duration-1000 ease-in-out"
          >
            {certificate
              .slice(
                currentIndex,
                Math.min(currentIndex + visibleCount, certificate.length),
              )
              .map((item, index) => (
                <Container key={index}>
                  <div
                    key={index}
                    className="max-h-auto mb-8 flex flex-col items-center justify-between rounded-lg bg-black px-4 py-4 text-white shadow-lg md:mb-16 md:max-w-md lg:max-w-2xl"
                  >
                    <img
                      src={item.image}
                      alt={item.id}
                      className="min-h-auto min-w-auto mb-4 object-contain"
                    />

                    <h3 className="text-center text-lg font-semibold text-[#C9A267]">
                      {item.title}
                    </h3>
                    <span className="text-md mb-2 mt-2 text-center">
                      {item.description}
                    </span>

                    {/* Know More Button */}
                    <button
                      className="mb-1 mt-1 rounded-lg bg-[#C9A267] px-4 py-2 font-semibold text-white"
                      onClick={() => {
                        setselectedCertificate(item); // Set the selected team selectedCertificate
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
                className="absolute left-0 top-1/2 items-center rounded-lg bg-[#C9A267] px-4 py-2 text-white transition-transform duration-500 ease-in-out disabled:opacity-50"
              >
                <ArrowLeft size={30} />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= certificate.length - visibleCount}
                className="overflow:block absolute right-0 top-1/2 items-center rounded-lg bg-[#C9A267] px-4 py-2 text-white disabled:opacity-50"
              >
                <ArrowRight size={30} />
              </button>
            </div>
          </div>

          {/*END - Certificate Cards */}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal
            title={"Issued Certificate Details"}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div className="text-center">
              <p className="text-lg font-semibold text-[#C9A267]">
                {selectedCertificate?.title}
              </p>
              <p className="text-md font-semibold text-black">
                {selectedCertificate?.description}
              </p>
              <p className="mb-2 mt-2 text-center text-sm text-gray-700">
                {selectedCertificate?.extra}
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
      </Container>
    </section>
  );
};

export default Certificate;
