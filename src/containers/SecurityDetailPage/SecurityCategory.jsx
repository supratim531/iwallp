import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Section, Container } from "../../components/shared";

import { securityCategory } from "../../assets";

export default function SecurityCategoryPage() {
  const { type } = useParams();
  const securityCategory =securityCategory.find((item) => item.urlPath === type);

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
            to={"/security-guard-services-kolkata"}
            className="underline duration-200 text-secondary underline-offset-4 hover:text-primary-dark"
          >
            Security
          </Link>{" "}
          {"/"} <span>{securityCategory.name}</span>
        </div>
      </div>

      <Container className="">
        <div className="mt-8 flex h-[50vh] items-center justify-center shadow-md md:mt-16">
          <img
            className="object-cover w-full h-full"
            src={securityCategory.image}
            alt=""
          />
        </div>

        <Section
          label={securityCategory.name}
          // className="relative flex flex-col items-center justify-between text-center [&>div>p]:text-center"
        >
          <h1 className="mb-4 text-3xl font-bold">{securityCategory.heading}</h1>
          <h2 className="mb-2 text-xl font-semibold text-center text-gray-700">
            {securityCategory.title}
          </h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            {securityCategory.description}
          </p>
          <div className="flex items-center justify-center">
            <Link
              to={"/security-guard-services-kolkata"}
              className="self-center px-4 py-2 text-white rounded-md bg-secondary"
            >
              Back
            </Link>
          </div>
        </Section>
      </Container>
    </section>
  );
}
