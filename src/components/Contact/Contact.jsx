import React from "react";

import { Section, Container } from "../shared";

import css from "./Contact.module.css";

const Contact = (props) => {
  return (
    <article
      className={css.root}
      style={{
        backgroundImage: `url(https://innerworkadvisorsllp.com/images/contact-us.png)`,
      }}
    >
      <Container>
        <Section
          id="contact"
          className="!my-0 !gap-4 py-8 lg:!flex lg:!flex-row lg:py-16 [&>div>div>hr]:hidden"
          title={"Don't Hesitate To Ask"}
          label={"Your Trusted Partner"}
          description={
            "We pride ourselves on providing personalized attention, clear communication and unwavering dedication to achieving the best possible outcome for our clients."
          }
        >
          <div data-aos="fade-up" className="lg:!w-[110%]">
            <iframe
              src="https://link.youngarchitects.in/widget/form/h1gY00MJGXwIHOBIfTmM"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-h1gY00MJGXwIHOBIfTmM"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Us Innerwork Advisors LLP"
              data-height="687"
              data-layout-iframe-id="inline-h1gY00MJGXwIHOBIfTmM"
              data-form-id="h1gY00MJGXwIHOBIfTmM"
              title="Contact Us Innerwork Advisors LLP"
            ></iframe>

            {/* <iframe
              src="https://link.youngarchitects.in/widget/form/iz5gLQ2Bz6RoysZd7ve1"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-iz5gLQ2Bz6RoysZd7ve1"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Us Innerwork Legal Services"
              data-height="598"
              data-layout-iframe-id="inline-iz5gLQ2Bz6RoysZd7ve1"
              data-form-id="iz5gLQ2Bz6RoysZd7ve1"
              title="Contact Us Innerwork Legal Services"
            ></iframe> */}
          </div>
        </Section>
      </Container>
    </article>
  );
};

export default Contact;
