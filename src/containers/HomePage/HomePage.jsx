
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
  NRI,
} from "../../components";





const HomePage = (props) => {





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

      
    </main>
  );
};

export default HomePage;
