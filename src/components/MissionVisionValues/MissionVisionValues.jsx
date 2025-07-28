import React from "react";
import classNames from "classnames";

import { Container, SubSection } from "../shared";

import css from "./MissionVisionValues.module.css";

const MissionVisionValues = (props) => {
  return (
    <Container className="py-8 md:py-16">
      {/* <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25582355"
        frameborder="0"
        height="400"
      ></iframe> */}

      {/* <iframe
        onload="iFrameResize(this)"
        src="https://442ee0d83cf24f0e8c11412acc591fc7.elf.site"
        width="100%"
      ></iframe> */}
      <div
        class="elfsight-app-7a4a2f73-b779-4883-b3c1-9d7dcfb7133e"
        data-elfsight-app-lazy
      ></div>

      <div className={css.threeMoto}>
        <div
          className={classNames(
            css.threeMotoCard,
            "group relative overflow-hidden rounded-sm",
          )}
        >
          <img
            src={"https://innerworkadvisorsllp.com/images/our-mission.png"}
            alt="Our Mission"
            className="h-[250px] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0]">
            <SubSection
              title={"Our Mission"}
              description={
                "Our mission is to offer unparalleled investigative and security service, driven by our core values of integrity, professionalism, and unwavering commitment to serve our clients' utmost interests."
              }
              className="[&>div>div]:px-10 [&>div>p]:text-[14px] [&>div>p]:text-white [&>div]:m-0 [&>div]:p-8"
            />
          </div>
        </div>

        <div
          className={classNames(
            css.threeMotoCard,
            "group relative overflow-hidden rounded-sm",
          )}
        >
          <img
            src={"https://innerworkadvisorsllp.com/images/our-vision.png"}
            alt="Our Vision"
            className="h-[250px] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0]">
            <SubSection
              title={"Our Vision"}
              description={
                "Our vision is to emerge as a prominent authority in the investigative and security service, celebrated for our truth seekers, unwavering dedication to absolute truth, and transformative influence on the well-being of our clients."
              }
              className="[&>div>div]:px-10 [&>div>p]:text-[14px] [&>div>p]:text-white [&>div]:m-0 [&>div]:p-8"
            />
          </div>
        </div>

        <div
          className={classNames(
            css.threeMotoCard,
            "group relative overflow-hidden rounded-sm",
          )}
        >
          <img
            src={"https://innerworkadvisorsllp.com/images/our-values.png"}
            alt="Our Values"
            className="h-[250px] w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0]">
            <SubSection
              title={"Our Values"}
              description={
                "Our firm's values are central to who we are, influencing how we work with clients, colleagues, and the community. Integrity is key for us, meaning we prioritize honesty, transparency, and ethical behaviour in everything we do."
              }
              className="[&>div>div]:px-10 [&>div>p]:text-[14px] [&>div>p]:text-white [&>div]:m-0 [&>div]:p-8"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MissionVisionValues;
