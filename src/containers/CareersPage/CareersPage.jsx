import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";


// ─── DATA ───
const quickStats = [
  { icon: "🏢", label: "Job Role", value: "Security Guard" },
  { icon: "📍", label: "Location", value: "Kolkata & Nearby" },
  { icon: "👥", label: "Gender", value: "Male & Female" },
  { icon: "🎂", label: "Age", value: "18–50 Years" },
  { icon: "📋", label: "Experience", value: "Freshers Welcome" },
  { icon: "⏰", label: "Shift", value: "Rotational" },
  { icon: "🏥", label: "Benefits", value: "ESI & EPFO" },
  { icon: "🏠", label: "Accommodation", value: "Available*" },
];

const responsibilities = [
  { icon: "👁️", title: "Premise Security", desc: "Maintain vigilant security at assigned locations round the clock." },
  { icon: "🚪", title: "Access Control", desc: "Monitor entry/exit of visitors and staff with proper verification." },
  { icon: "🚶", title: "Patrolling", desc: "Conduct regular rounds and report incidents immediately." },
  { icon: "🚨", title: "Emergency Reporting", desc: "Respond promptly to any emergency and coordinate with authorities." },
  { icon: "🔒", title: "Gate Management", desc: "Manage and secure entry/exit gates with discipline." },
  { icon: "📋", title: "Maintaining Discipline", desc: "Uphold law, order, and safety protocols at all times." },
];

const benefits = [
  { icon: "💰", title: "Timely Salary", desc: "Guaranteed on-time salary payments every month, no delays." },
  { icon: "🤝", title: "Direct Hiring", desc: "Direct company hiring — no middlemen, no agents involved." },
  { icon: "🆓", title: "No Charges", desc: "Zero consultancy or registration fees. No hidden charges." },
  { icon: "👔", title: "Uniform & Training", desc: "Full uniform, ID card, and professional training provided free." },
  { icon: "🏥", title: "ESI & PF", desc: "ESI and EPFO benefits as per government regulations." },
  { icon: "📈", title: "Career Growth", desc: "Promotions to Supervisor or Officer roles available." },
  { icon: "👩", title: "Women Welcome", desc: "Female candidates actively encouraged and deployed." },
  { icon: "🗺️", title: "Local Posting", desc: "Deployment near your home area whenever possible." },
];

const trustPhotos = [
  { src: "https://innerworkadvisorsllp.com/images/careers/Security2.webp", label: "On-Site Deployment", tag: "Real Guards" },
  { src: "https://innerworkadvisorsllp.com/images/careers/Security1.webp", label: "Our Security Team", tag: "In Uniform" },
  { src: "https://innerworkadvisorsllp.com/images/team.webp", label: "Innerwork Team", tag: "Leadership" },
];

const faqs = [
  { q: "Is this direct company hiring?", a: "Yes, Innerwork Advisors LLP directly recruits all candidates. No middlemen, no agents, no consultancy charges involved." },
  { q: "Is there any registration fee?", a: "Absolutely not. There are no hidden recruitment or consultancy charges. Our hiring is completely free for candidates." },
  { q: "Are ESI & PF benefits available?", a: "Yes. All full-time employees are enrolled under ESI (Employee State Insurance) and EPFO (Employees' Provident Fund) as per government regulations." },
  { q: "Are accommodation facilities available?", a: "Yes, accommodation is available for eligible candidates depending on the deployment location and site requirements." },
  { q: "Will duty be posted near my area?", a: "We make every effort to deploy guards near their preferred location. While it cannot always be guaranteed, location preference is always given top priority." },
  { q: "Is prior experience mandatory?", a: "No. Freshers are very welcome. We provide in-house professional training before deployment to meet our standards." },
  { q: "What documents are required?", a: "Aadhaar Card, PAN Card, 2 passport-size photos, educational certificates (minimum Class 8 pass), and any prior experience certificates if available." },
  { q: "What are the shift timings?", a: "We operate in 8-hour or 12-hour shifts — Day (6 AM–6 PM) and Night (6 PM–6 AM). Exact timings depend on the deployment location." },
  { q: "Can women apply?", a: "Absolutely. We actively hire female security guards for deployments at hospitals, schools, malls, and residential complexes." },
  { q: "How long does hiring take?", a: "Our team contacts you within 3–5 working days. Deployment can happen within 1–2 weeks of selection." },
];

// ─── ANIMATION VARIANTS ───
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariant = { hidden: { opacity: 0, y: 36, scale: 0.97 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

function AnimSection({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return <motion.div ref={ref} variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>{children}</motion.div>;
}

function SectionHeading({ label, title, subtitle, light = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
      <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        style={{ color: "#C9A267", fontFamily: "'Cinzel', serif", letterSpacing: "0.15em", fontSize: "clamp(0.65rem, 2vw, 0.8rem)", fontWeight: 600, textTransform: "uppercase", marginBottom: "0.4rem" }}>
        {label}
      </motion.p>
      <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.5rem, 5vw, 2.8rem)", fontWeight: 700, color: light ? "#fff" : "#1a2744", lineHeight: 1.2, marginBottom: "0.75rem" }}>
        {title}
      </motion.h2>
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        style={{ height: 3, width: 50, background: "linear-gradient(90deg, #C9A267, #a07d45)", borderRadius: 99, margin: "0 auto 1rem" }} />
      {subtitle && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          style={{ color: light ? "rgba(255,255,255,0.72)" : "#555", maxWidth: 560, margin: "0 auto", lineHeight: 1.7, fontSize: "clamp(0.85rem, 2.5vw, 1rem)" }}>
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

// ─── MAIN COMPONENT ───
export default function CareersPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [stickyVisible, setStickyVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", age: "", location: "", experience: "", preferredArea: "" });

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const heroY = useTransform(scrollY, [0, 350], [0, 70]);

  useEffect(() => {
    const onScroll = () => setStickyVisible(window.scrollY > 380);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleWhatsApp = () => {
    const msg = `Hello Innerwork Advisors, I want to apply for Security Guard.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AAge: ${form.age}%0AArea: ${form.location}%0APreferred Area: ${form.preferredArea}%0AExperience: ${form.experience}`;
    window.open(`https://wa.me/919073672051?text=${msg}`);
  };
  const handleEmail = () => {
    const subject = `Security Guard Application – ${form.name}`;
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AAge: ${form.age}%0AArea: ${form.location}%0APreferred Area: ${form.preferredArea}%0AExperience: ${form.experience}`;
    window.open(`mailto:info@innerworkadvisorsllp.com?subject=${subject}&body=${body}`);
  };

  const particles = Array.from({ length: 14 }, (_, i) => i);

  return (
    <div style={{ fontFamily: "'Lato', sans-serif", overflowX: "hidden", background: "#f9f8f6" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cinzel:wght@400;600;700&family=Lato:wght@300;400;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
        img { max-width: 100%; display: block; }
        :root { --navy: #1a2744; --navy2: #243a6e; --gold: #C9A267; --gold2: #a07d45; --bg: #f9f8f6; }

        .btn-gold {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, #C9A267, #a07d45); color: #fff; border: none;
          padding: 14px 28px; border-radius: 5px; font-weight: 700;
          font-size: clamp(0.78rem, 2.5vw, 0.9rem); letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer; transition: transform 0.25s, box-shadow 0.25s; text-decoration: none;
          font-family: 'Lato', sans-serif; white-space: nowrap;
          box-shadow: 0 4px 18px rgba(201,162,103,0.38); -webkit-tap-highlight-color: transparent;
        }
        .btn-gold:hover, .btn-gold:active { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(201,162,103,0.5); }

        .btn-navy {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: var(--navy); color: #fff; border: 2px solid var(--navy);
          padding: 12px 24px; border-radius: 5px; font-weight: 700;
          font-size: clamp(0.78rem, 2.5vw, 0.9rem); letter-spacing: 0.06em; text-transform: uppercase;
          cursor: pointer; transition: all 0.25s; text-decoration: none;
          font-family: 'Lato', sans-serif; white-space: nowrap; -webkit-tap-highlight-color: transparent;
        }
        .btn-navy:hover { background: transparent; color: var(--navy); }

        .btn-outline {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.55);
          padding: 12px 22px; border-radius: 5px; font-weight: 700;
          font-size: clamp(0.78rem, 2.5vw, 0.88rem); letter-spacing: 0.05em; text-transform: uppercase;
          cursor: pointer; transition: all 0.25s; text-decoration: none;
          font-family: 'Lato', sans-serif; white-space: nowrap; -webkit-tap-highlight-color: transparent;
        }
        .btn-outline:hover, .btn-outline:active { background: rgba(255,255,255,0.12); border-color: #fff; }

        .particle { position: absolute; border-radius: 50%; background: rgba(201,162,103,0.13); pointer-events: none; animation: floatUp linear infinite; }
        @keyframes floatUp {
          0%   { transform: translateY(105vh) rotate(0deg); opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { transform: translateY(-80px) rotate(360deg); opacity: 0; }
        }

        .pulse { animation: pulse-ring 2.2s ease-in-out infinite; }
        @keyframes pulse-ring {
          0%,100% { box-shadow: 0 0 0 0 rgba(201,162,103,0.45); }
          50%      { box-shadow: 0 0 0 10px rgba(201,162,103,0); }
        }

        .shimmer-card { position: relative; overflow: hidden; }
        .shimmer-card::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(201,162,103,0.08) 50%, transparent 70%);
          background-size: 220% 100%; animation: shimmer 3s infinite;
        }
        @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }

        .lift { transition: transform 0.32s cubic-bezier(0.22,1,0.36,1), box-shadow 0.32s; }
        .lift:hover { transform: translateY(-5px); box-shadow: 0 18px 45px rgba(26,39,68,0.13); }

        .field {
          width: 100%; padding: 13px 15px; border: 1.5px solid #d8d3c8;
          border-radius: 7px; font-size: clamp(0.88rem, 3vw, 0.95rem);
          font-family: 'Lato', sans-serif; color: #1a2744; background: #fff; outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field:focus { border-color: #C9A267; box-shadow: 0 0 0 3px rgba(201,162,103,0.15); }
        .flabel { display: block; margin-bottom: 6px; font-size: clamp(0.78rem, 2.5vw, 0.85rem); font-weight: 700; color: #1a2744; letter-spacing: 0.04em; }

        .faq-row { border-bottom: 1px solid #e8e4da; }
        .faq-btn {
          width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 17px 0; background: transparent; border: none; cursor: pointer;
          text-align: left; gap: 14px; font-family: 'Lato', sans-serif;
          -webkit-tap-highlight-color: transparent;
        }

        .trust-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1); }
        .trust-wrap:hover .trust-img { transform: scale(1.04); }
        .trust-wrap { overflow: hidden; border-radius: 14px; position: relative; }

        .sec { padding: clamp(48px, 8vw, 90px) clamp(16px, 5vw, 40px); }

        .grid-snap { display: grid; gap: clamp(12px, 3vw, 20px); }
        .g2 { grid-template-columns: repeat(2, 1fr); }
        .g3 { grid-template-columns: repeat(3, 1fr); }
        .g4 { grid-template-columns: repeat(4, 1fr); }

        @media (max-width: 479px) {
          .g2, .g3, .g4 { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .elig-grid  { grid-template-columns: 1fr !important; }
          .form-grid  { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: 1fr !important; }
          .hero-badges { flex-direction: column !important; align-items: stretch !important; }
          .hero-badges a, .hero-badges button { text-align: center; width: 100%; }
          .stat-tag { flex-wrap: wrap; }
        }
        @media (min-width: 480px) and (max-width: 639px) {
          .g4  { grid-template-columns: repeat(2, 1fr) !important; }
          .g3  { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .elig-grid  { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .g4  { grid-template-columns: repeat(2, 1fr) !important; }
          .g3  { grid-template-columns: repeat(2, 1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .elig-grid  { grid-template-columns: 1fr !important; }
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .contact-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
          .elig-grid  { grid-template-columns: 1fr 1fr !important; }
          .trust-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .contact-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }

        /* Hide Google Translate toolbar */
        .goog-te-banner-frame { display: none !important; }
        .skiptranslate { display: none !important; }
        body { top: 0 !important; }
        .goog-te-gadget { display: none !important; }
        #google_translate_element { display: none !important; }
      `}</style>

     
      {/* ── STICKY FLOATING BUTTONS (WhatsApp + Call + Apply ) ── */}
      <AnimatePresence>
        {stickyVisible && (
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            style={{
              position: "fixed", bottom: 92, right: 16, zIndex: 999,
              display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end"
            }}
          >
        

            <a href="https://wa.me/919073672051" target="_blank" rel="noreferrer"
              className="btn-gold pulse"
              style={{ borderRadius: "50%", padding: "15px", fontSize: "1.25rem", lineHeight: 1, minWidth: 0 }}
              aria-label="WhatsApp">💬</a>
            <a href="tel:+919073672051"
              className="btn-navy"
              style={{ borderRadius: "50%", padding: "15px", fontSize: "1.25rem", lineHeight: 1, minWidth: 0 }}
              aria-label="Call">📞</a>
            <a href="#apply" className="btn-gold" style={{ borderRadius: 5, padding: "12px 22px", fontSize: "0.82rem" }}>
              Apply Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────── HERO ─────────────────────────── */}
      <section style={{
        position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
        background: "linear-gradient(145deg, #0b1629 0%, #1a2744 55%, #243a6e 100%)"
      }}>
        {particles.map(i => (
          <div key={i} className="particle" style={{
            left: `${(i * 7.3) % 100}%`,
            width: `${10 + (i % 4) * 9}px`, height: `${10 + (i % 4) * 9}px`,
            animationDuration: `${9 + (i % 6) * 3}s`, animationDelay: `${(i * 1.4) % 8}s`,
          }} />
        ))}
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 58px,rgba(201,162,103,0.6) 58px,rgba(201,162,103,0.6) 59px),repeating-linear-gradient(90deg,transparent,transparent 58px,rgba(201,162,103,0.6) 58px,rgba(201,162,103,0.6) 59px)"
        }} />
        {[{top:0,left:0,borderTop:"3px solid #C9A267",borderLeft:"3px solid #C9A267"},{top:0,right:0,borderTop:"3px solid #C9A267",borderRight:"3px solid #C9A267"},{bottom:0,left:0,borderBottom:"3px solid #C9A267",borderLeft:"3px solid #C9A267"},{bottom:0,right:0,borderBottom:"3px solid #C9A267",borderRight:"3px solid #C9A267"}].map((s,i)=>(
          <div key={i} style={{ position:"absolute", width:80, height:80, opacity:0.45, ...s }} />
        ))}

        <motion.div style={{ opacity: heroOpacity, y: heroY, position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(4rem,8vw,5rem) clamp(1rem,5vw,2rem) clamp(1rem,5vw,2.5rem)", maxWidth: 860, width: "100%" }}>
          <motion.div initial={{ opacity:0, y:-18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}
            className="pulse"
            style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(201,162,103,0.14)", border:"1px solid #C9A267", borderRadius:50, padding:"7px 18px", marginBottom:"clamp(1rem,3vw,1.8rem)", marginTop:88}}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#C9A267", display:"inline-block", flexShrink:0 }} />
            <span style={{ color:"#C9A267", fontSize:"clamp(0.68rem,2.2vw,0.8rem)", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase" }}>
              🔔 Urgent Hiring Ongoing • Kolkata & Nearby Areas
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:36 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:0.1, ease:[0.22,1,0.36,1] }}
            style={{ fontFamily:"'Playfair Display', serif", fontSize:"clamp(2rem,7vw,4.5rem)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:"clamp(0.75rem,2vw,1rem)", letterSpacing:"-0.01em" }}>
            Join Our{" "}
            <span style={{ background:"linear-gradient(135deg,#C9A267,#e8c98a)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
              Security Team
            </span>
          </motion.h1>

          <motion.div initial={{ opacity:0, y:18 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.3 }}
            className="stat-tag"
            style={{ display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"clamp(6px,2vw,12px)", marginBottom:"clamp(1rem,3vw,2rem)" }}>
            {["✅ Stable Job","💸 Timely Salary","🏥 ESI & EPFO","🎓 Training Free","👩 Female Welcome","🏠 Accommodation*"].map((tag,i)=>(
              <span key={i} style={{ background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.18)", borderRadius:50, padding:"5px 13px", color:"rgba(255,255,255,0.88)", fontSize:"clamp(0.72rem,2.2vw,0.82rem)", fontWeight:500 }}>{tag}</span>
            ))}
          </motion.div>

          <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.4 }}
            style={{ color:"rgba(255,255,255,0.68)", fontSize:"clamp(0.9rem,2.5vw,1.05rem)", lineHeight:1.75, maxWidth:580, margin:"0 auto clamp(1.5rem,4vw,2.5rem)" }}>
            Innerwork Advisors LLP — PSARA Licensed & fully certified — is now recruiting disciplined security guards across Kolkata and surrounding regions.
          </motion.p>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.5 }}
            className="hero-badges"
            style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="#apply" className="btn-gold" style={{ fontSize:"clamp(0.85rem,2.5vw,1rem)", padding:"clamp(12px,3vw,16px) clamp(24px,5vw,40px)" }}>Apply Now →</a>
            <a href="tel:+919073672051" className="btn-outline">📞 Call Us</a>
            <a href="https://wa.me/919073672051?text=Hi%20I%20want%20to%20apply%20for%20Security%20Guard%20at%20Innerwork" target="_blank" rel="noreferrer" className="btn-outline">💬 WhatsApp</a>
          </motion.div>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.6, delay:0.85 }}
            style={{ display:"flex", gap:20, justifyContent:"center", flexWrap:"wrap", marginTop:"clamp(1.5rem,4vw,2.5rem)" }}>
            {["🏛️ PSARA Licensed","✅ ISO Certified","⚖️ Govt. Compliant"].map((b,i)=>(
              <span key={i} style={{ color:"#C9A267", fontSize:"clamp(0.72rem,2vw,0.82rem)", fontWeight:700 }}>{b}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div animate={{ y:[0,9,0] }} transition={{ repeat:Infinity, duration:1.9 }}
          style={{ position:"absolute", bottom:22, left:"50%", transform:"translateX(-50%)", zIndex:2 }}>
          <div style={{ width:22, height:36, border:"2px solid rgba(201,162,103,0.45)", borderRadius:11, display:"flex", justifyContent:"center", paddingTop:5 }}>
            <div style={{ width:3, height:7, background:"#C9A267", borderRadius:2 }} />
          </div>
        </motion.div>
      </section>

      {/* ─────────── QUICK SNAPSHOT ─────────── */}
      <section className="sec" style={{ background:"#fff" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <AnimSection><SectionHeading label="Job Overview" title="Quick Job Snapshot" subtitle="Everything you need to know at a glance." /></AnimSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-50px" }} className="grid-snap g4">
            {quickStats.map((s,i)=>(
              <motion.div key={i} variants={cardVariant} className="lift"
                style={{ background:"linear-gradient(135deg,#1a2744,#243a6e)", borderRadius:12, padding:"clamp(16px,3vw,24px) clamp(12px,2.5vw,20px)", textAlign:"center", border:"1px solid rgba(201,162,103,0.2)" }}>
                <div style={{ fontSize:"clamp(1.6rem,4vw,2rem)", marginBottom:8 }}>{s.icon}</div>
                <p style={{ color:"#C9A267", fontSize:"clamp(0.62rem,1.8vw,0.72rem)", fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:4 }}>{s.label}</p>
                <p style={{ color:"#fff", fontWeight:700, fontSize:"clamp(0.88rem,2.5vw,1rem)", fontFamily:"'Playfair Display', serif" }}>{s.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── ABOUT ─────────── */}
      <section className="sec" style={{ background:"#f9f8f6" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div className="grid-snap about-grid" style={{ gap:"clamp(28px,5vw,60px)", alignItems:"center" }}>
            <motion.div initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <p style={{ color:"#C9A267", fontFamily:"'Cinzel',serif", letterSpacing:"0.15em", fontSize:"clamp(0.65rem,2vw,0.8rem)", fontWeight:600, textTransform:"uppercase", marginBottom:"0.6rem" }}>About Us</p>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.5rem,4vw,2.5rem)", fontWeight:700, color:"#1a2744", lineHeight:1.2, marginBottom:"1.2rem" }}>The Backbone of Safety & Discipline</h2>
              <div style={{ height:3, width:55, background:"linear-gradient(90deg,#C9A267,#a07d45)", borderRadius:99, marginBottom:"1.2rem" }} />
              <p style={{ color:"#555", lineHeight:1.8, marginBottom:"0.9rem", fontSize:"clamp(0.88rem,2.3vw,0.97rem)" }}>
                At Innerwork Advisors LLP, we believe security personnel are the backbone of safety and discipline. We provide professional security services across residential complexes, offices, malls, commercial establishments, and events.
              </p>
              <p style={{ color:"#555", lineHeight:1.8, marginBottom:"1.8rem", fontSize:"clamp(0.88rem,2.3vw,0.97rem)" }}>
                We seek disciplined individuals who want <strong style={{ color:"#1a2744" }}>stable employment and long-term career growth.</strong>
              </p>
              <div style={{ display:"flex", gap:"clamp(20px,5vw,40px)", flexWrap:"wrap" }}>
                {[["500+","Guards Deployed"],["15+","Years Experience"],["100%","Compliance"]].map(([n,l],i)=>(
                  <div key={i}>
                    <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.6rem,4vw,2rem)", fontWeight:900, color:"#C9A267", lineHeight:1 }}>{n}</p>
                    <p style={{ fontSize:"clamp(0.72rem,2vw,0.8rem)", color:"#888", fontWeight:500, marginTop:2 }}>{l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, scale:0.92 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:0.75 }}>
              <div style={{ background:"linear-gradient(135deg,#1a2744,#243a6e)", borderRadius:16, padding:"clamp(24px,4vw,40px) clamp(20px,4vw,36px)", position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, right:0, width:80, height:80, borderTop:"3px solid #C9A267", borderRight:"3px solid #C9A267", opacity:0.4, borderRadius:"0 16px 0 0" }} />
                <div style={{ position:"absolute", bottom:0, left:0, width:60, height:60, borderBottom:"3px solid #C9A267", borderLeft:"3px solid #C9A267", opacity:0.4 }} />
                <h3 style={{ fontFamily:"'Playfair Display',serif", color:"#C9A267", fontSize:"clamp(1rem,3vw,1.3rem)", marginBottom:"1.2rem", fontWeight:700 }}>🏛️ Our Credentials</h3>
                {["PSARA Licensed & Certified","Government Regulated","ESI & EPFO Compliant","Background Verified Guards","ISO Certified Company","Direct Employment Only"].map((c,i)=>(
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:13 }}>
                    <span style={{ width:19, height:19, borderRadius:"50%", background:"#C9A267", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.65rem", color:"#fff", fontWeight:700, flexShrink:0 }}>✓</span>
                    <span style={{ color:"rgba(255,255,255,0.85)", fontSize:"clamp(0.82rem,2.2vw,0.9rem)" }}>{c}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── RESPONSIBILITIES ─────────── */}
      <section className="sec" style={{ background:"#fff" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <AnimSection><SectionHeading label="What You'll Do" title="Key Responsibilities" subtitle="Your daily duties as a Security Guard at Innerwork Advisors LLP." /></AnimSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-50px" }} className="grid-snap g3">
            {responsibilities.map((r,i)=>(
              <motion.div key={i} variants={cardVariant} className="lift"
                style={{ background:"#f9f8f6", border:"1px solid #e8e4da", borderLeft:"4px solid #C9A267", borderRadius:12, padding:"clamp(18px,3vw,28px) clamp(16px,3vw,24px)" }}>
                <div style={{ fontSize:"clamp(1.6rem,4vw,2rem)", marginBottom:10 }}>{r.icon}</div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", color:"#1a2744", fontWeight:700, fontSize:"clamp(0.95rem,2.5vw,1.05rem)", marginBottom:7 }}>{r.title}</h3>
                <p style={{ color:"#666", fontSize:"clamp(0.82rem,2.2vw,0.88rem)", lineHeight:1.6 }}>{r.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── BENEFITS ─────────── */}
      <section className="sec" style={{ background:"linear-gradient(145deg,#0b1629 0%,#1a2744 60%,#243a6e 100%)", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, opacity:0.04, pointerEvents:"none",
          backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 38px,rgba(201,162,103,0.8) 38px,rgba(201,162,103,0.8) 39px),repeating-linear-gradient(90deg,transparent,transparent 38px,rgba(201,162,103,0.8) 38px,rgba(201,162,103,0.8) 39px)"
        }} />
        <div style={{ maxWidth:1100, margin:"0 auto", position:"relative", zIndex:1 }}>
          <AnimSection><SectionHeading label="Why Join Us" title="Why Candidates Prefer Innerwork" subtitle="We don't just offer a job — we offer stability, dignity, and growth." light /></AnimSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-50px" }} className="grid-snap g4">
            {benefits.map((b,i)=>(
              <motion.div key={i} variants={cardVariant} className="lift shimmer-card"
                style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(201,162,103,0.22)", borderRadius:12, padding:"clamp(18px,3vw,26px) clamp(14px,2.5vw,20px)", textAlign:"center", backdropFilter:"blur(8px)" }}>
                <div style={{ fontSize:"clamp(1.8rem,4vw,2.2rem)", marginBottom:10 }}>{b.icon}</div>
                <h3 style={{ color:"#C9A267", fontWeight:700, fontSize:"clamp(0.88rem,2.3vw,0.95rem)", marginBottom:7, fontFamily:"'Playfair Display',serif" }}>{b.title}</h3>
                <p style={{ color:"rgba(255,255,255,0.68)", fontSize:"clamp(0.78rem,2vw,0.83rem)", lineHeight:1.6 }}>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.3 }}
            style={{ marginTop:"clamp(24px,4vw,40px)", background:"rgba(201,162,103,0.1)", border:"2px solid #C9A267", borderRadius:12, padding:"clamp(14px,3vw,20px) clamp(16px,4vw,32px)", textAlign:"center" }}>
            <p style={{ color:"#C9A267", fontWeight:700, fontSize:"clamp(0.85rem,2.5vw,1.1rem)" }}>
              🚫 No Hidden Recruitment Charges &nbsp;•&nbsp; Zero Registration Fees &nbsp;•&nbsp; 100% Free for Candidates
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── ELIGIBILITY ─────────── */}
      <section className="sec" style={{ background:"#f9f8f6" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <AnimSection><SectionHeading label="Eligibility" title="Who Can Apply?" subtitle="We welcome candidates from all backgrounds. Freshers are encouraged!" /></AnimSection>
          <div className="grid-snap elig-grid" style={{ gap:"clamp(24px,4vw,40px)", alignItems:"start" }}>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              {[
                { icon:"👤", label:"Gender / Age", detail:"Males & Females, 18–50 years preferred" },
                { icon:"💪", label:"Fitness", detail:"Physically fit, alert, and active" },
                { icon:"🗣️", label:"Communication", detail:"Basic skills in Hindi or Bengali preferred" },
                { icon:"📚", label:"Education", detail:"Minimum Class 8 pass required" },
                { icon:"📋", label:"Experience", detail:"Freshers very welcome; prior experience is a plus" },
              ].map((e,i)=>(
                <motion.div key={i} variants={cardVariant}
                  style={{ display:"flex", gap:14, alignItems:"flex-start", marginBottom:16, padding:"clamp(14px,2.5vw,18px) clamp(14px,2.5vw,20px)", background:"#fff", borderRadius:10, border:"1px solid #e8e4da" }}>
                  <span style={{ fontSize:"clamp(1.3rem,3vw,1.6rem)", flexShrink:0 }}>{e.icon}</span>
                  <div>
                    <p style={{ fontWeight:700, color:"#1a2744", marginBottom:2, fontSize:"clamp(0.88rem,2.3vw,0.95rem)" }}>{e.label}</p>
                    <p style={{ color:"#666", fontSize:"clamp(0.8rem,2vw,0.87rem)" }}>{e.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
              <div style={{ background:"#fff", borderRadius:16, padding:"clamp(20px,4vw,32px)", border:"1px solid #e8e4da", boxShadow:"0 8px 35px rgba(26,39,68,0.08)", marginBottom:20 }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", color:"#1a2744", fontSize:"clamp(1rem,3vw,1.3rem)", fontWeight:700, marginBottom:16 }}>📄 Documents Required</h3>
                {["Aadhaar Card (Mandatory)","PAN Card","2 Passport-size Photographs","Educational Certificates (Min. Class 8)","Experience / Training Certificates (If Any)"].map((d,i)=>(
                  <div key={i} style={{ display:"flex", gap:9, alignItems:"center", marginBottom:11 }}>
                    <span style={{ width:20, height:20, borderRadius:"50%", background:"linear-gradient(135deg,#C9A267,#a07d45)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.6rem", color:"#fff", fontWeight:700, flexShrink:0 }}>✓</span>
                    <span style={{ color:"#444", fontSize:"clamp(0.82rem,2.2vw,0.9rem)" }}>{d}</span>
                  </div>
                ))}
                <div style={{ marginTop:20, padding:"12px 16px", background:"rgba(201,162,103,0.09)", border:"1px solid #C9A267", borderRadius:8 }}>
                  <p style={{ color:"#a07d45", fontSize:"clamp(0.78rem,2vw,0.85rem)", fontWeight:500, lineHeight:1.6 }}>⚠️ Background verification will be conducted. Selection is based on interview and deployment needs.</p>
                </div>
              </div>
              <div style={{ background:"linear-gradient(135deg,#1a2744,#243a6e)", borderRadius:16, padding:"clamp(20px,4vw,30px)" }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", color:"#C9A267", fontSize:"clamp(0.95rem,2.5vw,1.1rem)", fontWeight:700, marginBottom:10 }}>👩 Female Candidates Encouraged!</h3>
                <p style={{ color:"rgba(255,255,255,0.8)", fontSize:"clamp(0.82rem,2.2vw,0.9rem)", lineHeight:1.7 }}>
                  We actively hire female security guards for hospitals, schools, malls, and residential complexes. Your safety and dignity at the workplace is our top priority.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────── TRUST ELEMENTS ─────────── */}
      <section className="sec" style={{ background:"#fff" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <AnimSection>
            <SectionHeading label="Real People. Real Work." title="Our Guards in Action" subtitle="See our deployed security personnel, uniformed teams, and professional work environments across Kolkata." />
          </AnimSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true, margin:"-50px" }}
            className="grid-snap trust-grid" style={{ marginBottom:"clamp(24px,4vw,36px)" }}>
            {trustPhotos.map((p,i)=>(
              <motion.div key={i} variants={cardVariant} className="trust-wrap lift"
                style={{ aspectRatio:"4/5", position:"relative", borderRadius:14 }}>
                <img src={p.src} alt={p.label} className="trust-img" loading="lazy"
                  onError={e => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "linear-gradient(135deg,#1a2744,#243a6e)";
                    const ph = document.createElement("div");
                    ph.innerHTML = `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:280px;gap:12px;padding:24px"><span style="font-size:3rem">🛡️</span><p style="color:#C9A267;font-weight:700;font-family:serif;font-size:1.1rem;text-align:center">${p.label}</p></div>`;
                    e.target.parentElement.appendChild(ph.firstChild);
                  }}
                />
                <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(0deg,rgba(10,18,35,0.88) 0%,transparent 100%)", borderRadius:"0 0 14px 14px", padding:"clamp(14px,3vw,22px) clamp(14px,3vw,20px)" }}>
                  <span style={{ display:"inline-block", background:"#C9A267", color:"#0b1629", fontSize:"clamp(0.62rem,1.8vw,0.7rem)", fontWeight:800, letterSpacing:"0.12em", textTransform:"uppercase", borderRadius:50, padding:"3px 10px", marginBottom:6 }}>{p.tag}</span>
                  <p style={{ color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"clamp(0.9rem,2.5vw,1.05rem)" }}>{p.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ background:"linear-gradient(135deg,#1a2744,#243a6e)", borderRadius:16, padding:"clamp(20px,4vw,32px) clamp(20px,4vw,36px)", display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(140px, 1fr))", gap:"clamp(16px,3vw,24px)", textAlign:"center" }}>
            {[{ icon:"🏢", num:"50+", lbl:"Client Sites" },{ icon:"👮", num:"500+", lbl:"Guards Deployed" },{ icon:"🗓️", num:"10+", lbl:"Years Active" },{ icon:"👩‍✈️", num:"100+", lbl:"Female Guards" }].map((s,i)=>(
              <div key={i}>
                <div style={{ fontSize:"clamp(1.5rem,3.5vw,2rem)", marginBottom:6 }}>{s.icon}</div>
                <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"clamp(1.4rem,4vw,2rem)", fontWeight:900, color:"#C9A267", lineHeight:1 }}>{s.num}</p>
                <p style={{ color:"rgba(255,255,255,0.65)", fontSize:"clamp(0.72rem,2vw,0.8rem)", marginTop:4 }}>{s.lbl}</p>
              </div>
            ))}
          </motion.div>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6, delay:0.15 }}
            style={{ marginTop:"clamp(16px,3vw,24px)", background:"rgba(201,162,103,0.08)", border:"1.5px solid #C9A267", borderRadius:14, padding:"clamp(18px,3vw,26px) clamp(18px,3vw,28px)", display:"flex", alignItems:"center", gap:"clamp(14px,3vw,20px)", flexWrap:"wrap" }}>
            <span style={{ fontSize:"clamp(2rem,5vw,3rem)", flexShrink:0 }}>👩‍✈️</span>
            <div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", color:"#1a2744", fontSize:"clamp(1rem,3vw,1.2rem)", fontWeight:700, marginBottom:6 }}>Women Guards — Proudly Deployed Across Kolkata</h3>
              <p style={{ color:"#555", fontSize:"clamp(0.82rem,2.2vw,0.9rem)", lineHeight:1.65 }}>Innerwork Advisors LLP actively deploys female security guards at hospitals, schools, shopping malls, government offices, and residential complexes. We ensure a safe and respectful work environment for every team member.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────── APPLICATION FORM ─────────── */}
      <section id="apply" className="sec" style={{ background:"#f9f8f6" }}>
        <div style={{ maxWidth:820, margin:"0 auto" }}>
          <AnimSection><SectionHeading label="Apply Now" title="Start Your Application" subtitle="Fill in just a few details. We'll contact you within 3–5 working days." /></AnimSection>
          <motion.div initial={{ opacity:0, y:18 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            style={{ background:"linear-gradient(135deg,#25D366,#128C7E)", borderRadius:12, padding:"clamp(16px,3vw,20px) clamp(16px,4vw,28px)", marginBottom:"clamp(16px,3vw,28px)", display:"flex", alignItems:"center", justifyContent:"space-between", gap:14, flexWrap:"wrap" }}>
            <div>
              <p style={{ color:"#fff", fontWeight:700, fontSize:"clamp(0.88rem,2.5vw,1rem)", marginBottom:2 }}>💬 Apply via WhatsApp — Fastest Response!</p>
              <p style={{ color:"rgba(255,255,255,0.85)", fontSize:"clamp(0.78rem,2vw,0.85rem)" }}>Send Name + Age + Area to get a call back today</p>
            </div>
            <a href="https://wa.me/919073672051?text=Hi%2C%20I%20want%20to%20apply%20for%20Security%20Guard%20at%20Innerwork%20Advisors%20LLP." target="_blank" rel="noreferrer"
              style={{ background:"#fff", color:"#25D366", padding:"10px 22px", borderRadius:8, fontWeight:700, fontSize:"clamp(0.82rem,2.2vw,0.9rem)", textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6, whiteSpace:"nowrap" }}>
              💬 WhatsApp Now
            </a>
          </motion.div>
          <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}
            style={{ background:"#fff", border:"1px solid #e8e4da", borderRadius:16, padding:"clamp(22px,5vw,40px) clamp(18px,5vw,36px)", boxShadow:"0 8px 38px rgba(26,39,68,0.08)" }}>
            <div className="form-grid grid-snap g2" style={{ marginBottom:18 }}>
              {[
                { name:"name", label:"Full Name *", placeholder:"Your full name", required:true },
                { name:"phone", label:"Mobile Number *", placeholder:"+91 XXXXX XXXXX", required:true },
                { name:"age", label:"Age *", placeholder:"e.g. 26", required:true },
                { name:"location", label:"Your Area / Location *", placeholder:"e.g. Salt Lake, Kolkata", required:true },
              ].map(f=>(
                <div key={f.name}>
                  <label className="flabel">{f.label}</label>
                  <input name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required={f.required} className="field" />
                </div>
              ))}
              <div>
                <label className="flabel">Prior Experience</label>
                <select name="experience" value={form.experience} onChange={handleChange} className="field">
                  <option value="">Select experience level</option>
                  <option value="Fresher">Fresher (No experience)</option>
                  <option value="Less than 1 year">Less than 1 year</option>
                  <option value="1–3 years">1–3 years</option>
                  <option value="3+ years">3+ years</option>
                </select>
              </div>
              <div>
                <label className="flabel">Preferred Duty Area</label>
                <input name="preferredArea" value={form.preferredArea} onChange={handleChange} placeholder="e.g. Newtown, Rajarhat..." className="field" />
              </div>
            </div>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <button onClick={handleEmail} className="btn-gold" style={{ flex:1, minWidth:"clamp(140px,40vw,180px)" }}>📧 Submit via Email</button>
              <button onClick={handleWhatsApp} className="btn-navy" style={{ flex:1, minWidth:"clamp(140px,40vw,180px)" }}>💬 Submit via WhatsApp</button>
            </div>
            <p style={{ color:"#999", fontSize:"clamp(0.72rem,2vw,0.78rem)", marginTop:14, textAlign:"center", lineHeight:1.5 }}>
              By submitting, you agree Innerwork Advisors LLP may contact you. Background verification may be conducted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─────────── FAQ ─────────── */}
      <section className="sec" style={{ background:"#fff" }}>
        <div style={{ maxWidth:780, margin:"0 auto" }}>
          <AnimSection><SectionHeading label="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before applying. Can't find an answer? Call our helpline." /></AnimSection>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            style={{ background:"#f9f8f6", borderRadius:16, overflow:"hidden", boxShadow:"0 4px 28px rgba(26,39,68,0.07)", border:"1px solid #e8e4da" }}>
            {faqs.map((faq,i)=>(
              <div key={i} className="faq-row">
                <button className="faq-btn" onClick={()=>setOpenFaq(openFaq===i?null:i)} style={{ padding:"clamp(14px,2.5vw,17px) clamp(14px,3vw,20px)" }}>
                  <span style={{ fontWeight:600, color:"#1a2744", fontSize:"clamp(0.85rem,2.3vw,0.95rem)", lineHeight:1.4 }}>{faq.q}</span>
                  <motion.span animate={{ rotate: openFaq===i ? 45 : 0 }} transition={{ duration:0.2 }}
                    style={{ width:26, height:26, borderRadius:"50%", background: openFaq===i ? "#1a2744" : "rgba(201,162,103,0.15)", display:"flex", alignItems:"center", justifyContent:"center", color:"#C9A267", flexShrink:0, fontSize:"1.1rem", fontWeight:700 }}>
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openFaq===i && (
                    <motion.div initial={{ height:0, opacity:0 }} animate={{ height:"auto", opacity:1 }} exit={{ height:0, opacity:0 }} transition={{ duration:0.3, ease:[0.22,1,0.36,1] }} style={{ overflow:"hidden" }}>
                      <p style={{ color:"#555", fontSize:"clamp(0.82rem,2.2vw,0.9rem)", lineHeight:1.7, padding:"0 clamp(14px,3vw,20px) clamp(14px,2.5vw,18px) clamp(14px,3vw,20px)" }}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── HELPLINE ─────────── */}
      <section className="sec" style={{ background:"linear-gradient(135deg,#0b1629,#1a2744)" }}>
        <div style={{ maxWidth:880, margin:"0 auto" }}>
          <AnimSection><SectionHeading label="Contact Us" title="Recruitment Helpline" light subtitle="Speak directly with our team Monday–Saturday, 9 AM – 7 PM" /></AnimSection>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once:true }} className="grid-snap contact-grid">
            {[
              { icon:"📞", label:"Call Us", value:"+91 90736 72051", sub:"Mon–Sat, 9AM–7PM", href:"tel:+919073672051" },
              { icon:"💬", label:"WhatsApp", value:"Send Name + Age + Area", sub:"Fastest response", href:"https://wa.me/919073672051" },
              { icon:"📧", label:"Email", value:"info@innerworkadvisorsllp.com", sub:"For detailed queries", href:"mailto:info@innerworkadvisorsllp.com" },
            ].map((c,i)=>(
              <motion.a key={i} href={c.href} target={c.href.startsWith("http")?"_blank":undefined} rel="noreferrer"
                variants={cardVariant} className="lift"
                style={{ background:"rgba(255,255,255,0.06)", border:"1px solid rgba(201,162,103,0.22)", borderRadius:12, padding:"clamp(20px,3vw,28px) clamp(16px,3vw,24px)", textAlign:"center", textDecoration:"none", display:"block" }}>
                <div style={{ fontSize:"clamp(2rem,4vw,2.5rem)", marginBottom:10 }}>{c.icon}</div>
                <p style={{ color:"#C9A267", fontWeight:700, fontSize:"clamp(0.65rem,1.8vw,0.8rem)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:5 }}>{c.label}</p>
                <p style={{ color:"#fff", fontWeight:700, fontSize:"clamp(0.82rem,2.2vw,0.95rem)", marginBottom:4, wordBreak:"break-all" }}>{c.value}</p>
                <p style={{ color:"rgba(255,255,255,0.48)", fontSize:"clamp(0.72rem,1.8vw,0.78rem)" }}>{c.sub}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────── COMPLIANCE FOOTER ─────────── */}
      <section style={{ background:"#0a1120", padding:"clamp(20px,4vw,28px) clamp(16px,5vw,40px)", borderTop:"1px solid rgba(201,162,103,0.18)" }}>
        <div style={{ maxWidth:860, margin:"0 auto", textAlign:"center" }}>
          <p style={{ color:"rgba(255,255,255,0.38)", fontSize:"clamp(0.7rem,1.8vw,0.78rem)", lineHeight:1.8 }}>
            Background verification may be conducted. Selection depends on interview and deployment requirements.
            Innerwork Advisors LLP follows all applicable labor compliance norms including Minimum Wages Act and PSARA regulations.
            ESI & EPFO benefits applicable as per government norms.
          </p>
          <p style={{ color:"rgba(201,162,103,0.45)", fontSize:"clamp(0.65rem,1.6vw,0.72rem)", marginTop:8 }}>
            © {new Date().getFullYear()} Innerwork Advisors LLP. All Rights Reserved. PSARA Licensed.
          </p>
        </div>
      </section>
    </div>
  );
}
