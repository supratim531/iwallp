import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Slider from "./components/about/Slider";
import Services from "./components/services/Services";
import Teams from "./components/about/Team";
import { Footer } from "./components";
import { Testimonials } from "./components";
export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Teams />
      {/* <Slider /> */}
      <Testimonials />
      <Footer />
    </>
  );
}
