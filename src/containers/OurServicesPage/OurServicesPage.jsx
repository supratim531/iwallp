import React from "react";
import { Link } from "react-router-dom";

import { Section, Container } from "../../components/shared";

import {
  SecurityImage,
  ServiceHeroImage,
  InvestigationImage,
} from "../../assets";

const services = [
  {
    title: "INVESTIGATION",
    description:
      "Uncovering truth, gathering evidence, solving mysteries, ensuring accountability, delivering justice.",
    bg: InvestigationImage,
    btnColor: "bg-primary-light text-white",
  },
  {
    title: "SECURITY",
    description:
      "From homes to businesses, we've got you secure. Trust us to keep your world safe and assured.",
    bg: SecurityImage,
    btnColor: "bg-primary-light text-white",
  },
];

const OurServicesPage = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${ServiceHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-screen items-center justify-center text-2xl text-white"
      >
        <div>
          <Link className="text-secondary" to={"/"}>
            Home
          </Link>{" "}
          {"/"} <span>Our Services</span>
        </div>
      </div>

      <Container>
        <Section
          classname="relative flex items-center justify-between text-center"
          label={"Our Services"}
          description={
            "Innerwork Advisors LLP is a leading provider of legal services, private investigation and man power provider solutions in Kolkata. At our law and detective firm, we offer a comprehensive range of services tailored to meet the diverse needs of our clients. Our legal services comprises criminal, civil litigation, family law, corporate legal matters and other issues, where our experienced team provides expert guidance and representation."
          }
        >
          <div className="w-full bg-white py-10">
            <div className="container mx-auto px-4">
              <div className="flex flex-col gap-6 md:flex-row">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="group relative min-h-[400px] flex-1 overflow-hidden rounded-lg"
                    style={{
                      backgroundImage: `url(${service.bg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/60"></div>
                    <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
                      <h3 className="mb-4 text-lg font-bold md:text-xl">
                        {service.title}
                      </h3>
                      <p className="mb-6 text-sm md:text-base">
                        {service.description}
                      </p>
                      <button
                        className={`rounded-sm px-6 py-4 ${service.btnColor} text-sm font-semibold transition hover:opacity-90`}
                      >
                        KNOW MORE
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </section>
  );
};

export default OurServicesPage;
