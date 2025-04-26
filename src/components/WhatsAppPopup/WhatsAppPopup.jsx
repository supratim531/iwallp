import React from "react";

const WhatsAppPopup = () => {
  return (
    <div
      className="group fixed bottom-0 right-2 z-30 inline-flex cursor-pointer p-4"
      onClick={() =>
        window.open(
          "https://wa.me/919073672051?text=I%20want%20to%20know%20more%20details%20about%20Innerwork%20Advisors%20LLP ",
        )
      }
    >
      <div className="invisible flex items-center justify-center bg-green-600 px-6 text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:flex group-hover:rounded-bl-md group-hover:rounded-tl-md group-hover:opacity-100">
        WhatsApp
      </div>
      <button className="rounded-md bg-teal-700 px-4 py-3 duration-200 group-hover:rounded-none group-hover:rounded-br-md group-hover:rounded-tr-md group-hover:bg-green-600">
        <i className="fa-brands fa-whatsapp text-3xl text-white"></i>
      </button>
    </div>
  );
};

export default WhatsAppPopup;
