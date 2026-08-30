import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { RootProvider } from "./contexts/rootContext";

import {
  Navbar,
  Footer,
  ScrollToTop,
  WhatsAppPopup,
  JsonLdSchema,
  TranslatorWidget,
  BannerPopup,
} from "./components";

import "./App.css";

const Configurations = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 3s
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="flex h-screen items-center justify-center bg-white">
      <img
        className="w-96"
        alt="Innerwork Legal Service"
        src={"https://innerworkadvisorsllp.com/images/gif/preloader-small.gif"}
      />
    </div>
  ) : (
    <RootProvider value={{}}>
      <JsonLdSchema />
      {children}
    </RootProvider>
  );
};

export const App = (props) => {
  return (
    <Configurations>
      <HelmetProvider>
      
        <WhatsAppPopup />
        <BannerPopup />
        <ScrollToTop />
        <div style={{ position: "fixed", bottom: 24, left: 16, zIndex: 999 }}>
          <TranslatorWidget />
        </div>
        <Navbar />
        <Outlet />
        <Footer />
      
      </HelmetProvider>
    </Configurations>
  );
};
