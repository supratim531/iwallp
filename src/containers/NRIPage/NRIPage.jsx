import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Section, Container } from "../../components/shared";

const NRIPage = (props) => {
  return (
    <section>
      <Helmet>
        <title>
          NRI Legal Advisors Solution - Innerwork Advisors LLP | Trusted Support
          for NRIs
        </title>
        <meta
          name="description"
          content="Innerwork Advisors LLP provides expert solution and assistance to NRIs. Resolve will, property, and inheritance issues with trusted hands from across the globe."
        />
        <link
          rel="canonical"
          href="https://innerworklegalservices.com/innerwork-nri-legal-services"
        />
      </Helmet>

      <div
        style={{
          backgroundImage: `url(https://innerworklegalservices.com/images/nri-taxation.png)`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[45vh] md:!bg-center lg:h-[60vh]"
      >
        <div className="text-center">
          <Link
            to={"/"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Home
          </Link>{" "}
          {"/"} <span>NRI Advisors Page</span>
        </div>
      </div>

      <Container>
        <Section
          data-aos="fade-up"
          title={"Title Poster for NRIs"}
          description={
            <p
              lang="en"
              className="max-w-prose hyphens-auto text-sm leading-relaxed text-gray-800 [text-wrap:balance] sm:text-base md:text-lg"
            >
              We have opened a new office in{" "}
              <span className="whitespace-nowrap font-semibold">
                United&nbsp;Kingdom
              </span>
              . Kindly take a note of our new address provided in the poster
              below.
            </p>
          }
        >
          <img
            className="relative mx-auto block h-1/2 w-1/2 flex-wrap items-center justify-start object-contain"
            src="https://innerworklegalservices.com/images/nri-banner.png"
            alt="Innerwork Advisors LLP — NRI Services Poster"
            loading="lazy"
          />
        </Section>
        <Section data-aos="fade-up" title={"Issues Faced by NRIs"}>
          <ul className="list-inside [&>li>strong]:text-primary-light [&>li]:list-inside [&>li]:list-disc">
            <li>
              <strong>Will and Succession Issues:</strong> NRIs often face
              challenges in executing or contesting wills, especially when legal
              heirs are scattered or documents are unclear.
            </li>
            <li>
              <strong>Legal System Delays:</strong> Navigating the Indian legal
              system from abroad can be time-consuming and complex due to
              backlog and procedural delays.
            </li>
            <li>
              <strong>Power of Attorney Misuse:</strong> Misuse of POA by
              trusted persons is a common issue that can result in fraudulent
              property transfers or financial loss.
            </li>
            <li>
              <strong>Title and Ownership Disputes:</strong> NRIs frequently
              struggle to establish or protect land ownership due to poor
              documentation or encroachments.
            </li>
            <li>
              <strong>Property Disputes & Inheritance:</strong> Partition of
              ancestral property, unclear titles, or disputes among co-owners
              can delay or obstruct rightful claims.
            </li>
            <li>
              <strong>Property Management Issues:</strong> Managing property
              from abroad is challenging without reliable local assistance and
              often results in poor maintenance or disputes.
            </li>
            <li>
              <strong>Illegal Possession and Encroachment:</strong> Vacant or
              unmonitored property is prone to illegal occupation by tenants,
              relatives, or third parties.
            </li>
            <li>
              <strong>Property Sale Challenges:</strong> Selling property
              remotely involves navigating legal formalities, ensuring correct
              valuation, and avoiding fraudulent buyers.
            </li>
            <li>
              <strong>Real Estate Scams:</strong> NRIs are often targeted by
              fraudulent developers or agents promising non-existent or disputed
              properties.
            </li>
            <li>
              <strong>Agricultural Land Restrictions:</strong> Certain Indian
              states restrict non-agriculturists (including NRIs) from
              purchasing agricultural land, leading to legal complications.
            </li>
          </ul>
        </Section>

        <Section data-aos="fade-up" title={"Challenges Faced by NRIs"}>
          <ul className="list-inside [&>li>strong]:text-primary-light [&>li]:list-inside [&>li]:list-disc">
            <li>
              <strong>Managing Time Zones and Physical Distance:</strong> Legal
              proceedings and documentation require frequent coordination, which
              is tough due to time zone differences and travel limitations.
            </li>
            <li>
              <strong>Understanding Complex Laws:</strong> Laws like FEMA, the
              Benami Act, and real estate regulations require professional
              guidance for compliance and interpretation.
            </li>
            <li>
              <strong>Handling Extensive Legal Documentation:</strong> NRIs
              often struggle with notarization, attestation, and document
              submission required in Indian legal processes.
            </li>
            <li>
              <strong>Risk of Unreliable Local Contacts:</strong> Many NRIs
              depend on relatives or local agents who may not act in their best
              interests, leading to delays or fraud.
            </li>
          </ul>
        </Section>
      </Container>
    </section>
  );
};

export default NRIPage;
