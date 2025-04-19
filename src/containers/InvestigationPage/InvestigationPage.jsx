import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../../components/shared";

import { ServiceHeroImage } from "../../assets";

const InvestigationPage = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${ServiceHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[75vh] md:!bg-center lg:h-screen"
      >
        <div>
          <Link
            to={"/our-services"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Services
          </Link>{" "}
          {"/"} <span>Investigation</span>
        </div>
      </div>

      <Container></Container>
    </section>
  );
};

export default InvestigationPage;
