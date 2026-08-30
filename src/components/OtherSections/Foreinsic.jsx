import { FaFingerprint } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../shared";

const Foreinsic = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://innerworkadvisorsllp.com/images/services/Forensic_Document_Examination.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative py-12"
    >
      <div className="absolute inset-0 bg-[#3E5481]/70" />
      <div className="relative z-10">
        <Container>
          <div className="relative overflow-hidden border-l-4 border-secondary bg-[#1a1f2b]/70 px-8 py-10 md:flex md:items-center md:gap-10">
            {/* Decorative background icon */}
            <FaFingerprint className="absolute right-6 top-1/2 -translate-y-1/2 text-[120px] text-secondary opacity-5" />

            {/* Icon */}
            <div className="mb-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-secondary/10 md:mb-0">
              <FaFingerprint className="text-3xl text-secondary" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-secondary">
                Featured Service
              </span>
              <h3 className="mb-3 text-2xl font-extrabold uppercase text-white">
                Forensic Services
              </h3>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-300">
                Our forensic experts specialise in document examination, handwriting
                analysis, and fraud detection — delivering court-admissible evidence
                trusted by legal professionals, corporates, and law enforcement
                agencies across India.
              </p>
              <Link
                to="/private-investigation-kolkata/forensic-document-examination-kolkata"
                className="inline-block bg-secondary px-8 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Know More
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Foreinsic;
