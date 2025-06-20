import React, { useState, useEffect } from "react";

import {
  Header,
  Contact,
  Services,
  TeamSlider,
  Testimonials,
  MissionVisionValues,
} from "../../components";

import { Modal } from "../../components/shared";
import { Helmet } from "react-helmet-async";

const HomePage = (props) => {
  const [isDisclaimer, setIsDisclaimer] = useState(false);

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
        <meta content="Best Private Investigator in Kolkata & Best Security Service Provider in Kolkata, we are Innerwork Advisors LLP. Visit us for trusted, professional security and investigative services.
        " />
      </Helmet>
      <Header />
      <MissionVisionValues />
      <Services />
      <TeamSlider />
      <Contact />

      {/* <iframe
        title="CRM Review Automation"
        class="lc_reviews_widget"
        src="https://reputationhub.site/reputation/widgets/review_widget/5A4qaPFdNsj88rnRxKHo?widgetId=68029f1083bb48e9bcb0ed58"
        frameborder="0"
        scrolling="no"
        style={{
          minWidth: "100%",
          width: "100%",
        }}
      ></iframe> */}

      <Testimonials />

      <Modal
        title={"Disclaimer"}
        isOpen={isDisclaimer}
        onClose={() => setIsDisclaimer(false)}
        // onClose={() => {
        //   if (window) {
        //     window.open("https://www.google.co.in", "_self");
        //   }
        // }}
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
              className="w-full px-4 py-2 text-white rounded-md bg-primary-light hover:bg-primary-dark sm:w-48"
            >
              Proceed To Website
            </button>

            <a
              type="button"
              href="https://www.google.co.in"
              className="w-full px-4 py-2 text-center text-white rounded-md bg-primary-light hover:bg-primary-dark sm:w-48"
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
