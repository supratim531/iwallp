import React from "react";
import { Header, Contact, Services, Testimonials } from "../../components";
import TeamSlider from "../../components/about/TeamSlider";

const HomePage = (props) => {
  return (
    <main>
      <Header />
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
    </main>
  );
};

export default HomePage;
