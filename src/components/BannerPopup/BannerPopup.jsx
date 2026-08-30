import React, { useEffect, useState } from "react";

import { Modal } from "../shared";

const STORAGE_KEY = "hasSeenBannerPopup";

const BannerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem(STORAGE_KEY);

    if (!hasSeenPopup) {
      setIsOpen(true);
      localStorage.setItem(STORAGE_KEY, "true");
    }
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open announcement"
        className="fixed bottom-[4.5rem] right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark text-white shadow-lg transition-transform hover:scale-110 md:bottom-24 md:h-12 md:w-12"
      >
        <i className="fa-solid fa-bullhorn text-base md:text-xl"></i>
      </button>

      <Modal
        title={"Special Announcement"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <img
          src="https://innerworkadvisorsllp.com/images/banner.webp"
          alt="Innerwork Advisors LLP Advertisement"
          className="w-full rounded-md"
        />
      </Modal>
    </>
  );
};

export default BannerPopup;
