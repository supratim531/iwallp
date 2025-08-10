import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Link, useLocation } from "react-router-dom";

/* -------------------- Ad Context -------------------- */
const AdCtx = createContext(null);
const useAd = () => {
  const ctx = useContext(AdCtx);
  if (!ctx) throw new Error("useAd must be used within <AdSystem/>");
  return ctx;
};

function readFlag(key) {
  try {
    if (window.localStorage.getItem(key) === "true") return true;
  } catch {}
  const v = document.cookie
    .split("; ")
    .find((r) => r.startsWith(`${key}=`))
    ?.split("=")[1];
  return v === "true";
}

export default function AdSystem({
  bannerSrc = "./assets/image/banner.png",
  landingHref = "/contact",
  excludeOnPaths = ["/404"],
}) {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Open the ad modal on every visit/refresh of Home "/"
  useEffect(() => {
    setIsModalOpen(pathname === "/");
  }, [pathname]);

  // Build context value UNCONDITIONALLY (to satisfy rules-of-hooks)
  const value = useMemo(
    () => ({
      isModalOpen,
      openModal: () => setIsModalOpen(true),
      closeModal: () => setIsModalOpen(false),
    }),
    [isModalOpen],
  );

  // Now it’s safe to conditionally render
  if (excludeOnPaths.includes(pathname)) return null;

  return (
    <AdCtx.Provider value={value}>
      <AdBannerModal bannerSrc={bannerSrc} landingHref={landingHref} />
      <FloatingAdButton />
    </AdCtx.Provider>
  );
}

/* -------------------- Modal -------------------- */
function AdBannerModal({ bannerSrc, landingHref }) {
  const { isModalOpen, closeModal } = useAd();
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-label="Advertisement"
    >
      <div className="relative w-[92vw] max-w-3xl rounded-2xl bg-white shadow-2xl">
        <button
          aria-label="Close advertisement"
          onClick={closeModal}
          className="absolute grid text-white rounded-full right-3 top-3 h-9 w-9 place-items-center bg-black/70 hover:bg-black focus:outline-none focus:ring-2 focus:ring-black/30"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="overflow-hidden rounded-2xl">
          <img
            src={bannerSrc}
            alt="Promotional banner"
            className="object-cover w-full h-56 md:h-72"
            loading="eager"
          />

          <div className="p-5 space-y-3 md:p-6">
            <h3 className="text-xl font-semibold">
              Holding the hands of NRIs… Always
            </h3>
            <p className="text-sm text-gray-600">
              Legal, security, accounting, and private investigation services
              across India & United Kingdom.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {/^https?:\/\//i.test(landingHref) ? (
                <a
                  href={landingHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Know More
                </a>
              ) : (
                <Link
                  to={landingHref}
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Know More
                </Link>
              )}
              <button
                onClick={closeModal}
                className="rounded-lg bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------- Floating Button -------------------- */
function FloatingAdButton() {
  const { openModal } = useAd();
  return (
    <button
      aria-label="Show advertisement"
      onClick={openModal}
      className="fixed bottom-5 right-5 z-[900] inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
        />
      </svg>
    </button>
  );
}
