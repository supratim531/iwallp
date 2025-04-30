import React from "react";
import { Link, useParams } from "react-router-dom";

import { Section, Container } from "../../components/shared";

import { investigations, ServiceHeroImage } from "../../assets";

export default function InvestigationDetail() {
  const { type } = useParams();
  const investigation = investigations.find((item) => item.urlPath === type);

  if (!investigation) {
    return (
      <div className="p-6 text-center text-red-500">
        <h2 className="text-2xl font-semibold">404 - Not Found</h2>
        <p>We couldn't find the investigation service you're looking for.</p>
      </div>
    );
  }

  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${ServiceHeroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[45vh] md:!bg-center lg:h-[60vh]"
      >
        <div className="text-center">
          <Link
            to={"/investigation"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Investigation
          </Link>{" "}
          {"/"} <span>{investigation.name}</span>
        </div>
      </div>

      <Container className="">
        <div className="mt-8 flex h-[50vh] items-center justify-center shadow-md md:mt-16">
          <img
            className="h-full w-full object-cover"
            src={investigation.image}
            alt=""
          />
        </div>

        <Section
          label={investigation.name}
          // className="relative flex flex-col items-center justify-between text-center [&>div>p]:text-center"
        >
          <h1 className="mb-4 text-3xl font-bold">{investigation.heading}</h1>
          <h2 className="mb-2 text-center text-xl font-semibold text-gray-700">
            {investigation.title}
          </h2>
          <p className="mb-4 leading-relaxed text-gray-600">
            {investigation.description}
          </p>
          <div className="flex items-center justify-center">
            <Link
              to={"/investigation"}
              className="self-center rounded-md bg-secondary px-4 py-2 text-white"
            >
              Back
            </Link>
          </div>
        </Section>
      </Container>
    </section>
  );
}
