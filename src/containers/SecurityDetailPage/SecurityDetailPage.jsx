import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Section, Container } from "../../components/shared";

import { securities } from "../../assets";

const SecurityDetailPage = (props) => {
  const { type, subType } = useParams();

  const securityCategory = securities.find(
    (security) => security.urlPath === type,
  );
  const service = securityCategory.subServices.find(
    (service) => service.urlPath === subType,
  );

  if (!service) {
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
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
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
            to={`/security-guard-services-kolkata/${securityCategory.urlPath}`}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            {securityCategory.name}
          </Link>{" "}
          {"/"} <span>{service.name}</span>
        </div>
      </div>

      <Container className="">
        <div className="mt-8 flex h-[50vh] items-center justify-center md:mt-16">
          <img
            className="h-full w-1/2 object-fill"
            src={service.image}
            alt=""
          />
        </div>

        <Section
          label={service.name}
          // className="relative flex flex-col items-center justify-between text-center [&>div>p]:text-center"
        >
          <h1 className="mb-4 text-3xl font-bold">{service.heading}</h1>
          <h2 className="mb-2 text-center text-xl font-semibold text-gray-700">
            {service.title}
          </h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            {service.description}
          </p>
          <div className="flex items-center justify-center">
            <Link
              to={`/security-guard-services-kolkata/${securityCategory.urlPath}`}
              className="self-center rounded-md bg-secondary px-4 py-2 text-white"
            >
              Back
            </Link>
          </div>
        </Section>
      </Container>
    </section>
  );
};

export default SecurityDetailPage;
