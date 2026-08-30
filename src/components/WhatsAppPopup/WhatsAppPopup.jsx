import React from "react";

const WhatsAppPopup = () => {
  return (
    <div
      className="group fixed bottom-4 right-4 z-30 inline-flex cursor-pointer"
      onClick={() =>
        window.open(
          "https://wa.me/919073672051?text=I%20want%20to%20know%20more%20details%20about%20Innerwork%20Advisors%20LLP ",
        )
      }
    >
      <div className="invisible flex items-center justify-center bg-green-600 px-6 text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:flex group-hover:rounded-bl-md group-hover:rounded-tl-md group-hover:opacity-100">
        WhatsApp
      </div>
      <button
        aria-label="Chat with us on WhatsApp"
        className="rounded-md bg-teal-700 px-3 py-2 duration-200 group-hover:rounded-none group-hover:rounded-br-md group-hover:rounded-tr-md group-hover:bg-green-600 md:px-4 md:py-3"
      >
        <i className="fa-brands fa-whatsapp text-2xl text-white md:text-3xl"></i>
      </button>
    </div>
  );
};

export default WhatsAppPopup;
