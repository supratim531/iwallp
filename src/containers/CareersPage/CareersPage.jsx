import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Section, Container } from "../../components/shared";

const responsibilities = [
  { label: "Premise Security", detail: "Maintain vigilant security at assigned locations." },
  { label: "Access Control", detail: "Monitor entry/exit of visitors and staff." },
  { label: "Patrolling", detail: "Conduct regular rounds and report incidents." },
  { label: "Safety Protocols", detail: "Ensure all safety and emergency protocols are followed." },
  { label: "Coordination", detail: "Work with supervisors and emergency services when required." },
];

const eligibility = [
  { label: "Gender / Age", detail: "Males & Females (18–50 years preferred)." },
  { label: "Fitness", detail: "Physically fit and alert." },
  { label: "Communication", detail: "Basic skills in Hindi or Bengali preferred." },
  { label: "Experience", detail: "Prior experience is a plus, but freshers are very welcome." },
];

const benefits = [
  { icon: "fa-certificate", label: "Licensed & Registered", detail: "Work with a fully licensed and certified professional company." },
  { icon: "fa-shield-halved", label: "Secure Job", detail: "We prioritize long-term placement and career stability." },
  { icon: "fa-handshake", label: "Direct Employment", detail: "Direct hiring with no middlemen involved." },
  { icon: "fa-indian-rupee-sign", label: "Financial Security", detail: "Timely salary payments with ESI & EPFO benefits." },
  { icon: "fa-graduation-cap", label: "Support", detail: "Professional training and uniforms provided." },
  { icon: "fa-arrow-trend-up", label: "Career Path", detail: "Clear opportunities for promotion to Supervisor or Officer roles." },
  { icon: "fa-location-dot", label: "Convenience", detail: "Deployment near your location whenever possible." },
];

const faqs = [
  {
    q: "What are the shift timings for Security Guards?",
    a: "We typically operate in 8-hour or 12-hour shifts — Day (6 AM–6 PM) and Night (6 PM–6 AM). Exact timings depend on the client site and deployment location.",
  },
  {
    q: "What documents are required to apply?",
    a: "You will need: Aadhaar Card, PAN Card, 2 passport-size photographs, educational certificates (minimum Class 8 pass), and any prior experience or training certificates if available.",
  },
  {
    q: "Is prior experience mandatory?",
    a: "No. Freshers are welcome. We provide in-house training before deployment to ensure every guard meets our professional standards.",
  },
  {
    q: "Will I receive a uniform and equipment?",
    a: "Yes. All deployed security personnel receive a full uniform, ID card, and necessary equipment as part of their joining package.",
  },
  {
    q: "Are ESI and EPFO benefits provided?",
    a: "Yes. All full-time employees are enrolled under ESI (Employee State Insurance) and EPFO (Employees' Provident Fund Organisation) as per government regulations.",
  },
  {
    q: "How long does the hiring process take?",
    a: "After submitting your application, our recruitment team typically contacts you within 3–5 working days for a verification and interview. Deployment can happen within 1–2 weeks of selection.",
  },
  {
    q: "Can women apply for Security Guard positions?",
    a: "Absolutely. We actively hire female security guards for deployments at hospitals, schools, malls, and residential complexes.",
  },
  {
    q: "Is there a physical fitness test?",
    a: "Yes, a basic physical fitness assessment is conducted during the selection process to ensure candidates meet the requirements of the role.",
  },
  {
    q: "What is the salary range?",
    a: "Salaries are competitive and comply with West Bengal government minimum wage norms. Additional allowances are provided based on site and shift.",
  },
  {
    q: "Can I be deployed close to my home?",
    a: "We make every effort to deploy guards near their residence. While it cannot always be guaranteed, location preference is always considered during placement.",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  age: "",
  gender: "",
  location: "",
  experience: "",
  message: "",
};

const CareersPage = () => {
  const [form, setForm] = useState(initialForm);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Security Guard Application – ${form.name}`;
    const body = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AAge: ${form.age}%0AGender: ${form.gender}%0ALocation: ${form.location}%0AExperience: ${form.experience}%0AMessage: ${form.message}`;
    window.open(`mailto:info@innerworkadvisorsllp.com?subject=${subject}&body=${body}`);
  };

  return (
    <section>
      <Helmet>
        <title>Security Guard Jobs in Kolkata – Innerwork Advisors LLP | Apply Now</title>
        <meta
          name="description"
          content="Join Innerwork Advisors LLP as a Security Guard in Kolkata. Direct employment, ESI & EPFO benefits, timely salary, and career growth. Freshers welcome. Apply now."
        />
        <link rel="canonical" href="https://innerworkadvisorsllp.com/careers" />
      </Helmet>

      {/* Hero */}
      <div
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[45vh] md:!bg-center lg:h-[60vh]"
        style={{
          backgroundImage: `url(https://innerworkadvisorsllp.com/images/team.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center">
          <Link
            to={"/"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Home
          </Link>{" "}
          {"/"} <span>Careers</span>
        </div>
      </div>

      <Container>

        {/* ── SECTION 1: Job Overview & Benefits ── */}

        <Section
          data-aos="fade-up"
          title={"Join Us as a Security Guard"}
          label={"CAREERS AT INNERWORK"}
          description={
            "At Innerwork Advisors LLP, we specialize in delivering reliable, disciplined, and technology-enabled security solutions across Kolkata and surrounding regions. We are committed to professionalism, safety, and career growth for our personnel. We are currently hiring Security Guards to protect offices, residential complexes, commercial establishments, and event locations."
          }
        />

        {/* Key Responsibilities */}
        <Section data-aos="fade-up" title={"Key Responsibilities"} label={"WHAT YOU'LL DO"}>
          <ul className="list-inside [&>li>strong]:text-primary-light [&>li]:list-inside [&>li]:list-disc">
            {responsibilities.map((r, i) => (
              <li key={i}>
                <strong>{r.label}:</strong> {r.detail}
              </li>
            ))}
          </ul>
        </Section>

        {/* Who Can Apply */}
        <Section data-aos="fade-up" title={"Who Can Apply"} label={"ELIGIBILITY"}>
          <ul className="list-inside [&>li>strong]:text-primary-light [&>li]:list-inside [&>li]:list-disc">
            {eligibility.map((e, i) => (
              <li key={i}>
                <strong>{e.label}:</strong> {e.detail}
              </li>
            ))}
          </ul>
        </Section>

        {/* Benefits */}
        <Section
          data-aos="fade-up"
          title={"Why Work With Us?"}
          label={"BENEFITS"}
          description={"We don't just offer a job — we offer stability and growth."}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <i className={`fa-solid ${b.icon} mt-1 text-xl text-[#C9A267]`}></i>
                <div>
                  <p className="font-semibold text-primary-light">{b.label}</p>
                  <p className="text-sm text-gray-600">{b.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── SECTION 2: Application Form ── */}

        <Section
          data-aos="fade-up"
          title={"Apply Now"}
          label={"APPLICATION FORM"}
          description={"Fill in the form below and we'll get back to you within 3–5 working days."}
        >
          <form
            onSubmit={handleSubmit}
            className="mx-auto grid w-full max-w-3xl gap-4 sm:grid-cols-2"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Full Name *</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Phone Number *</label>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Age *</label>
              <input
                required
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="e.g. 25"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Gender *</label>
              <select
                required
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Preferred Location *</label>
              <input
                required
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Salt Lake, Kolkata"
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              />
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-sm font-medium text-gray-700">Prior Experience</label>
              <select
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              >
                <option value="">Select experience level</option>
                <option value="Fresher">Fresher (No experience)</option>
                <option value="Less than 1 year">Less than 1 year</option>
                <option value="1–3 years">1–3 years</option>
                <option value="3+ years">3+ years</option>
              </select>
            </div>

            <div className="flex flex-col gap-1 sm:col-span-2">
              <label className="text-sm font-medium text-gray-700">Additional Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Anything else you'd like us to know..."
                className="rounded-md border border-gray-300 px-4 py-2 text-sm outline-none focus:border-primary-light"
              />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full rounded-md border-2 border-transparent bg-primary-light px-6 py-2 text-sm uppercase text-white duration-200 hover:bg-primary-dark sm:w-auto"
              >
                Submit Application
              </button>
            </div>
          </form>
        </Section>

        {/* ── SECTION 3: FAQ & Helpline ── */}

        <Section
          data-aos="fade-up"
          title={"Frequently Asked Questions"}
          label={"FAQ"}
          description={"Everything you need to know before applying. Can't find an answer? Call our helpline."}
        >
          <div className="mx-auto w-full max-w-3xl divide-y divide-gray-200 rounded-lg border border-gray-200">
            {faqs.map((faq, i) => (
              <div key={i} className="cursor-pointer px-5 py-4" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-primary-light">{faq.q}</p>
                  <i className={`fa-solid ${openFaq === i ? "fa-chevron-up" : "fa-chevron-down"} text-sm text-[#C9A267]`}></i>
                </div>
                {openFaq === i && (
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Helpline */}
        <Section
          data-aos="fade-up"
          title={"Recruitment Helpline"}
          label={"CONTACT US"}
          description={"Speak directly with our recruitment team for any queries or to schedule a walk-in interview."}
        >
          <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 rounded-lg border border-gray-200 p-6 text-center shadow-sm sm:flex-row sm:text-left">
            <i className="fa-solid fa-phone-volume text-4xl text-[#C9A267]"></i>
            <div>
              <p className="text-sm text-gray-500">Call or WhatsApp us Monday–Saturday, 9 AM – 7 PM</p>
              <a
                href="tel:+919073672051"
                className="text-xl font-semibold text-primary-light hover:text-primary-dark"
              >
                +91 90736 72051
              </a>
              <p className="mt-1 text-sm text-gray-500">
                Or email us at{" "}
                <a
                  href="mailto:info@innerworkadvisorsllp.com?subject=Recruitment Enquiry"
                  className="text-primary-light hover:underline"
                >
                  info@innerworkadvisorsllp.com
                </a>
              </p>
            </div>
          </div>
        </Section>

      </Container>
    </section>
  );
};

export default CareersPage;
