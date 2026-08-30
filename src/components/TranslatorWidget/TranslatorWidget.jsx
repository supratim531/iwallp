import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LANGS = [
  { code: "en", label: "English", native: "English", flag: "🇬🇧" },
  { code: "hi", label: "Hindi",   native: "हिंदी",   flag: "🇮🇳" },
  { code: "bn", label: "Bengali", native: "বাংলা",   flag: "🇧🇩" },
];

function getCookieLang() {
  try {
    const m = document.cookie.match(/googtrans=\/[a-z-]+\/([a-z-]+)/);
    return m ? m[1] : "en";
  } catch { return "en"; }
}

function setGoogTransCookie(langCode) {
  const val  = langCode === "en" ? "/en/en" : `/en/${langCode}`;
  const host = window.location.hostname;
  document.cookie = `googtrans=${val};path=/;domain=${host}`;
  document.cookie = `googtrans=${val};path=/`;
}

const TranslatorWidget = () => {
  const [open, setOpen]         = useState(false);
  const [activeLang, setActive] = useState(() => getCookieLang());
  const widgetRef               = useRef(null);

  useEffect(() => {
    if (document.getElementById("gt-script")) return;
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "hi,bn,en", autoDisplay: false },
        "gt-root"
      );
    };
    const s  = document.createElement("script");
    s.id     = "gt-script";
    s.src    = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async  = true;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    const h = (e) => { if (widgetRef.current && !widgetRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const switchLang = (code) => {
    setActive(code);
    setOpen(false);
    setGoogTransCookie(code);
    setTimeout(() => window.location.reload(), 80);
  };

  const current = LANGS.find(l => l.code === activeLang) || LANGS[0];

  return (
    <>
      <div id="gt-root" style={{ display: "none" }} />
      <style>{`
        .goog-te-banner-frame.skiptranslate { display: none !important; }
        .goog-te-banner-frame               { display: none !important; }
        body                                 { top: 0px !important; }
        .skiptranslate                       { display: none !important; }
        .goog-te-gadget                      { display: none !important; }
        #google_translate_element            { display: none !important; }
      `}</style>

      <div ref={widgetRef} style={{ position: "relative" }}>
        <motion.button
          onClick={() => setOpen(o => !o)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Select language"
          style={{
            display: "flex", alignItems: "center", gap: 7,
            background: "linear-gradient(135deg,#1a2744,#243a6e)",
            border: "1.5px solid rgba(201,162,103,0.6)",
            borderRadius: 50, padding: "9px 16px",
            cursor: "pointer", color: "#C9A267",
            fontFamily: "'Lato',sans-serif", fontWeight: 700,
            fontSize: "clamp(0.72rem,2vw,0.82rem)", letterSpacing: "0.04em",
            whiteSpace: "nowrap", boxShadow: "0 4px 18px rgba(0,0,0,0.28)",
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <span style={{ fontSize: "1rem" }}>🌐</span>
          <span>{current.flag} {current.native}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: "0.6rem", opacity: 0.65, lineHeight: 1 }}
          >▼</motion.span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.96 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute", bottom: "calc(100% + 10px)", right: 0,
                background: "#0f1f3d", border: "1px solid rgba(201,162,103,0.38)",
                borderRadius: 14, overflow: "hidden", minWidth: 178,
                boxShadow: "0 16px 50px rgba(0,0,0,0.45)", zIndex: 20,
              }}
            >
              <div style={{ padding: "8px 14px 6px", borderBottom: "1px solid rgba(201,162,103,0.12)" }}>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Select Language
                </p>
              </div>

              {LANGS.map(l => (
                <button
                  key={l.code}
                  onClick={() => switchLang(l.code)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", gap: 11,
                    padding: "12px 16px",
                    background: activeLang === l.code ? "rgba(201,162,103,0.14)" : "transparent",
                    border: "none", borderBottom: "1px solid rgba(255,255,255,0.05)",
                    cursor: "pointer", textAlign: "left",
                    fontFamily: "'Lato',sans-serif",
                    WebkitTapHighlightColor: "transparent",
                    transition: "background 0.18s",
                  }}
                  onMouseEnter={e => { if (activeLang !== l.code) e.currentTarget.style.background = "rgba(201,162,103,0.08)"; }}
                  onMouseLeave={e => { if (activeLang !== l.code) e.currentTarget.style.background = "transparent"; }}
                >
                  <span style={{ fontSize: "1.3rem", lineHeight: 1 }}>{l.flag}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "#C9A267", fontWeight: 700, fontSize: "0.85rem", lineHeight: 1.2 }}>{l.native}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.68rem", marginTop: 1 }}>{l.label}</p>
                  </div>
                  {activeLang === l.code && (
                    <span style={{ color: "#C9A267", fontSize: "0.85rem", fontWeight: 700 }}>✓</span>
                  )}
                </button>
              ))}

              <div style={{ padding: "7px 14px", background: "rgba(0,0,0,0.2)" }}>
                <p style={{ color: "rgba(255,255,255,0.22)", fontSize: "0.6rem", textAlign: "center" }}>
                  Powered by Google Translate
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TranslatorWidget;
