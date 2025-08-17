import React from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";

import { NRIBannerImage } from "../../assets";

const CTA_URL = "https://innerworkadvisors.co.uk/";

const NRIAdModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={onClose}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="scrollbar relative mx-6 max-h-[90vh] w-[600px] max-w-2xl overflow-y-auto rounded-lg bg-white"
          >
            {/* Close */}
            <div className="flex flex-col bg-white">
              <div className="sticky top-0 z-10 flex h-[36px] items-center justify-end bg-white px-4">
                <button onClick={onClose} className="text-primary-dark">
                  <i className="fa-solid fa-xmark text-2xl"></i>
                </button>
              </div>
              {/* Close */}

              {/* Content */}
              <div className="">
                <img src={NRIBannerImage} alt="NRI" />
              </div>
              {/* Content */}

              {/* Know More */}
              <div className="sticky bottom-0 z-20 flex items-center justify-center border-t bg-white/95 px-4 py-3 backdrop-blur">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#3e5581] px-5 py-2.5 font-semibold text-[#fff] shadow-md transition hover:bg-[#c9a267] hover:text-[#3e5581] hover:shadow-lg"
                >
                  Know More
                </a>
              </div>
              {/* Know More */}
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
};

export default NRIAdModal;
