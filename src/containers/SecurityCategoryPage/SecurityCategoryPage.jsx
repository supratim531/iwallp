import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

import { Section, Container } from "../../components/shared";

import { securities } from "../../assets";

const SecurityCategoryPage = (props) => {
  const { type } = useParams();
  const securityCategory = securities?.find(
    (security) => security.urlPath === type,
  );

  const ref = useRef(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  if (!securityCategory) {
    return (
      <div className="p-6 text-center text-red-500">
        <h2 className="text-2xl font-semibold">404 - Not Found</h2>
        <p>We couldn't find the investigation service you're looking for.</p>
      </div>
    );
  }

  return (
    <section>
      <Helmet>
        <title>{securityCategory.metaTitle}</title>
        <meta name="description" content={securityCategory.metaDesc} />
      </Helmet>
      <div
        style={{
          backgroundImage: `url(https://innerworkadvisorsllp.com/images/service-hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[45vh] md:!bg-center lg:h-[60vh]"
      >
        <div className="text-center">
          <Link
            to={`/security-guard-services-kolkata`}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Security
          </Link>{" "}
          {"/"} <span>{securityCategory.name}</span>
        </div>
      </div>

      <Container className="py-8 md:py-16">
        <div className="mt-8 flex h-[50vh] items-center justify-center shadow-md md:mt-16">
          <img
            className="h-full w-full object-cover"
            src={securityCategory.image}
            alt=""
          />
        </div>

        <Section label={securityCategory.name}>
          <h1 className="mb-4 text-3xl font-bold">
            {securityCategory.heading}
          </h1>
          <h2 className="mb-2 text-center text-xl font-semibold text-gray-700">
            {securityCategory.title}
          </h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            {securityCategory.description}
          </p>
        </Section>

        <div
          ref={ref}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {securityCategory.subServices.map((service, index) => (
            <motion.div
              key={`${animationKey}-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-lg bg-[#415781] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A267]/30"
            >
              <div
                style={{
                  backgroundImage: service.image
                    ? `url(${service.image})`
                    : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="relative h-64 w-full bg-cover bg-center"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#343a4980] p-4 text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0] md:text-lg">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <Link
                    to={`/security-guard-services-kolkata/${securityCategory.urlPath}/${service.urlPath}`}
                    className="mt-2 rounded-lg bg-[#C9A267] px-4 py-2 font-bold text-white"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <Link
            to={`/security-guard-services-kolkata`}
            className="self-center rounded-md bg-secondary px-4 py-2 text-white"
          >
            Back
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SecurityCategoryPage;
