import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Container } from "../../components/shared";

import { investigations, ServiceHeroImage } from "../../assets";

const InvestigationPage = () => {
  const ref = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${ServiceHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[75vh] md:!bg-center lg:h-[50vh]"
      >
        <div className="text-center">
          <Link
            to={"/our-services"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Services
          </Link>{" "}
          {"/"} <span>Investigation</span>
        </div>
      </div>

      <Container className="py-8 md:py-16">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {investigations.map((investigation, index) => (
            <motion.div
              key={`${animationKey}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg bg-[#415781] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A267]/30"
            >
              <div
                style={{
                  backgroundImage: investigation.image
                    ? `url(${investigation.image})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="relative h-64 w-full bg-cover bg-center"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#343a4980] p-4 text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0] md:text-lg">
                  <h3 className="text-xl font-semibold">
                    {investigation.name}
                  </h3>
                  <Link
                    to={`/investigation/${investigation.urlPath}`}
                    className="mt-2 rounded-lg bg-[#C9A267] px-4 py-2 font-bold text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default InvestigationPage;
