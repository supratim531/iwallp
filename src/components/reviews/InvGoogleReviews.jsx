import React, { useEffect } from "react";
import { Container } from "../shared";

const InvGoogleReviews = () => {
  useEffect(() => {
    const existingScript = document.querySelector(
      "script[src='https://static.elfsight.com/platform/platform.js']",
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Re-initialize the Elfsight widget if needed
      if (
        window.ELFSIGHT_WIDGET &&
        typeof window.ELFSIGHT_WIDGET.init === "function"
      ) {
        window.ELFSIGHT_WIDGET.init();
      }
    }
  }, []);

  return (
    <Container className="py-8 md:py-16">
      <div
        class="elfsight-app-5cca2a82-c845-4471-97bc-a405b34332a2"
        data-elfsight-app-lazy
      ></div>
    </Container>
  );
};

export default InvGoogleReviews;
