import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Section, Container } from "../shared";

const NRI = (props) => {
  const images = [
    "https://innerworkadvisorsllp.com/images/UK/UK1.png",
    "https://innerworkadvisorsllp.com/images/UK/UK2.png",
    "https://innerworkadvisorsllp.com/images/UK/UK3.png",
    "https://innerworkadvisorsllp.com/images/UK/UK4.png",
    "https://innerworkadvisorsllp.com/images/UK/UK5.png",
    "https://innerworkadvisorsllp.com/images/UK/UK6.png",
    "https://innerworkadvisorsllp.com/images/UK/UK7.png",
  ];

  const ukRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true); // NEW: control autoplay

  useEffect(() => {
    const linley = ukRef.current;
    if (!linley) return;
    const onScroll = () => {
      const cardW = linley.firstChild?.getBoundingClientRect().width || 1;
      const newIdx = Math.round(linley.scrollLeft / cardW);
      setIndex(Math.min(images.length - 1, Math.max(0, newIdx)));
    };
    linley.addEventListener("scroll", onScroll, { passive: true });
    return () => linley.removeEventListener("scroll", onScroll);
  }, [images.length]);

  const scrollToIndex = (i) => {
    const linley = ukRef.current;
    if (!linley) return;
    const card = linley.children[i];
    if (card) linley.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const next = () =>
    setIndex((prev) => {
      const n = (prev + 1) % images.length;
      scrollToIndex(n);
      return n;
    });

  const prev = () =>
    setIndex((prev) => {
      const n = (prev - 1 + images.length) % images.length;
      scrollToIndex(n);
      return n;
    });

  // NEW: Autoplay every 5s, pause on hover
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      // advance one slide
      setIndex((prev) => {
        const n = (prev + 1) % images.length;
        scrollToIndex(n);
        return n;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [autoplay, images.length]);

  return (
    <Container>
      <Section
        id="nri"
        className="!my-0 py-8 md:py-16"
        title={"Innerwork for Non-Resident Indians (NRIs)"}
        label={"Holding NRI's hand"}
        // label={"HOLDING THE HAND OF AN NRI…"}
        description={
          "Innerwork Advisors LLP is a trusted legal and business consultancy dedicated to empowering Non-Resident Indians (NRIs) with expert, end-to-end solutions for their cross-border legal, financial, and investment needs. With our newly opened office in Manchester, United Kingdom, we bring our world-class advisory services closer to the global NRI community. From property disputes and family law matters in India to business setup, taxation, and compliance support across jurisdictions, our team ensures seamless assistance backed by deep legal expertise and cultural understanding. NRIs in the UK can now benefit from local access to our professionals while enjoying the convenience of coordinated services in India—bridging distances, safeguarding rights, and delivering justice without the barriers of time zones or geography..."
        }
      >
        {/* Carousel */}
        <div className="relative mb-8">
          <div
            ref={ukRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth"
            onMouseEnter={() => setAutoplay(false)} // NEW
            onMouseLeave={() => setAutoplay(true)} // NEW
            aria-label="NRI Manchester image carousel"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl bg-gray-100 sm:w-[480px] md:w-[560px] lg:w-[640px]"
              >
                <img
                  src={src}
                  alt={`NRI Manchester Office visual ${i + 1}`}
                  className="h-[260px] w-full object-cover sm:h-[320px] md:h-[360px]"
                  draggable="false"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
            aria-label="Next slide"
          >
            ›
          </button>

          {/* Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index
                    ? "bg-primary-dark"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Carousel Layer Ended */}
        <Link
          to={"nri-advisors-llp"}
          className="mx-auto block w-full items-center justify-center rounded-md border-2 border-transparent bg-primary-light px-6 py-2 text-center text-sm uppercase text-white duration-200 hover:bg-primary-dark sm:w-40"
        >
          Read More
        </Link>
      </Section>
    </Container>
  );
};

export default NRI;
