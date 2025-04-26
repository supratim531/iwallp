import React from "react";
import { Link } from "react-router-dom";

import { Section, Container } from "../../components/shared";

import { SecurityClippedImage, SecurityServiceImage } from "../../assets";

const SecurityServicesPage = () => {
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${SecurityServiceImage})`,
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
          {"/"} <span>Security Services</span>
        </div>
      </div>

      <Container>
        <div className="mt-8 flex items-center justify-center shadow-md md:mt-16">
          <img
            className="object-fit h-full w-full"
            src={SecurityClippedImage}
            alt=""
          />
        </div>

        <Section
          classname="relative flex items-center justify-between text-center"
          label={"SECURITY SERVICES"}
        >
          <div>
            <h2 className="mb-6 text-3xl font-bold">
              Comprehensive Security and Protection Solutions by Innerwork
              Advisors LLP
            </h2>

            <p className="mb-6">
              At Innerwork Advisors LLP, we provide a robust suite of integrated
              security and protection services, meticulously designed to
              safeguard your personnel, assets, and operational integrity. Our
              commitment is to deliver unparalleled peace of mind through
              expertise, vigilance, and state-of-the-art solutions tailored to
              the unique requirements of each client across India.
            </p>

            <h3 className="mb-4 text-2xl font-semibold">
              Our Core Service Offerings:
            </h3>

            <ol className="list-decimal space-y-6 pl-6">
              <li>
                <strong>Manned Security & Personnel:</strong>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Armed & Unarmed Guards:</strong> We deploy highly
                    trained, disciplined, and professional security personnel to
                    protect your premises, assets, and people. Whether requiring
                    a visible deterrent (unarmed guards) or a higher level of
                    response capability (armed guards, compliant with all
                    regulations), our staff provides reliable surveillance,
                    access control, and incident response.
                  </li>
                  <li>
                    <strong>Bodyguards & Executive Protection:</strong> For
                    individuals requiring dedicated personal security, we offer
                    discreet and highly skilled Close Protection Officers
                    (Bodyguards). Our Executive Protection programs encompass
                    threat assessment, secure transportation, and comprehensive
                    safeguarding strategies for VIPs, executives, and their
                    families, ensuring their safety in any environment.
                  </li>
                  <li>
                    <strong>Martial Arts Experts:</strong> Augmenting our
                    personnel capabilities, we provide individuals trained in
                    advanced martial arts, offering specialized skills for close
                    protection details or situations demanding superior
                    hand-to-hand readiness.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Secure Logistics & Asset Protection:</strong>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    <strong>
                      Cash-in-Transit (CIT) & Bullion/Valuable Transfer:
                    </strong>{" "}
                    We specialize in the secure collection, transportation, and
                    delivery of cash, bullion, and other high-value assets.
                    Utilizing purpose-built armoured vehicles and highly trained
                    crews, we ensure the integrity and safety of your valuables
                    throughout the transit process.
                  </li>
                  <li>
                    <strong>Armoured Vehicles:</strong> Our fleet of specialized
                    armoured vehicles provides maximum protection during the
                    transportation of valuable goods or personnel, meeting
                    stringent security standards.
                  </li>
                  <li>
                    <strong>Armed Escort Services:</strong> For high-risk
                    movements or valuable consignments requiring enhanced
                    security, we provide dedicated armed escort teams to ensure
                    safe passage.
                  </li>
                  <li>
                    <strong>ATM Management:</strong> We offer comprehensive ATM
                    management solutions, including cash replenishment,
                    reconciliation, and first-line maintenance, ensuring optimal
                    uptime and security for your ATM network.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Security Technology & Systems Integration:</strong>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    <strong>CCTV Surveillance Systems:</strong> We design,
                    install, and monitor advanced CCTV systems, providing
                    critical visual oversight, recording capabilities, and
                    forensic evidence potential for your facilities.
                  </li>
                  <li>
                    <strong>Access Control Systems:</strong> Manage and monitor
                    entry points effectively with our sophisticated access
                    control solutions, ranging from basic card readers to
                    advanced biometric systems, restricting unauthorized access
                    and tracking movement.
                  </li>
                  <li>
                    <strong>Perimeter Protection:</strong> Secure the boundaries
                    of your property with integrated perimeter protection
                    systems, including physical barriers, sensors, and
                    surveillance technology, creating a multi-layered defence.
                  </li>
                  <li>
                    <strong>Intrusion Alarm Systems:</strong> Detect
                    unauthorized entry attempts with reliable intrusion alarm
                    systems, configured for immediate notification and rapid
                    response protocols.
                  </li>
                  <li>
                    <strong>Scanners & Detectors:</strong> We supply and operate
                    various scanners and detectors (e.g., metal detectors, X-ray
                    baggage scanners) crucial for screening points at corporate
                    offices, events, and critical infrastructure.
                  </li>
                  <li>
                    <strong>Time & Attendance Systems:</strong> Integrate
                    security with operational efficiency using time and
                    attendance systems, often linked with access control for
                    accurate personnel tracking.
                  </li>
                  <li>
                    <strong>System Integration:</strong> Our expertise lies in
                    integrating disparate security systems (CCTV, Access
                    Control, Alarms, etc.) into a unified, manageable platform,
                    enhancing overall security posture and control.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Specialized Protection & Risk Mitigation:</strong>
                <ul className="mt-2 list-disc space-y-2 pl-6">
                  <li>
                    <strong>Ballistic Protection:</strong> We offer solutions
                    involving ballistic-resistant materials and structures
                    (e.g., in vehicles, secure rooms) to provide enhanced
                    protection against armed threats.
                  </li>
                  <li>
                    <strong>Risk Management:</strong> Our consultants work with
                    you to identify, assess, and mitigate security risks
                    specific to your operations through comprehensive audits,
                    vulnerability assessments, and strategic planning.
                  </li>
                  <li>
                    <strong>Disaster Management & Response:</strong> We assist
                    in developing and implementing disaster preparedness and
                    response plans, ensuring business continuity and personnel
                    safety during emergencies or crises.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Training & Development:</strong>
                <ul className="mt-2 list-disc pl-6">
                  <li>
                    <strong>Security Training:</strong> We provide comprehensive
                    training programs for security personnel (including our own
                    and potentially client staff) covering standard procedures,
                    emergency response, technology usage, and specialized
                    skills, ensuring competence and professionalism.
                  </li>
                </ul>
              </li>
            </ol>

            <div className="mt-8">
              <h4 className="mb-2 text-xl font-semibold">
                Partner with Innerwork Advisors LLP
              </h4>
              <p>
                Choose Innerwork Advisors LLP for integrated, reliable, and
                professional security solutions. We are dedicated to
                understanding your specific challenges and deploying the right
                combination of personnel, technology, and strategic planning to
                ensure your complete security and peace of mind. Contact us
                today to discuss your requirements.
              </p>
            </div>
          </div>
        </Section>
      </Container>
    </section>
  );
};

export default SecurityServicesPage;
