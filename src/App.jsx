import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Slider from "./components/about/Slider";
import Services from "./components/services/ServicesNew";
import Teams from "./components/about/Team";
import TeamSlider from "./components/about/TeamSlider";
import { Footer } from "./components";
import { Testimonials } from "./components";
import { PreloaderSmall } from "./assets";
import { RootProvider } from "./contexts/rootContext";

import "./App.css";

const Configurations = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center bg-white">
      <img
        className="w-72"
        src={PreloaderSmall}
        alt="Innerwork Legal Service"
      />
    </div>
  ) : (
    <RootProvider value={{}}>{children}</RootProvider>
  );
};

export const App = (props) => {
  return (
    <Configurations>
      <HelmetProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </Configurations>
  );
};

// export default function App() {
//   return (
//     <>
//       <Navbar />
//       <Header />
//       <Services />
//       <TeamSlider />
//       {/* <Slider /> */}
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }
