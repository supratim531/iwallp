import React, { useState } from "react";
import { Brandlogo } from "../../assets";
import classNames from "classnames";
import css from "./Footer.module.css";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMobileAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { Container, Modal } from "../shared";
const Footer = () => {
  const [isDisclaimer, setIsDisclaimer] = useState(false);
  const [isTermsConditions, setIsTermsConditions] = useState(false);
  return (
    <footer className="bg-black relative w-[100%] h-[100%] overflow-hidden py-5 px-10">
      <Container>
        <div className="map-container-2 flex w-full flex-col items-start gap-4 pt-8 lg:h-[280px] lg:flex-row">
          <div className="flex flex-col w-full h-full gap-2 text-secondary">
            <h3
              onClick={(e) => {
                e.stopPropagation();

                if (window) {
                  window.open(
                    `https://www.google.com/maps?q=${"Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001"}`,
                    "_blank"
                  );
                }
              }}
              className="flex items-start gap-2 cursor-pointer"
            >
              <i className="mt-1 fa-solid fa-location-dot"></i>
              <span>
                Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001
              </span>
            </h3>

            <iframe
              loading="lazy"
              title="my-gmap-frame"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.180487303129!2d88.34892027405944!3d22.572351932981803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a5baabca5f%3A0xbe43dc306dbe663b!2sMartin%20Burn%20House!5e0!3m2!1sen!2sin!4v1742936965216!5m2!1sen!2sin"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure distance on map
              </a>
            </iframe>
          </div>
          <div className="flex flex-col w-full h-full gap-2 text-secondary">
            <h3
              onClick={(e) => {
                e.stopPropagation();

                if (window) {
                  window.open(
                    `https://www.google.com/maps?q=${"22, Sukeas Lane, 5th Floor, Kolkata 700001"}`,
                    "_blank"
                  );
                }
              }}
              className="flex items-start gap-2 cursor-pointer"
            >
              <i className="mt-1 fa-solid fa-location-dot"></i>
              <span>22, Sukeas Lane, 5th Floor, Kolkata 700001</span>
            </h3>

            <iframe
              loading="lazy"
              title="my-gmap-frame"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Innerwork+Advisors+LLP%2C+5th+Floor%2C+22%2C+Sukeas+Ln%2C+Murgighata%2C+B.B.D.+Bagh%2C+Kolkata%2C+West+Bengal+700001&output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure distance on map
              </a>
            </iframe>
          </div>
        </div>
        {/* ---------------------------------- */}

        <div className="flex flex-wrap w-full py-8 text-white">
          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <a href="#home">
              <img
                src={Brandlogo}
                alt="INNERWORK LEGAL SERVICES"
                className="md:w-[80%]"
              />
            </a>

            <p className="mb-4 mt-5 text-white md:w-[80%]">
              Feel free to submit your query to Kolkata's most trusted provider
              of legal services, private investigation and man power provider
              solutions in Kolkata.
            </p>
            <ul
              className={classNames(
                css.socialIcon,
                "mt-8 flex items-center justify-center gap-2 text-white md:mt-0 md:justify-start md:gap-6"
              )}
            >
              <li>
                <a
                  href="https://x.com/Innerworkllp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                    <FaMobileAlt className="text-sm text-white" />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Innerworkllp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                    <FaEnvelope className="text-sm text-white" />
                  </i>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Innerworkllp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                    <FaPhoneAlt className="text-sm text-white" />
                  </i>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">
              Quick Links
            </h3>

            <ul className={css.quickLinks}>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Our Services</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">Others</h3>

            <ul className={css.others}>
              <li
                className="cursor-pointer"
                onClick={() => setIsDisclaimer(true)}
              >
                Disclaimer
              </li>
              <li
                className="cursor-pointer"
                onClick={() => setIsTermsConditions(true)}
              >
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">
              Contact Details
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps?q=${"Ground Floor, Martin Burn Building 1 No, RN Mukherjee Rd, Kolkata 700001"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata
                  700001
                </a>
              </div>
              <div className="relative flex items-center justify-between gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps?q=${"Innerwork Advisors LLP, 5th Floor, 22, Sukeas Ln, Murgighata, B.B.D. Bagh, Kolkata, West Bengal 700001"}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  22, Sukeas Lane, 5th Floor, Kolkata 700001
                </a>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-secondary"></i>
                <a href="tel:+919830232051">(+91) 98302 32051</a>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-secondary"></i>
                <a href="mailto:info@innerworklegalservices.com">
                  info@innerworkadvisorsllp.com
                </a>
              </div>

              <ul
                className={classNames(
                  css.socialIcon,
                  "mt-8 flex items-center justify-center gap-2 text-white md:mt-0 md:justify-start md:gap-6"
                )}
              >
                <li>
                  <a
                    href="https://x.com/Innerworkllp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                      <FaTwitter className="text-sm text-white" />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Innerworkllp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                      <FaFacebookF className="text-sm text-white" />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Innerworkllp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                      <FaInstagram className="text-sm text-white" />
                    </i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/Innerworkllp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bg-[#3b5998] rounded-full w-10 h-10 flex items-center justify-center hover:bg-[#C9A267] hover:scale-110 transition-transform cursor-pointer">
                      <FaLinkedinIn className="text-sm text-white" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Modal
          title={"Disclaimer"}
          isOpen={isDisclaimer}
          onClose={() => setIsDisclaimer(false)}
        >
          <div className="flex flex-col gap-4">
            <p>
              <strong className="text-primary-light">
                Acceptance of conditions of the agreement
              </strong>
              <br />
              www.innerworklegalservices.com provides private investigation
              service to the clients based on their request against the
              conditions of this agreement, and by clicking on the “I accept”
              form signifies, your acceptance of all the conditions of this
              agreement.
            </p>

            <p>
              <strong className="text-primary-light">
                Disclaimer of warranties
              </strong>
              <br />
              Clients hereby declare that no contractual or legal liability
              arises against www.innerworklegalservices.com by hiring our
              services and sharing their personal information, the use of which
              is at the sole risk of the client. No notice or advice from any
              client to www.innerworklegalservices.com will create any liability
              whatsoever.
            </p>
          </div>
        </Modal>

        <Modal
          title={"Terms & Conditions"}
          isOpen={isTermsConditions}
          onClose={() => setIsTermsConditions(false)}
        >
          <div className="flex flex-col gap-4">
            <p>
              <strong className="text-primary-light">
                Secrecy of client's information
              </strong>
              <br />
              www.innerworkadvisorsllp.com undertakes to handle the client's
              profile and the personal data like name, address, e-mail,
              telephone number etc. in complete secrecy and no disclosures will
              be made to anyone except where it is required to be disclosed by
              existing or future laws. The data will be used solely for the
              purpose of communicating and internal use only.
            </p>

            <p>
              <strong className="text-primary-light">
                Right to terminate the service
              </strong>
              <br />
              www.innerworkadvisorsllp.com reserves the right to modify, alter
              or discontinue the service, with or without notice to the clients.
              Client's obligations As a client, I undertake to maintain complete
              secrecy of these consultation reports and not to divulge this
              information to anyone. Customers agree to the jurisdiction of
              disputes to Kolkata Courts only.
            </p>
          </div>
        </Modal>
      </Container>
    </footer>
  );
};

export default Footer;
