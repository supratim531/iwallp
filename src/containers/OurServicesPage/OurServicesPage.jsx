import React from "react";
import { Link } from "react-router-dom";

import { Section, Container } from "../../components/shared";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "INVESTIGATION",
    description:
      "Uncovering truth, gathering evidence, solving mysteries, ensuring accountability, delivering justice.",
    bg: "https://innerworkadvisorsllp.com/images/investigation.png",
    url: "private-investigation-kolkata",
    btnColor: "bg-primary-light text-white",
  },
  {
    title: "SECURITY",
    description:
      "From homes to businesses, we've got you secure. Trust us to keep your world safe and assured.",
    bg: "https://innerworkadvisorsllp.com/images/security.png",
    url: "security-guard-services-kolkata",
    btnColor: "bg-primary-light text-white",
  },
];

const OurServicesPage = () => {
  return (
    <section>
      <Helmet>
        <title>
          Our Services - Innerwork Advisors LLP - Best Private Investigator in
          Kolkata
        </title>
        <meta
          name="description"
          content="Explore expert investigative & security services by Innerwork Advisors LLP. Trusted in Kolkata for surveillance, background checks, asset tracing & more"
        />
      </Helmet>

      <div
        style={{
          backgroundImage: `url(https://innerworkadvisorsllp.com/images/service-hero.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center text-2xl text-white sm:h-[45vh] lg:h-[60vh]"
      >
        <div className="text-center">
          <Link
            to={"/"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Home
          </Link>{" "}
          {"/"} <span>Our Services</span>
        </div>
      </div>

      <Container>
        <Section
          className="relative flex flex-col items-center justify-between text-center"
          label={"Our Services"}
          description={
            "Innerwork Advisors LLP is a leading provider of Private Detective & Investigation Services and Security Services (Corporate & Individual) based in Kolkata. Our Private Detective & Investigation Services are offered on a pan India basis. Security Services are provided in the State of West Bengal."
          }
        >
          <div className="w-full bg-white py-10">
            <div className="flex flex-col gap-6 md:flex-row">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative flex min-h-[400px] flex-1 overflow-hidden rounded-lg"
                  // className="group relative flex min-h-[400px] flex-1 items-center justify-center overflow-hidden rounded-lg"
                  style={{
                    backgroundImage: `url(${service.bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/60"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center text-white">
                    <h3 className="mb-4 text-lg font-bold md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mb-6 text-sm md:text-base">
                      {service.description}
                    </p>
                    <Link
                      to={`/${service.url}`}
                      className={`rounded-sm px-6 py-4 ${service.btnColor} text-sm font-semibold transition hover:opacity-90`}
                    >
                      KNOW MORE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Container>
    </section>
  );
};

export default OurServicesPage;
