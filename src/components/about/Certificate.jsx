import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  certificate5,
  certificates,
} from "../../assets";
import { ArrowRight, ArrowLeft } from "react-feather";
import { Section, Container, Modal } from "../shared";

const imageMap = {
  "certificate1.jpg": certificate1,
  "certificate2.jpg": certificate2,
  "certificate3.jpg": certificate3,
  "certificate4.jpg": certificate4,
  "certificate5.jpg": certificate5,
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
    <section className="bg-[#415781] flex relative items-center justify-between text-center">
      <Container>
        <Section
          classname="relative flex flex-row items-center justify-between text-center"
          title={"Our Achievements"}
          label={"CERTIFICATES"}
          description={
            <p className="relative flex items-center justify-between max-w-lg mt-1 text-lg font-normal text-center text-white">
              This is our certificate section for reliabilty
            </p>
          }
        ></Section>

        <div className="relative flex items-center justify-center text-justify lg:min-w-1/2">
          {/* Certificate Cards */}
          <div
            ref={scrollRef}
            className="grid grid-cols-1 overflow-x-auto transition-transform duration-1000 ease-in-out scroll-smooth no-scrollbar"
          >
            {certificate
              .slice(
                currentIndex,
                Math.min(currentIndex + visibleCount, certificate.length)
              )
              .map((item, index) => (
                <Container>
                  <div
                    key={index}
                    className="flex flex-col items-center justify-between px-4 py-4 mb-5 text-white bg-black rounded-lg shadow-lg lg:max-w-2xl md:max-w-md max-h-auto"
                  >
                    <img
                      src={item.image}
                      alt={item.id}
                      className="object-contain mb-4 min-h-auto min-w-auto "
                    />

                    <h3 className="text-lg text-[#C9A267] font-semibold text-center">
                      {item.title}
                    </h3>
                    <span className="mt-2 mb-2 text-center text-md ">
                      {item.description}
                    </span>

                    {/* Know More Button */}
                    <button
                      className="mt-1 mb-1 px-4 py-2 bg-[#C9A267] text-white font-semibold rounded-lg "
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
                className="absolute left-0  top-1/2 items-center text-white bg-[#C9A267] px-4 py-2 rounded-lg disabled:opacity-50 ease-in-out duration-500 transition-transform"
              >
                <ArrowLeft size={30} />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentIndex >= certificate.length - visibleCount}
                className="absolute right-0 top-1/2 items-center text-white bg-[#C9A267] px-4 py-2 rounded-lg disabled:opacity-50 overflow:block"
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
              <p className="text-[#C9A267] text-lg font-semibold">
                {selectedCertificate?.title}
              </p>
              <p className="font-semibold text-black text-md">
                {selectedCertificate?.description}
              </p>
              <p className="mt-2 mb-2 text-sm text-center text-gray-700">
                {selectedCertificate?.extra}
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
      </Container>
    </section>
  );
};

export default Certificate;
