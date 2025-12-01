import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
  Header,
  Contact,
  Services,
  TeamSlider,
  Testimonials,
  MissionVisionValues,
  InvGR,
  SecGR,
  NRIAdModal,
  NRI,
} from "../../components";

import { Modal } from "../../components/shared";

const NRIAdButton = (props) => {
  const { showNRIAdModal, setShowNRIAdModal } = props;

  return showNRIAdModal ? null : (
    <>
      <button
        onClick={() => setShowNRIAdModal(true)}
        aria-label="Show advertisement"
        className="fixed bottom-24 right-5 z-[900] inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </button>
    </>
  );
};

const HomePage = (props) => {
  const [isDisclaimer, setIsDisclaimer] = useState(false);
  const [showNRIAdModal, setShowNRIAdModal] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("disclaimer")) {
      setIsDisclaimer(true);
    }
  }, [isDisclaimer]);

  return (
    <main>
      <Helmet>
        <title>
          Best Private Investigator & Security Service Provider in Kolkata -
          Innerwork Advisors LLP
        </title>
        <meta
          content="Best Private Investigator in Kolkata & Best Security Service Provider in Kolkata, we are Innerwork Advisors LLP. Visit us for trusted, professional security and investigative services.
        "
        />
      </Helmet>
      <Header />
      <MissionVisionValues />
      <Services />
      <NRI />
      <TeamSlider />
      <Contact />
      <Testimonials />
      <InvGR />
      <SecGR />

      <NRIAdButton
        showNRIAdModal={showNRIAdModal}
        setShowNRIAdModal={setShowNRIAdModal}
      />
      <NRIAdModal
        isOpen={showNRIAdModal}
        onClose={() => setShowNRIAdModal(false)}
      />

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
            www.innerworkadvisorsllp.com provides private investigation service
            to the clients based on their request against the conditions of this
            agreement, and by clicking on the “I accept” form signifies, your
            acceptance of all the conditions of this agreement.
          </p>

          <p>
            <strong className="text-primary-light">
              Disclaimer of warranties
            </strong>
            <br />
            Clients hereby declare that no contractual or legal liability arises
            against www.innerworkadvisorsllp.com by hiring our services and
            sharing their personal information, the use of which is at the sole
            risk of the client. No notice or advice from any client to
            www.innerworkadvisorsllp.com will create any liability whatsoever.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button
              onClick={() => {
                setIsDisclaimer(false);
                localStorage.setItem("disclaimer", "true");
              }}
              className="w-full rounded-md bg-primary-light px-4 py-2 text-white hover:bg-primary-dark sm:w-48"
            >
              Proceed To Website
            </button>

            <a
              type="button"
              href="https://www.google.co.in"
              className="w-full rounded-md bg-primary-light px-4 py-2 text-center text-white hover:bg-primary-dark sm:w-48"
            >
              Decline
            </a>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default HomePage;
