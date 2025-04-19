import { useState, useRef, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { servicesData } from "../../assets";

const sections = ["Investigation", "Security"];

export default function Services() {
  const [activeSection, setActiveSection] = useState("Investigation");
  const [selectedService, setSelectedService] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, [activeSection]);

  return (
    <div className="p-6">
      {/* Section Tabs */}
      <div className="mb-8 flex justify-center space-x-4">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`rounded-full px-6 py-2 font-semibold text-white transition ${
              activeSection === section ? "bg-black" : "bg-gray-500"
            }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Services Cards with Background Images */}
      <div
        ref={ref}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {servicesData[activeSection].map((service, index) => (
          <motion.div
            key={`${animationKey}-${index}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative cursor-pointer overflow-hidden rounded-lg bg-[#415781] transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#C9A267]/30"
          >
            {/* Background Image */}
            <div
              className="relative h-64 w-full bg-cover bg-center"
              style={{
                backgroundImage: service.image
                  ? `url(${service.image})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay (Text + Button Centered) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-2 rounded-lg bg-[#C9A267] px-4 py-2 font-bold text-white"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Learn More */}
      {selectedService && (
        <Dialog
          open={!!selectedService}
          onClose={() => setSelectedService(null)}
          className="fixed inset-0 flex items-center justify-center bg-opacity-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90vh] w-[600px] max-w-2xl overflow-y-auto rounded-lg bg-white p-6"
          >
            <h2 className="text-2xl font-bold">{selectedService.title}</h2>

            {/* Dynamic Content Based on Service Title */}
            <p className="mt-2 text-gray-600">
              {selectedService.title === "Security Services" && (
                <>
                  ses, and organizations. With extensive expertise, we ensure
                  that your safety and protection remain uncompromised.
                  <br />
                  <br />
                  <strong>Personal Security Services</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Executive Protection:</strong> Security for VIPs,
                      corporate executives, and high-profile individuals.
                    </li>
                    <li>
                      <strong>Family Protection Services:</strong> Ensuring
                      safety for families with discreet security measures.
                    </li>
                    <li>
                      <strong>
                        Our Premier Security Services: Safeguarding Lives and
                        Assets with Precision and Care
                      </strong>
                      <br />
                      <br />
                      At Interwork Advisors LLP, our skilled security
                      professionals specialize in providing top-notch security
                      services for individuals, busines
                      <strong>Event Security:</strong> Planning and executing
                      security for events of any scale.
                    </li>
                    <li>
                      <strong>Travel Security:</strong> Comprehensive protection
                      during travel.
                    </li>
                  </ul>
                  <br />
                  <strong>Corporate Security Services</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Access Control and Surveillance:</strong> Modern
                      monitoring systems.
                    </li>
                    <li>
                      <strong>Facility Security:</strong> Full-time security
                      personnel for offices and warehouses.
                    </li>
                    <li>
                      <strong>Employee and Asset Protection:</strong> Tailored
                      safety solutions.
                    </li>
                    <li>
                      <strong>Risk Assessment and Consulting:</strong>{" "}
                      Evaluating threats and security strategies.
                    </li>
                  </ul>
                  <br />
                  <strong>Specialized Security Solutions</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>24/7 Armed and Unarmed Guards</strong> for
                      residences and businesses.
                    </li>
                    <li>
                      <strong>Crisis Management and Emergency Response</strong>{" "}
                      for natural disasters or incidents.
                    </li>
                    <li>
                      <strong>Cybersecurity Integration</strong> to complement
                      physical security.
                    </li>
                  </ul>
                  <br />
                  <strong>Why Choose Us?</strong>
                  <ul className="list-disc pl-5">
                    <li>
                      <strong>Highly Trained Experts:</strong> Skilled in
                      surveillance, combat training, and risk analysis.
                    </li>
                    <li>
                      <strong>Proactive and Rapid Response:</strong> Identifying
                      threats before escalation.
                    </li>
                    <li>
                      <strong>State-of-the-Art Technology:</strong> Using modern
                      tools for security enforcement.
                    </li>
                  </ul>
                  <br />
                  Reach out to us for a consultation and ensure your safety with
                  our expert security solutions.
                </>
              )}
            </p>
            <p>
              {selectedService.title === "Information Technology/Cyber Law" && (
                <>
                  IT law or cyber law, also known as information technology law,
                  is a part of the legal system that deals with how digital
                  information is exchanged, online businesses operate, software
                  is used, and data security is managed. It’s closely connected
                  to legal informatics and involves electronic devices like
                  computers, software, and hardware. This area of law covers
                  topics such as internet access, online speech, freedom of
                  expression, and privacy protection online. Our IT team excels
                  in offering comprehensive guidance on Information Technology
                  and Cyber Laws matters. Combining legal acumen with technical
                  expertise, we provide solutions to safeguard against various
                  threats such as image theft, confidentiality breaches,
                  copyright infringement, domain disputes, software piracy,
                  cyber-crimes, data protection, and information security.
                  Moreover, we assist clients in understanding privacy laws in
                  India and strategies for ensuring data confidentiality across
                  borders, including compliance with regulations like the
                  General Data Protection Regulation (GDPR) and E-commerce
                  guidelines. Our team is dedicated to addressing legal and
                  regulatory complexities while providing effective protection
                  for digital assets and sensitive information.
                </>
              )}
            </p>
            <p>
              {selectedService.title === "Civil Law" && (
                <>
                  Are you embroiled in a non-criminal legal dispute and require
                  the expertise of seasoned lawyers? Whether your case involves
                  breach of contract, private property rights, negligence,
                  copyright violations, or any other civil matter, Innerwork
                  Advisors LLP offers comprehensive civil case assistance. With
                  years of experience in handling civil cases, we are
                  well-equipped to support our clients across various legal
                  scenarios. Our track record includes successful trials and
                  prosecutions across all legal forums, ranging from Trial
                  Courts and Tribunals to the High Courts and Supreme Court of
                  India. We are committed to providing diligent and effective
                  legal services, ensuring our clients’ interests are
                  safeguarded with utmost professionalism. Reach out to
                  Innerwork Advisors LLP today for expert assistance tailored to
                  your civil legal needs. We are committed to helping you
                  achieve the best possible results.
                </>
              )}
            </p>
            {selectedService.title === "Education Matters" && (
              <>
                <strong>
                  Educational Matters: Legal Support for a Transforming Sector
                </strong>
                <br />
                <br />
                The educational landscape in India is experiencing rapid
                transformation across all tiers of learning, from primary
                education to university-level programs. With a staggering 250
                million school-going population, India boasts the world’s
                largest demographic of young individuals aged 5-24, as
                highlighted in a report by India Brand Equity Foundation. This
                dynamic environment presents abundant opportunities for edtech
                startups, universities, vocational training providers, and other
                educational entities. The surge in technology-driven and online
                education is projected to reach a market value of USD 313
                billion by 2030, as indicated in a report by AspireCircle.
                <br />
                <br />
                In navigating this evolving sector, it is imperative for
                entities to adeptly navigate shifting policies and regulations
                that significantly impact their operations.
                <br />
                <br />
                At Innerwork Advisors LLP, we have been at the forefront of
                advising various stakeholders in the education sector, spanning
                early learning and kindergarten, public and charter schools,
                universities, vocational training institutes, Ed-Tech firms, and
                supplementary education providers. Our expertise encompasses
                structuring investments, regulatory compliance, operational
                strategies, and management frameworks, with a keen focus on the
                intricacies of K-12 not-for-profit establishments.
                <br />
                <br />
                We provide comprehensive legal services, including:
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Litigation Management:</strong> Addressing legal
                    disputes and ensuring compliance with education sector
                    regulations.
                  </li>
                  <li>
                    <strong>Dispute Resolution:</strong> Facilitating legal
                    solutions for conflicts within educational institutions.
                  </li>
                  <li>
                    <strong>Due Diligence:</strong> Conducting thorough
                    assessments for mergers, acquisitions, and institutional
                    partnerships.
                  </li>
                  <li>
                    <strong>Financial & Taxation Advice:</strong> Providing
                    guidance on tax structures and financial compliance.
                  </li>
                  <li>
                    <strong>M&A Transactions:</strong> Assisting in mergers and
                    acquisitions for educational institutions and edtech
                    companies.
                  </li>
                  <li>
                    <strong>Joint Ventures & Legal Audits:</strong> Structuring
                    strategic partnerships and ensuring regulatory adherence.
                  </li>
                </ul>
                <br />
                Moreover, we collaborate extensively with international
                institutions and companies seeking to establish a presence in
                India.
                <br />
                <br />
                Our team of seasoned lawyers possesses an in-depth understanding
                of both national and state-level laws and regulations governing
                educational institutions. We are well-versed in the intricacies
                of educational administration and operations, enabling us to
                provide strategic legal counsel tailored to the unique needs of
                educational entities.
              </>
            )}

            {selectedService.title === "Service Matters" && (
              <>
                <strong>
                  Service Matters: Advocating for Fair Employment Rights
                </strong>
                <br />
                <br />
                Our accomplished service matter lawyers, representing clients in
                the Kolkata High Court and Supreme Court of India, ensure that
                employers, governments, private corporations, and corporate
                entities uphold their contractual obligations with employees.
                They are dedicated to upholding the dignity, fairness, and
                respect owed to employees, diligently implementing India’s
                employment laws, such as the Industrial Disputes Act.
                <br />
                <br />
                Our experienced employment lawyers are steadfast in their
                advocacy for employees’ rights, challenging employers to uphold
                legal entitlements guaranteed by Indian law. In the High Court
                at Kolkata, our service matter lawyers adopt an assertive
                approach to secure employees’ legal rights, addressing not just
                legal aspects but also the emotional, financial, and
                career-related challenges employees face.
                <br />
                <br />
                <strong>Authorities Handling Service Matters</strong>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Labour Court:</strong> Deals with disputes in
                    private sector jobs across various agencies or offices.
                  </li>
                  <li>
                    <strong>High Courts:</strong> Handles matters related to
                    State Government jobs.
                  </li>
                  <li>
                    <strong>Central Administrative Tribunal (CAT):</strong>{" "}
                    Focuses on services within Central agencies.
                  </li>
                </ul>
                <br />
                <strong>Legal Representation in Service Matters</strong>
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Employment Contracts:</strong> Ad Hoc or other forms
                    of employment.
                  </li>
                  <li>
                    <strong>Human Rights Issues:</strong> Addressing violations
                    in service-related cases.
                  </li>
                  <li>
                    <strong>Judicial Review:</strong> Challenging administrative
                    actions legally.
                  </li>
                  <li>
                    <strong>Labour Court Cases:</strong> Representing employees
                    in legal disputes.
                  </li>
                  <li>
                    <strong>Industrial Disputes Act Cases:</strong> Legal
                    support for disputes under labour law.
                  </li>
                  <li>
                    <strong>Pay Scale Disputes:</strong> Resolving wage and
                    promotion-related issues.
                  </li>
                  <li>
                    <strong>Sexual Harassment and Discrimination:</strong>{" "}
                    Lodging complaints and FIRs with the police.
                  </li>
                  <li>
                    <strong>Unlawful Suspension and Dismissal:</strong> Legal
                    remedies for wrongful removal.
                  </li>
                  <li>
                    <strong>Overtime Disputes:</strong> Handling cases such as
                    those in the Kolkata High Court.
                  </li>
                  <li>
                    <strong>Compassionate Appointments:</strong> Assistance with
                    employment-related appointments.
                  </li>
                </ul>
              </>
            )}
            {selectedService.title ===
              "Medical Healthcare and Life science" && (
              <>
                <strong>
                  Medical Healthcare and Life Science: Legal Expertise for a
                  Regulated Industry
                </strong>
                <br />
                <br />
                In a nation as populous as India, the life sciences and
                healthcare sectors offer unparalleled business prospects, with a
                fair share of regulatory and enforcement issues. The
                pharmaceutical, medical devices, and biotech industries are
                actively exploring opportunities for manufacturing, marketing,
                distribution, collaborations, and alliances within India’s
                dynamic market. India’s significant contribution to expediting
                the drug discovery process is noteworthy, although occasional
                discussions arise regarding widespread clinical trial practices.
                <br />
                <br />
                Our esteemed legal experts specializing in healthcare and life
                sciences advise ethics committees and boast memberships in
                esteemed independent and institutional ethics bodies. Our firm
                represents numerous biotech, pharmaceutical, medical device, and
                clinical research entities, providing adept guidance on
                sector-specific critical legal matters, which include:
                <br />
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    <strong>Regulatory Compliance:</strong> Ensuring adherence
                    to promotion, advertising, and marketing regulations for
                    products and devices, including ingredient permissibility,
                    product formulations, and packaging disclosures.
                  </li>
                  <li>
                    <strong>Clinical Trials & Ethics:</strong> Covering legal
                    and regulatory aspects such as informed consent, ethics
                    committee presentations, study completion reporting, and
                    adverse drug reaction reporting.
                  </li>
                  <li>
                    <strong>Agricultural Biotechnology Advisory:</strong>{" "}
                    Managing regulatory approvals for seed import/export,
                    transportation, hybrid and transgenic seed handling,
                    genetically engineered organisms, and field trials.
                  </li>
                  <li>
                    <strong>Financial & Technological Collaborations:</strong>{" "}
                    Structuring financing, tax-efficient strategies,
                    acquisitions, and mergers.
                  </li>
                  <li>
                    <strong>Contract Negotiations:</strong> Drafting agreements
                    for distribution, outsourcing, franchising, marketing,
                    licensing, consulting, and R&D establishment in India.
                  </li>
                  <li>
                    <strong>Data Privacy & Liability:</strong> Handling privacy
                    compliance, confidentiality of records, and product
                    liability dispute resolutions through litigation or
                    mediation.
                  </li>
                  <li>
                    <strong>Regulatory Advocacy:</strong> Submitting
                    recommendations for policy changes to expert committees and
                    government bodies.
                  </li>
                  <li>
                    <strong>Ethical Compliance:</strong> Ensuring adherence to
                    professional ethics in clinical trials, physician conduct,
                    and dissemination of drug and medical device information.
                  </li>
                  <li>
                    <strong>Enforcement Defense:</strong> Managing full-spectrum
                    regulatory compliance and defending against enforcement
                    actions and investigations.
                  </li>
                </ul>
                <br />
                Our legal process is uniquely tailored to navigate the
                intricacies of India’s evolving healthcare and life sciences
                landscape, ensuring our clients receive comprehensive and
                strategic legal counsel.
              </>
            )}
            {selectedService.title === "National Company Law Tribunal" && (
              <>
                <strong>
                  National Company Law Tribunal (NCLT): Corporate Legal
                  Solutions
                </strong>
                <br />
                <br />
                The National Company Law Tribunal (NCLT) was instituted by the
                Central Government under the Companies Act, 2013, aiming for
                expedited case resolution and reducing multiple litigations
                across various forums. Established on June 1, 2016, it serves as
                a quasi-judicial body dedicated to adjudicating issues
                concerning Indian-registered companies.
                <br />
                <br />
                <strong>The NCLT’s scope encompasses:</strong>
                <br />
                <br />
                Consolidation of corporate jurisdiction from:
                <ul className="list-disc pl-5">
                  <li>Company Law Board (CLB)</li>
                  <li>
                    Board of Industrial and Financial Reconstruction (BIFR)
                  </li>
                  <li>
                    Appellate Authority for Industrial and Financial
                    Reconstruction
                  </li>
                  <li>
                    High Courts’ powers related to company winding-up and other
                    provisions
                  </li>
                </ul>
                <br />
                Additionally, the NCLT serves as an adjudicating authority for
                insolvency resolution processes of companies and Limited
                Liability Partnerships under the Insolvency and Bankruptcy Code,
                2016.
                <br />
                <br />
                The National Company Law Appellate Tribunal (NCLAT), established
                under the Companies Act, 2013, acts as an appellate body for
                appeals against NCLT and Insolvency and Bankruptcy Board of
                India orders, with exclusive jurisdiction shared with NCLT.
                <br />
                <br />
                Parties appearing before the NCLT and NCLAT may be represented
                by Chartered Accountants, Company Secretaries, Cost Accountants,
                Legal Practitioners, or other authorized individuals.
                <br />
                <br />
                At Innerwork Advisors LLP, our legal team handles NCLT processes
                meticulously, from document preparation to final submissions and
                follow-ups. Our services include:
                <ul className="list-disc pl-5">
                  <li>Assistance in preparing schemes and petitions.</li>
                  <li>Filing petitions and schemes with NCLT.</li>
                  <li>Appearance and representation before NCLT.</li>
                  <li>
                    Correspondence and liaison with NCLT offices nationwide.
                  </li>
                  <li>Obtaining NCLT approvals.</li>
                  <li>Filing orders with the Registrar of Companies (ROC).</li>
                </ul>
                <br />
                Our expertise ensures compliance, efficiency, and strategic
                support in navigating NCLT proceedings.
              </>
            )}
            {selectedService.title === "Criminal Law" && (
              <>
                <strong>
                  Criminal Law: Legal Assistance & Case Resolution
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP is a reputable private law firm based in
                Kolkata, offering a comprehensive range of legal services for
                both personal and corporate clients. Leveraging our extensive
                experience in legal services, we provide expert legal case
                support to address a wide spectrum of legal matters.
                <br />
                <br />
                The expertise of Innerwork’s specialists is bolstered by years
                of collaboration with legal professionals and law enforcement
                officers, contributing to the resolution of numerous cases. We
                take pride in our track record of successfully closing cases and
                remaining dedicated to fostering a safer and more secure
                environment.
                <br />
                <br />
                If you require assistance in resolving criminal cases, we invite
                you to reach out to us. Our team is ready to provide the support
                you need, utilizing advanced technology and resources to achieve
                positive outcomes. With Innerwork Advisors LLP at your side, you
                can expect nothing but the highest standards of legal case
                assistance.
              </>
            )}
            {selectedService.title === "Banking & Finance" && (
              <>
                <strong>Banking & Finance: Legal Advisory & Compliance</strong>
                <br />
                <br />
                The Indian financial sector is a pivotal force in driving
                economic growth, primarily anchored in banking, with commercial
                banks holding over 64% of total financial assets. As such,
                fostering a robust banking framework with resilient balance
                sheets to mitigate systemic risks is a top priority for
                regulatory bodies.
                <br />
                <br />
                Our banking and finance services team acknowledges this sector’s
                critical role and excels in addressing legal challenges arising
                from borrower-lender dynamics. Our experts specialize in
                identifying financial vulnerabilities, geopolitical risks, and
                policy uncertainties, offering tailored solutions to our
                clients.
                <br />
                <br />
                We have served a diverse clientele, including commercial banks,
                insurance firms, non-banking financial companies, cooperatives,
                pension funds, mutual funds, and smaller financial entities. Our
                capabilities extend to handling clients in emerging sectors like
                Payment Banks, FinTech, and BigTech, ensuring comprehensive
                support across the financial landscape.
                <br />
                <br />
                <strong>The services we render include:</strong>
                <ul>
                  <li>
                    Assistance with structuring and handling of legal compliance
                    in joint ventures and transactions between financial
                    institutions.
                  </li>
                  <li>
                    Litigation before the Debt Recovery Tribunals (DRT) and Debt
                    Recovery Appellate Tribunal (DRAT).
                  </li>
                  <li>
                    Advisory on legal and regulatory implications of
                    transactions.
                  </li>
                  <li>
                    Drafting and vetting of mortgage deeds, loan agreements, and
                    various other documents.
                  </li>
                  <li>
                    Representing lenders and borrowers on project finance
                    transactions and corporate finance.
                  </li>
                </ul>
              </>
            )}
            {selectedService.title === "Commercial Law" && (
              <>
                <strong>
                  Commercial Law: Business Legal Support & Advisory
                </strong>
                <br />
                <br />
                Commercial Law is a cornerstone of business operations,
                addressing the daily facets of corporate activities. At
                Innerwork Advisors LLP, our firm prioritizes commercial law,
                offering comprehensive legal services and litigation support to
                clients involved in trade, transactions, and business endeavors.
                As a prominent commercial law firm in Kolkata, we play a crucial
                role in ensuring the smooth functioning of our clients'
                businesses, providing expert advice on commercial transactions
                that are vital to their success.
                <br />
                <br />
                Our team boasts extensive experience and knowledge in commercial
                law, encompassing areas such as consumer law, contract law,
                intellectual property law, international trade, and labor
                employment laws. With this expertise and a wealth of resources,
                Innerwork Advisors LLP serves as a trusted advisor for
                navigating complex commercial transactions.
                <br />
                <br />
                <strong>1. Our Focus in Commercial Litigation Includes:</strong>
                <ul>
                  <li>Contracts of business</li>
                  <li>Sale of goods</li>
                  <li>Banking and insurance</li>
                  <li>Finances</li>
                  <li>Bankruptcy and insolvency</li>
                  <li>Taxation</li>
                  <li>Partnership</li>
                </ul>
                <br />
                <strong>
                  2. Our Specialization in Commercial Laws Includes:
                </strong>
                <ul>
                  <li>
                    Our highly skilled corporate lawyers leverage their industry
                    expertise to seek mutually agreeable resolutions for our
                    clients, even amidst intricate challenges.
                  </li>
                  <li>
                    We have successfully advised clients across diverse
                    industries, including steel, real estate, jute, FMCG, and
                    more, helping them resolve commercial disputes and
                    supporting their ongoing operations.
                  </li>
                </ul>
                <br />
                <strong>3. Commercial Litigation Encompasses:</strong>
                <ul>
                  <li>
                    Contract Laws – Regulation of contract formation and
                    enforcement, defining essential contract elements and
                    available remedies for breach.
                  </li>
                  <li>
                    Business Regulations – Government rules and regulations
                    governing business organizations, factories, trade unions,
                    labor, and corporate law.
                  </li>
                  <li>
                    Corporate Law – Information management and termination of
                    corporations, covering legal provisions for director
                    elections, capital raising, insider trading prevention,
                    dividend distribution, share redemption, mergers, and
                    acquisitions.
                  </li>
                  <li>
                    Intellectual Property Laws – Patenting inventions and
                    copyrighting creative works.
                  </li>
                  <li>
                    Tax Laws – Government levy of direct and indirect taxes on
                    business transactions, including income, sales, excise,
                    gift, capital gains, and profit distribution taxes.
                  </li>
                </ul>
                <br />
                <strong>
                  4. Our Commercial Dispute Resolution Options Include:
                </strong>
                <ul>
                  <li>
                    Compensation – Monetary remedies, recession of contracts,
                    injunctions, mediation, reconciliation, and arbitration.
                  </li>
                  <li>
                    Filing Lawsuits – Handling complex commercial disputes,
                    conducting extensive case law research to strengthen our
                    clients’ legal positions in lawsuits, both as plaintiffs and
                    defendants.
                  </li>
                </ul>
              </>
            )}
            {selectedService.title === "Consumer Redressal Forums" && (
              <>
                <strong>
                  Consumer Law: Protecting Consumer Rights & Interests
                </strong>
                <br />
                <br />
                Consumer Law is instrumental in safeguarding consumers’ rights
                and interests concerning product defects, service deficiencies,
                and unfair trade practices. At Innerwork Advisors LLP, our
                dedicated team of associates specializes in providing consumer
                law services in Kolkata, ensuring our clients receive
                comprehensive legal support to protect their rights. With
                exceptional expertise and talent in consumer law, we offer
                advisory and representation services across various judicial
                forums, from District Forums to the Hon’ble Supreme Court of
                India.
                <br />
                <br />
                <strong>Our Consumer Law Practice Area Includes:</strong>
                <ul>
                  <li>
                    Regular filing and defense of consumer complaints before
                    National, State, and District Consumer Disputes Redressal
                    Forums
                  </li>
                  <li>Advising clients on complaint submissions</li>
                  <li>Drafting complaint petitions and written objections</li>
                  <li>Preparing evidence affidavits</li>
                  <li>Representation in trial proceedings at court</li>
                </ul>
                <br />
                <strong>
                  We Also Offer a Wide Range of Litigation Services,
                  Representing Clients in Various Courts and Tribunals Such As:
                </strong>
                <ul>
                  <li>The Supreme Court of India</li>
                  <li>High Courts across different states</li>
                  <li>National Company Law Tribunal & Appellate Tribunal</li>
                  <li>Competition Commission of India</li>
                  <li>National Green Tribunal</li>
                  <li>Debt Recovery Tribunals & Appellate Tribunals</li>
                  <li>Consumer Fora</li>
                  <li>SEBI & SEBI Appellate Tribunal</li>
                  <li>Electricity Tribunals</li>
                  <li>Tax Tribunals</li>
                  <li>District & Sessions Courts</li>
                </ul>
                <br />
                Our comprehensive approach and expertise in consumer law ensure
                that our clients receive effective legal representation and
                advocacy across all levels of judicial proceedings.
              </>
            )}
            {selectedService.title === "Arbitration & Litigation" && (
              <>
                <strong>
                  Arbitration & Litigation: Expert Dispute Resolution
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP Dispute Resolution Team is renowned for
                its extensive experience and innovative approach in handling a
                diverse range of disputes for clients across courts and
                tribunals. This includes representing clients in a variety of
                domestic arbitrations.
                <br />
                <br />
                In India, dispute resolution processes often span lengthy
                periods. Leveraging our team’s nuanced understanding of local
                jurisdictions, we prioritize swift and effective hearings to
                ensure our clients receive continuous support throughout the
                proceedings. While we value a company’s determination to pursue
                legal avenues, we adopt a pragmatic approach, balancing
                financial considerations with other interests.
                <br />
                <br />
                Our collaborative approach involves developing a tailored
                dispute resolution strategy in close consultation with clients,
                aiming for swift and cost-effective resolutions. We handle
                drafting in-house, ensuring clarity and alignment with our
                clients’ best interests.
                <br />
                <br />
                Innerwork Advisors LLP clientele comprises multinational
                corporations, Indian corporates, financial institutions, real
                estate developers, government entities, and high-net-worth
                individuals.
                <br />
                <br />
                <strong>Our Litigation Services Include:</strong>
                <br />
                <br />
                <strong>
                  Representation in Various Courts and Tribunals, Including:
                </strong>
                <ul>
                  <li>The Supreme Court of India</li>
                  <li>High Courts of various states</li>
                  <li>National Company Law Tribunal and Appellate Tribunal</li>
                  <li>National Green Tribunal</li>
                  <li>Competition Commission of India</li>
                  <li>Consumer Fora</li>
                  <li>Debt Recovery Tribunals and Appellate Tribunals</li>
                  <li>Electricity Tribunals</li>
                  <li>SEBI & SEBI Appellate Tribunal</li>
                  <li>Tax Tribunals</li>
                </ul>
                <br />
                <strong>
                  Strategic Legal Advice on Drafting and Representation in a
                  Variety of Litigation, Including:
                </strong>
                <ul>
                  <li>Shareholder disputes</li>
                  <li>Contractual disputes</li>
                  <li>Real estate disputes</li>
                  <li>
                    Intellectual Property disputes, including prosecution and
                    enforcement of rights
                  </li>
                  <li>Litigation pertaining to constitutional matters</li>
                  <li>Insolvency and bankruptcy litigation</li>
                  <li>Trust litigation</li>
                  <li>Regulatory litigation</li>
                  <li>Tax disputes</li>
                  <li>Debt recovery</li>
                  <li>Economic offences</li>
                  <li>Criminal matters</li>
                  <li>
                    Representation before various statutory authorities and
                    government officials
                  </li>
                </ul>
                <br />
                <strong>Our Arbitration Services Include:</strong>
                <ul>
                  <li>Formulating strategy</li>
                  <li>
                    Assistance in seeking urgent interim reliefs from courts and
                    tribunals
                  </li>
                  <li>
                    Documentation and representation in domestic and commercial
                    arbitration within India
                  </li>
                  <li>
                    Assistance in mediation and settlement processes between
                    parties
                  </li>
                </ul>
                <br />
                Our legal expertise ensures that our clients receive effective
                and efficient representation across all levels of dispute
                resolution.
              </>
            )}
            {selectedService.title === "Mediation" && (
              <>
                <strong>
                  Mediation: A Collaborative Approach to Dispute Resolution
                </strong>
                <br />
                <br />
                Mediation offers a less formal alternative compared to
                arbitration. In mediation, parties collaborate with a mediator,
                a facilitator, to achieve a mutually acceptable agreement. This
                process, characterized by its non-adversarial nature, allows
                parties to preserve their relationships while seeking
                resolution. Unlike arbitration, mediation outcomes are not
                legally binding on the parties.
                <br />
                <br />
                In India, various laws mandate attempting mediation before
                resorting to court adjudication, exemplified by the Commercial
                Courts Act, 2015. Additionally, a Mediation Bill proposed in
                2021 aims to formalize mediation laws and is presently under
                parliamentary review.
                <br />
                <br />
                Innerwork Advisors LLP's approach to mediation is tailored to
                harmonize case strategies with clients’ commercial objectives,
                prioritizing cost-efficiency and timely issue resolution. By
                leveraging the expertise of skilled lawyers across various
                practice areas, Innerwork Advisors LLP develops customized
                strategies that offer precise, sector-specific guidance.
                <br />
                <br />
                With extensive litigation experience, Innerwork Advisors LLP
                possesses a distinct advantage in comprehending the intricacies
                of each case and identifying critical elements that drive
                successful outcomes. This commitment to strategic alignment,
                combined with a deep understanding of legal complexities,
                underscores Innerwork Advisors LLP's ability to deliver optimal
                results for their clients.
              </>
            )}
            {selectedService.title === "Real Estate" && (
              <>
                <strong>
                  Real Estate: Expert Legal Guidance for Property Matters
                </strong>
                <br />
                <br />
                If you're facing civil cases, reaching out to the top civil
                lawyer in Kolkata is crucial. Real estate, comprising land and
                its improvements like buildings and utility systems, spans three
                main categories: vacant land, residential, and commercial
                properties.
                <br />
                <br />
                Our top civil lawyer in Kolkata specializes in handling property
                disputes, property and land registration, and civil grievances,
                offering invaluable legal expertise and a proven track record of
                securing favorable outcomes. They possess in-depth knowledge of
                civil law nuances in Kolkata, empowering clients to protect
                their rights effectively.
                <br />
                <br />
                In 2022, India witnessed remarkable progress, with a staggering
                68 percent growth in real estate sales, highlighting the
                industry's rapid expansion. Our team of civil lawyers offers
                round-the-clock services in real estate, encompassing vacant
                land, residential, and commercial properties. We excel in
                registration, acquisitions, dispositions, financing,
                construction, sale, leasing, and legal analysis of complex real
                estate transactions.
                <br />
                <br />
                The top civil lawyer in Kolkata embodies key qualities like
                legal acumen, empathy, and strategic thinking, ensuring clients
                receive expert counsel and unwavering support. They adeptly
                handle various civil disputes, including property, family law,
                contracts, and personal injury cases, showcasing versatility
                essential for addressing diverse legal needs.
                <br />
                <br />
                Civil law spans a wide spectrum, from property disputes to
                family law, contract breaches, and personal injury claims. Our
                top civil lawyer in Kolkata boasts extensive experience across
                various civil cases, showcasing a versatile skill set crucial
                for addressing clients' diverse legal needs.
                <br />
                <br />
                At Innerwork Advisors LLP, we handle all facets of real estate,
                ensuring sound legal and practical solutions for our clients.
                Our commitment to swift issue resolution and efficient
                assignment completion underscores our dedication to client
                satisfaction.
              </>
            )}
            {selectedService.title === "Intellectual Property Rights" && (
              <>
                <strong>
                  Intellectual Property Rights: Expert Legal Solutions for
                  Innovation Protection
                </strong>
                <br />
                <br />
                Protecting intellectual property (IP) is essential for
                safeguarding innovation and ensuring business success. Our top
                IP lawyers specialize in comprehensive legal support for
                patents, trademarks, copyrights, and trade secrets, helping
                clients navigate complex IP laws with confidence.
                <br />
                <br />
                Our experienced team comprises registered patent and trademark
                agents, seasoned litigators, and IP attorneys with deep
                expertise in Indian and global intellectual property frameworks.
                We work closely with clients to provide holistic and strategic
                legal solutions.
                <br />
                <br />
                Intellectual property plays a critical role in today’s
                competitive market. With industries evolving rapidly, securing
                and enforcing IP rights has become more important than ever. Our
                firm takes pride in offering a full spectrum of IP services to
                cater to businesses of all sizes.
                <br />
                <br />
                <strong>Our Expertise Includes:</strong>
                <br />
                <br />✔ <strong>IP Registration & Prosecution:</strong> Filing
                and prosecution of patents, trademarks, copyrights, designs,
                plant varieties, and geographical indications.
                <br />
                <br />✔ <strong>Global IP Filings:</strong> Assisting with
                foreign IP filings through our trusted network of off-counsels.
                <br />
                <br />✔ <strong>
                  IP Transactions & Commercialization:
                </strong>{" "}
                Conducting due diligence, mergers & acquisitions, licensing,
                franchising, and structuring commercial agreements.
                <br />
                <br />✔ <strong>
                  IP Enforcement & Anti-Counterfeiting:
                </strong>{" "}
                Managing pan-India anti-counterfeiting and anti-piracy
                operations, infringement litigation, cease and desist notices,
                and online enforcement strategies.
                <br />
                <br />✔{" "}
                <strong>Dispute Resolution & Legal Representation:</strong>{" "}
                Handling IP conflicts through filing and defending oppositions,
                cancellations, and rectification proceedings.
                <br />
                <br />✔ <strong>Strategic Advisory:</strong> Developing
                business strategies involving intellectual property rights and
                data privacy laws to help businesses maximize value and mitigate
                risks.
                <br />
                <br />
                At Innerwork Advisors LLP, we are dedicated to delivering
                effective and practical IP solutions that empower our clients to
                protect and monetize their intellectual assets with confidence.
              </>
            )}
            {selectedService.title === "Pre Marital Investigation" && (
              <>
                <strong>
                  Pre-Marital Investigation: Ensuring Clarity Before Commitment
                </strong>
                <br />
                <br />
                Looking forward to your upcoming marriage, whether arranged or
                based on love? It’s natural to feel a bit apprehensive. However,
                if you have doubts about your prospective partner, Innerwork
                Advisors LLP offers private pre-marital investigation services
                to provide clarity and peace of mind.
                <br />
                <br />
                Instances such as reluctance to share personal details,
                hesitance in introducing you to their social circle, or secrecy
                about their background may raise concerns. Even in strong
                relationships, verifying facts ensures a solid foundation for
                marriage.
                <br />
                <br />
                Our team of professional private detectives conducts thorough
                background checks and fact-finding missions with the utmost
                dedication. We provide comprehensive investigation services,
                prioritizing your security, protection, and peace of mind.
                <br />
                <br />
                <strong>We Provide Tangible Evidence</strong>
                <br />
                <br />
                Our investigative efforts yield one of two outcomes:
                <br />
                <br />✔ <strong>Misconceptions Cleared:</strong> Your doubts
                are resolved, and any concerns turn out to be mere
                misunderstandings.
                <br />
                <br />✔ <strong>Valid Concerns Identified:</strong> If
                suspicions are confirmed, we present clear evidence to help you
                reconsider the commitment.
                <br />
                <br />
                Should deceit or infidelity be discovered, we provide concrete
                evidence, including video, audio recordings, and photographic
                documentation, ensuring you have the facts needed to make an
                informed decision.
                <br />
                <br />
                <strong>Discreet Investigation Services</strong>
                <br />
                <br />
                Innerwork Advisors LLP ensures absolute discretion and
                meticulous attention throughout the pre-marital investigation
                process. Reach out to us without hesitation, and share your
                specific requirements confidentially.
              </>
            )}
            {selectedService.title === "Post Marital Investigation" && (
              <>
                <strong>
                  Post-Marital Investigation: Unveiling the Truth for Peace of
                  Mind
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP offers all-inclusive post-marital
                investigation services that meticulously scrutinize all relevant
                information concerning either the bride or groom. Our
                investigations cover aspects such as family backgrounds,
                undisclosed activities, and suspicions of infidelity, ensuring
                you receive clear insights about your spouse or in-laws.
                <br />
                <br />
                Our team provides unwavering support and discreet assistance
                throughout the entire process, helping clients uncover hidden
                truths and make informed decisions.
                <br />
                <br />
                <strong>
                  Dedicated Team of Investigators for Post-Marital Inquiries
                </strong>
                <br />
                <br />
                Our post-marriage investigations are tailored to meet the unique
                needs of each client. With a highly skilled team of professional
                investigators, we leverage advanced tools and techniques to
                gather concrete evidence efficiently. Our expertise has earned
                us a reputation as one of Kolkata’s leading post-matrimonial
                investigation agencies.
                <br />
                <br />
                <strong>Unveiling Truths About Your Partner or In-Laws</strong>
                <br />
                <br />
                The rising divorce rates often stem from hidden information or
                lack of trust, making it crucial to take informed steps. Our
                services provide comprehensive insights into your spouse and
                their family, empowering you to make crucial decisions about
                your future.
                <br />
                <br />✔ <strong>Suspicion of Infidelity:</strong> If you
                suspect unfaithfulness, our discreet investigations can uncover
                the truth.
                <br />
                <br />✔ <strong>Unethical or Hidden Activities:</strong> We
                help verify any underhanded actions by your spouse or in-laws
                that may impact your marriage.
                <br />
                <br />
                Innerwork Advisors LLP ensures absolute confidentiality in all
                post-marital investigations. Our findings include video and
                audio recordings, as well as photographic evidence, giving you
                undeniable proof to support your decisions. Reach out to us
                today to uncover the hidden realities within your marriage.
              </>
            )}
            {selectedService.title === "Missing Person Tracing" && (
              <>
                <strong>
                  Missing Person Tracing: Expert Assistance in Locating Loved
                  Ones
                </strong>
                <br />
                <br />
                According to Kolkata Police reports, over 1,000 individuals go
                missing annually. Protecting your loved ones from becoming part
                of this statistic is crucial. Innerwork Advisors LLP specializes
                in locating missing persons, whether they’ve intentionally
                disappeared due to financial struggles or are genuinely lost.
                <br />
                <br />
                Our missing person tracing agency offers expert detectives to
                help you find the individual you seek. Simply provide us with
                details, and we will handle the rest.
                <br />
                <br />
                <strong>Comprehensive Missing Person Tracing Services</strong>
                <br />
                <br />
                Our expertise spans various scenarios, including locating
                missing children, reuniting families, and finding old friends.
                Regardless of their whereabouts, we have the experience, skills,
                and resources to gather concrete information about their
                location.
                <br />
                <br />
                If the missing person is traceable, we are equipped for the
                task. Our investigators employ cutting-edge technology for
                evidence gathering, including:
                <br />
                <br />✔ <strong>Video & Audio Surveillance:</strong> Discreet
                monitoring of activities to track movements.
                <br />
                <br />✔ <strong>Photographic Documentation:</strong> Capturing
                crucial evidence to confirm identity and location.
                <br />
                <br />✔ <strong>Advanced Investigation Tools:</strong> Use of
                surveillance gadgets to enhance tracking efficiency.
                <br />
                <br />
                <strong>Ensuring Discretion and Accuracy</strong>
                <br />
                <br />
                As a reputable missing person tracing agency, Innerwork Advisors
                LLP is dedicated to success in every case. Our investigative
                process is thorough, ensuring complete discretion and
                confidentiality. All gathered information will be shared with
                you transparently.
                <br />
                <br />
                <strong>Affordable and Reliable Investigation Services</strong>
                <br />
                <br />
                Our missing person tracing services are affordably priced while
                ensuring our investigators are fairly compensated for their
                expertise. By providing a sketch or photograph, you can
                significantly aid our investigation.
                <br />
                <br />
                If you are searching for a missing loved one, do not hesitate to
                reach out. Contact Innerwork Advisors LLP—Kolkata’s most trusted
                private detective agency—to take the first step in reuniting
                with your loved one.
              </>
            )}
            {selectedService.title === "Surveillance Services" && (
              <>
                <strong>
                  Surveillance Services: Discreet & Professional Monitoring
                  Solutions
                </strong>
                <br />
                <br />
                Are you seeking to monitor someone's activities discreetly?
                Innerwork Advisors LLP boasts a team of highly skilled
                surveillance professionals in Kolkata. As one of the leading
                surveillance agencies, we offer cost-effective solutions for
                individuals looking to gather information on loved ones,
                business partners, and more.
                <br />
                <br />
                Our expert detectives meticulously track and document the
                subject’s movements, providing you with comprehensive
                information and supporting evidence.
                <br />
                <br />
                <strong>
                  Uncover the Truth with Professional Surveillance
                </strong>
                <br />
                <br />
                With rising cases of infidelity and fraud, surveillance
                investigations have become increasingly essential. Whether you
                harbor professional or personal doubts, our services help
                uncover the truth and provide peace of mind.
                <br />
                <br />✔ <strong>
                  Professional & Personal Surveillance:
                </strong>{" "}
                Whether it's an unfaithful partner, a suspicious employee, or a
                business competitor, we provide accurate insights.
                <br />
                <br />✔ <strong>Highly Skilled Detectives:</strong> Our
                dedicated team is known for their efficiency and
                approachability, making us a trusted choice for diverse cases.
                <br />
                <br />
                <strong>We Provide In-Depth Information</strong>
                <br />
                <br />
                Simply provide us with details about the subject requiring
                surveillance, and our capable detectives will handle the rest.
                They conduct thorough observations throughout the day, gathering
                substantial evidence for your review.
                <br />
                <br />
                Our surveillance investigations include:
                <br />
                <br />✔ <strong>Photographic & Video Evidence:</strong>{" "}
                High-quality documentation for credibility and accuracy.
                <br />
                <br />✔ <strong>Audio Recordings:</strong> Essential proof when
                discreet monitoring is required.
                <br />
                <br />✔ <strong>Real-Time Observations:</strong> Continuous
                monitoring to track crucial movements and interactions.
                <br />
                <br />
                Leveraging advanced surveillance technology ensures you receive
                the answers you seek, whether it’s about monitoring a spouse’s
                activities or assessing potential collaboration between
                employees and competitors.
                <br />
                <br />
                <strong>Affordable & Reliable Surveillance Solutions</strong>
                <br />
                <br />
                Innerwork Advisors LLP offers competitive rates for our
                surveillance investigation services. Despite our affordable
                pricing, we maintain an unparalleled level of commitment,
                distinguishing us from other detective agencies in the city.
                <br />
                <br />
                Contact us today to discuss your surveillance needs and benefit
                from our expertise.
              </>
            )}
            {selectedService.title === "Cyber Crime Investigation" && (
              <>
                <strong>
                  Cyber Crime Investigation: Protecting Your Digital Presence
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP stands as a highly reputable and adept
                cyber-crime investigation agency based in Kolkata. Our services
                cater to individuals, small businesses, and corporations facing
                severe internet-related crimes that significantly impact lives.
                <br />
                <br />
                Each year, we handle a multitude of requests ranging from:
                <br />
                <br />✔ <strong>Illegal computer intrusions</strong> –
                Protecting clients from hacking and data breaches.
                <br />
                <br />✔ <strong>Cyber harassment & extortion</strong> –
                Addressing online threats and blackmail.
                <br />
                <br />✔ <strong>Invasion of privacy & defamation</strong> –
                Safeguarding personal and corporate reputations.
                <br />
                <br />✔{" "}
                <strong>
                  Trademark infringement & intellectual property theft
                </strong>{" "}
                – Ensuring rightful ownership of digital assets.
                <br />
                <br />
                Our proficiency extends across all facets of cyber-crime
                investigation, ensuring a thorough and effective approach.
                <br />
                <br />
                <strong>Stay One Step Ahead of Cyber Criminals</strong>
                <br />
                <br />
                The landscape of cyber-crime is evolving, with criminals using
                sophisticated technologies to conceal their identities. The
                surge in illicit activities on online platforms demands constant
                vigilance and adaptation.
                <br />
                <br />
                Our skilled detectives are equipped to shield you from cyber
                threats by addressing:
                <br />
                <br />✔ <strong>Online harassment</strong> – Protecting
                individuals from cyberbullying and threats.
                <br />
                <br />✔ <strong>Unauthorized information leaks</strong> –
                Preventing business data theft and personal information
                exposure.
                <br />
                <br />
                Tailored to your specific needs, our cyber-crime investigation
                solutions offer comprehensive protection.
                <br />
                <br />
                <strong>Expert Cyber Investigators with Advanced Skills</strong>
                <br />
                <br />
                Unlike most police departments, internet crime investigations
                require specialized expertise. Our seasoned team of detectives
                excels in:
                <br />
                <br />✔ <strong>Uncovering crucial evidence</strong> – Using
                hands-on experience and a deep understanding of online
                mechanisms.
                <br />
                <br />✔ <strong>Identifying perpetrators</strong> – Tracking
                down cybercriminals through digital forensics.
                <br />
                <br />✔ <strong>Preventing future attacks</strong> –
                Strengthening cybersecurity to avoid further threats.
                <br />
                <br />
                <strong>Defend Yourself Against Cyber Threats</strong>
                <br />
                <br />
                Engage our cyber-crime investigation services to leverage our
                expertise. We provide the skills, resources, and experience
                necessary to fortify your defenses against cyber attackers.
                <br />
                <br />
                The evidence we gather equips you to:
                <br />
                <br />
                ✔ Seek legal recourse against cybercriminals.
                <br />
                <br />
                ✔ Protect personal and business digital assets.
                <br />
                <br />
                Our detectives are ready to guide you through the intricacies of
                cyber-crime investigation. Contact us today for a consultation
                and take proactive steps toward safeguarding your digital
                presence.
              </>
            )}
            {selectedService.title === "Extortion Investigation" && (
              <>
                <strong>
                  Extortion Investigation: Protect Yourself from Blackmail &
                  Threats
                </strong>
                <br />
                <br />
                Are you facing threats of blackmail or extortion, with someone
                attempting to exploit your private information for financial
                gain? Reach out to Innerwork Advisors LLP, a leading extortion
                investigation agency in Kolkata. We provide professional,
                reliable, and discreet extortion investigation services,
                empowering you to confront and address instances of blackmail
                and extortion effectively.
                <br />
                <br />
                With our unwavering support, you can prevent anyone from
                exploiting you unfairly.
                <br />
                <br />
                <strong>Tailored Independent Investigation Services</strong>
                <br />
                <br />
                As an entirely independent agency, we offer unbiased advice and
                solutions tailored to your specific situation. Our covert
                investigations are conducted with utmost confidentiality,
                ensuring that your privacy is safeguarded throughout the
                process.
                <br />
                <br />✔ <strong>Uncover the Truth</strong> – We employ
                effective methodologies to uncover facts and gather compelling
                evidence.
                <br />
                <br />✔ <strong>Legal Evidence Collection</strong> – We provide
                concrete proof that can be presented in court.
                <br />
                <br />✔ <strong>Client Collaboration</strong> – Our team works
                closely with you, ensuring informed participation at every step.
                <br />
                <br />
                With our dependable services at your disposal, you can
                confidently navigate instances of attempted extortion without
                yielding to demands for money or concessions.
                <br />
                <br />
                <strong>Safeguard Against Blackmail</strong>
                <br />
                <br />
                Extortion and blackmail in any form are illegal and
                reprehensible. If you find yourself in such circumstances, take
                a stand and seek assistance from us.
                <br />
                <br />✔ <strong>Identify the Perpetrator</strong> – Our skilled
                detectives track down individuals behind the extortion attempts.
                <br />
                <br />✔ <strong>Retrieve Stolen Data</strong> – If personal or
                sensitive data has been taken, we work to recover it.
                <br />
                <br />✔ <strong>Discreet & Personalized Solutions</strong> – We
                tailor our approach based on your unique circumstances.
                <br />
                <br />
                Innerwork Advisors LLP is a seasoned extortion investigation
                agency committed to safeguarding your well-being. Don’t let
                yourself be coerced into giving away your money unjustly. Reach
                out to us without hesitation, and let us assist you in resolving
                cases of extortion with professionalism and discretion.
              </>
            )}
            {selectedService.title === "Handwriting Verification" && (
              <>
                <strong>
                  Handwriting Verification: Detect Forged Signatures &
                  Fraudulent Documents
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP boasts a dedicated team of handwriting
                experts providing comprehensive handwriting identification and
                verification services in Kolkata. Our detectives specialize in
                scrutinizing fraudulent letters, forged signatures, and
                manipulated documents.
                <br />
                <br />
                As a leading handwriting verification agency, we excel in
                swiftly resolving your concerns by meticulously verifying and
                authenticating all requisite documents under the guidance of
                seasoned handwriting professionals.
                <br />
                <br />
                The era of globalization has ushered in a surge of deceit and
                fraudulent activities, particularly concerning handwriting
                duplicity. Industries heavily impacted include:
                <br />
                <br />✔ <strong>Banking & Finance</strong> – Signature
                verification for cheques and transactions.
                <br />
                <br />✔ <strong>Legal & Government Sectors</strong> – Detecting
                forgery in wills and contracts.
                <br />
                <br />✔ <strong>Corporate & Business Deals</strong> –
                Identifying fraudulent documentation.
                <br />
                <br />
                Our services extend beyond commercial entities to individuals
                seeking handwriting verification for wills or businesses
                requiring signature authentication on contracts.
                <br />
                <br />
                <strong>Common Problems We Address:</strong>
                <br />
                <br />
                • Unauthorized individuals signing large-value cheques.
                <br />
                • Fraudulent issuance of indents on documents by unauthorized
                individuals.
                <br />
                • Misappropriation of orders by fraudulent entities.
                <br />
                <br />
                At Innerwork Advisors LLP, our investigation professionals
                possess extensive expertise in handling complex cases,
                leveraging state-of-the-art forensic analysis techniques. We
                swiftly identify genuine authors of documents and detect any
                fraudulent handwriting behaviors.
                <br />
                <br />✔ <strong>Forensic Analysis</strong> – We utilize
                advanced forensic intelligence to ensure accurate results.
                <br />
                <br />✔ <strong>Prompt Investigation</strong> – Quick and
                efficient handwriting comparisons to address client concerns.
                <br />
                <br />✔ <strong>Reliable & Conclusive Results</strong> –
                Ensuring authenticity in document examination.
                <br />
                <br />
                If you require our expertise to examine any document or
                contract, please don’t hesitate to contact us. You can trust our
                expert handwriting investigation services to provide you with
                reliable and conclusive results.
              </>
            )}
            {selectedService.title === "Asset Verification" && (
              <>
                <strong>
                  Asset Verification: Uncover Ownership, Value & Hidden Assets
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP has established itself as a premier asset
                verification service provider in Kolkata, recognized for its
                experience and excellence. Our services extend to individuals as
                well as banking institutions.
                <br />
                <br />
                With a team of seasoned detectives possessing extensive
                expertise, we excel in obtaining intricate asset details crucial
                for informed planning and decision-making.
                <br />
                <br />
                <strong>
                  Our Comprehensive Asset Verification Services Encompass:
                </strong>
                <br />
                <br />
                • Acquiring information and documentation regarding asset
                ownership.
                <br />
                • Detailed investigation into the asset’s location.
                <br />
                • Retrieval of registration particulars for the asset.
                <br />
                • Verification and assessment of the asset’s overall value.
                <br />
                • For immovable assets, obtaining the encumbrance certificate to
                understand the asset’s sale and purchase history.
                <br />
                • Expert evaluation of asset taxes, categorizing assets as
                industrial, agricultural, commercial, residential, etc.
                <br />
                <br />
                In addition to these services, we offer professional guidance to
                our esteemed clients concerning asset valuation, aiding them in
                managing their savings and income tax efficiently.
                <br />
                <br />
                <strong>
                  Expertise in Uncovering Hidden or Illicit Assets
                </strong>
                <br />
                <br />
                Whether you require asset verification for debt recovery,
                navigating complex divorce proceedings, or evaluating assets for
                business purposes, our expertise is at your disposal. Our
                capabilities extend to uncovering information about illegal or
                concealed assets, making us a trusted asset verification agency
                in Kolkata.
                <br />
                <br />✔ <strong>Debt Recovery</strong> – Identifying hidden
                assets linked to financial obligations.
                <br />
                <br />✔ <strong>Divorce & Legal Proceedings</strong> – Ensuring
                accurate asset disclosures in settlements.
                <br />
                <br />✔ <strong>Fraudulent Transactions</strong> – Detecting
                unauthorized asset transfers and misappropriations.
                <br />
                <br />
                Simply outline your requirements, and our detectives will handle
                the rest. We ensure the procurement of authentic documents or
                provide information on asset whereabouts, empowering you to
                leverage this knowledge effectively in legal proceedings and
                achieve favorable outcomes.
                <br />
                <br />
                If you need assistance verifying assets, do not hesitate to
                reach out to us for reliable and comprehensive asset
                investigation services.
              </>
            )}
            {selectedService.title === "Pre Employment Verification" && (
              <>
                <strong>
                  Pre-Employment Verification: Ensuring Authenticity in Hiring
                </strong>
                <br />
                <br />
                It’s a well-known fact that many job seekers falsify their
                employment history to secure lucrative job offers. This
                practice, aimed at landing high-paying positions within
                corporate organizations, is a concern.
                <br />
                <br />
                However, Innerwork Advisors LLP is committed to curbing this
                trend through our pre-employment verification services.
                Partnering with a reputable verification company like ours
                enables you to authenticate a candidate’s credentials swiftly,
                aiding in making informed hiring decisions.
                <br />
                <br />
                <strong>Our Services Help Ascertain the Following:</strong>
                <br />
                <br />
                • Validating the candidate’s tenure of employment.
                <br />
                • Confirming the job position held as stated.
                <br />
                • Verifying salary details and authenticating submitted
                documents.
                <br />
                <br />
                To obtain this information, we liaise with the human resources
                or payroll department of the candidate’s previous employer,
                ensuring accurate verification of their employment history.
                <br />
                <br />
                <strong>Importance of Pre-Employment Verification</strong>
                <br />
                <br />✔ <strong>Falsified Employment Dates</strong> – The
                likelihood of candidates falsifying employment dates to mask
                gaps in their work history is significant, making pre-employment
                verification essential.
                <br />
                <br />✔ <strong>Exaggerated Job Roles</strong> – In some
                instances, candidates exaggerate job roles, salaries, and
                responsibilities, necessitating verification to ascertain
                suitability for the role.
                <br />
                <br />✔ <strong>Investigating Sudden Departures</strong> – We
                also investigate the reasons behind a candidate’s sudden
                departure from a previous company, providing valuable insights
                into their reliability.
                <br />
                <br />
                Employees are the cornerstone of any organization’s success,
                regardless of its size or stature. They shape the company’s
                reputation and contribute significantly to its growth.
                Therefore, exercising caution during the hiring process is
                imperative.
                <br />
                <br />
                Our pre-employment verification services empower you to make
                informed hiring decisions based on verified information. We
                provide comprehensive proof to ensure that you select the right
                candidate for your organization, safeguarding its reputation and
                success.
              </>
            )}
            {selectedService.title === "Post-Employment Verification" && (
              <>
                <strong>
                  Post-Employment Verification: Ensuring Workplace Integrity
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP conducts comprehensive post-employment
                verification on behalf of esteemed clients. Our investigations
                enable clients to monitor and track the activities of employees
                within their organizations effectively.
                <br />
                <br />
                If any suspicions arise regarding employee fraud or misconduct,
                our investigative services are poised to uncover such instances.
                <br />
                <br />
                Employees in senior roles within companies often have access to
                sensitive and confidential information. If you seek assurance
                that such information remains secure and is not leaked to
                competitors, our investigative services are invaluable.
                <br />
                <br />
                As one of Kolkata’s top post-employment verification agencies,
                our meticulous verification processes prevent data leaks and
                allow you to evaluate employee loyalty, ensuring the protection
                of your trade secrets.
                <br />
                <br />
                <strong>
                  Our Post-Employment Verification Services Provide the
                  Following Benefits:
                </strong>
                <br />
                <br />
                • Identification of any missed information overlooked during
                pre-employment verification due to time constraints or human
                error.
                <br />
                • Insight into employees’ attitudes towards work and
                performance, aiding in performance evaluations and identifying
                deserving candidates for promotion.
                <br />
                • Detection of any employees involved in activities detrimental
                to management, allowing proactive measures to be taken.
                <br />
                • Provision of additional information about employees beneficial
                for the company’s well-being.
                <br />
                <br />
                Our collaboration with top-notch detectives in the city has
                earned us a stellar reputation. We have assisted numerous small,
                medium, and large corporate entities in monitoring their
                employees’ activities during their tenure.
                <br />
                <br />
                Should you have any doubts regarding a staff member or require
                answers, feel free to reach out to us. Our post-employment
                verifications are supported by concrete evidence, providing you
                with peace of mind and actionable insights.
              </>
            )}
            {selectedService.title === "Undercover Operation" && (
              <>
                <strong>
                  Undercover Operation: Exposing Fraudulent Activities
                </strong>
                <br />
                <br />
                Innerwork Advisors LLP is proud to house a specialized team
                dedicated to conducting undercover operations. Renowned as one
                of the leading undercover operation agencies in Kolkata, we
                bring years of expertise in executing various undercover
                assignments.
                <br />
                <br />
                Our team comprises highly skilled and experienced detectives who
                are committed to delivering nothing short of exceptional
                results. Efficiency is paramount to us, and our track record
                includes assisting numerous corporate entities in uncovering
                fraudulent activities within their organizations.
                <br />
                <br />
                We are confident in our ability to assist you as well, and we
                invite you to contact us to discuss your specific requirements.
                <br />
                <br />
                <strong>
                  Identify Suspicious Activities within Your Company
                </strong>
                <br />
                <br />
                Our undercover operations are designed to identify and expose a
                range of suspicious activities within companies, including poor
                performance, unproductive employees, harassment, and more.
                <br />
                <br />
                Innerwork Advisors LLP provides comprehensive information about
                the happenings within your workplace. Armed with detailed
                insights, you can take proactive steps to prevent potential
                issues and untoward incidents.
                <br />
                <br />
                <strong>Advanced Technology and Resourceful Agents</strong>
                <br />
                <br />
                Our undercover agents leverage the latest equipment, photo/video
                technology, tracking systems, and more to gather in-depth
                information effectively. With a wealth of experience in
                undercover operations, we assure you of thorough and accurate
                investigations.
                <br />
                <br />
                <strong>
                  Tailored Solutions and Dedication to Client Needs
                </strong>
                <br />
                <br />
                At the heart of our operations are our clients’ specific
                requirements. We strive to offer tailored solutions that align
                with your individualized needs.
                <br />
                <br />
                Our astute and dedicated agents prioritize your instructions and
                preferences before initiating any undercover investigation. We
                keep you informed about our plans to ensure transparency and
                collaboration throughout the process.
                <br />
                <br />
                <strong>Confidentiality and Discretion</strong>
                <br />
                <br />
                Rest assured that all information and evidence collected during
                the undercover operation remain confidential and discreet.
                <br />
                <br />
                Our commitment to maintaining utmost confidentiality ensures
                that the entire matter remains between you and our agents. If
                you require assistance with an undercover operation, we are
                ready to guide you through our process.
                <br />
                <br />
                Contact us today to explore your options and initiate a thorough
                undercover investigation tailored to your needs.
              </>
            )}
            {selectedService.title === "Corporate Due-Diligence" && (
              <>
                <strong>
                  Corporate Due-Diligence: Informed Business Decisions
                </strong>
                <br />
                <br />
                Gain essential insights before engaging in partnership
                opportunities, investments, employment agreements, or dispute
                resolutions with the assistance of seasoned detectives from
                Innerwork Advisors LLP.
                <br />
                <br />
                As a reputable corporate due-diligence agency based in Kolkata,
                we understand that successful negotiations hinge on accurate
                information. Our core specialization lies in delivering
                comprehensive corporate due-diligence investigation services,
                empowering you to make well-informed business choices.
                <br />
                <br />
                Over the years, we have been trusted advisors to financial,
                legal, and compliance teams, guiding them through strategic
                decisions and resolving corporate disputes.
                <br />
                <br />
                Our services are sought after by businesses of all sizes before
                embarking on significant transactions or forging strategic
                corporate alliances.
                <br />
                <br />
                We offer expertise in acquisition and merger assessments,
                executive hires, partnership evaluations, reputational
                profiling, board appointments, and market entry strategies. Stay
                ahead of your competitors by leveraging our insights and
                intelligence.
                <br />
                <br />
                Reach out to us today to discuss your specific needs and explore
                how our services can benefit your business.
                <br />
                <br />
                <strong>How Can We Assist You?</strong>
                <br />
                <br />
                Our thorough investigative services are designed to help clients
                navigate risks, safeguard their market reputation, and preserve
                stock value.
                <br />
                <br />
                Whether you have reservations before signing a corporate
                agreement or need actionable intelligence, our corporate
                due-diligence investigation services deliver results.
                <br />
                <br />
                Our team of investigators employs rigorous analytical methods
                and fact-finding techniques to ensure precision and accuracy in
                meeting our clients’ requirements. We excel in identifying,
                assessing, and managing corporate risks, vulnerabilities, and
                threats.
                <br />
                <br />
                <strong>Why Choose Us?</strong>
                <br />
                <br />
                <ul>
                  <li>
                    <strong>Years of Experience:</strong> Benefit from our
                    extensive experience and proven track record in corporate
                    due-diligence investigations.
                  </li>
                  <li>
                    <strong>Expert Team:</strong> Our detectives are
                    industry-leading professionals known for their
                    client-centric approach and friendly demeanor.
                  </li>
                  <li>
                    <strong>Cost-Effective Solutions:</strong> Avail our
                    services at competitive prices without compromising on
                    quality.
                  </li>
                  <li>
                    <strong>Concrete Evidence:</strong> We provide concrete
                    evidence in the form of voice recordings, video footage,
                    photographs, and relevant documents, ensuring comprehensive
                    support for your decisions.
                  </li>
                </ul>
                <br />
                For more details about our corporate investigation services,
                contact us today. A tailored solution awaits to address your
                specific needs effectively.
              </>
            )}
            {selectedService.title === "Forensic Expertise/Investigation" && (
              <>
                <strong>Forensic Expertise & Investigation Services</strong>
                <br />
                <br />
                Innerwork Advisors LLP is a team of seasoned forensic
                consultants committed to delivering comprehensive and reliable
                forensic expertise services.
                <br />
                <br />
                Our dedication to excellence and integrity sets us apart in the
                field.
                <br />
                <br />
                Innerwork Advisors LLP is your trusted provider of forensic
                investigation services. As a leading forensic service provider,
                we specialize in a wide range of forensic disciplines, ensuring
                that our clients receive top-notch expertise and
                professionalism.
                <br />
                <br />
                Our team is devoted to unraveling mysteries, solving crimes, and
                providing unmatched forensic solutions tailored to your specific
                needs.
                <br />
                <br />
                Innerwork Advisors LLP stands as one of Kolkata’s foremost
                private forensic investigators, offering forensic investigation
                services nationwide.
              </>
            )}
            {selectedService.title === "Sting Operation Services" && (
              <>
                <strong>Sting Operation Investigation Services</strong>
                <br />
                <br />
                Engaging in a sting operation investigation can provide
                irrefutable evidence against a criminal and is a strategic move
                to catch them in the act.
                <br />
                <br />
                Hiring an investigation agency like ours ensures thorough and
                professional execution of the sting operation, delivering solid
                proof that can be crucial in legal proceedings.
                <br />
                <br />
                Sting operations, as seen in numerous news reports, have exposed
                the true nature of individuals and entities, benefiting not only
                individuals but also society at large.
                <br />
                <br />
                Revealing the real faces of corrupt individuals and institutions
                through sting operations can protect lives, finances, and time.
                <br />
                <br />
                Expert investigation agencies are adept at conducting sting
                operations flawlessly, managing risks efficiently, and ensuring
                accurate results.
                <br />
                <br />
                Whether you need to uncover the truth about an individual,
                organization, company, or NGO, a well-executed sting operation
                can provide invaluable information.
                <br />
                <br />
                Investigation agencies with years of experience in conducting
                sting operations possess the necessary skills to handle such
                sensitive investigations with utmost dedication.
                <br />
                <br />
                <strong>
                  Here are some compelling reasons why hiring an investigation
                  agency for a sting operation is highly recommended:
                </strong>
                <br />
                <br />
                <strong>1. Expertise:</strong> Investigation agencies have
                specialized knowledge and expertise in conducting sting
                operations, ensuring thorough and accurate investigations.
                <br />
                <br />
                <strong>2. Risk Management:</strong> Experienced agencies are
                equipped to handle potential risks associated with sting
                operations, minimizing any adverse outcomes.
                <br />
                <br />
                <strong>3. Strategic Approach:</strong> Skilled investigators
                know how to approach and communicate effectively during sting
                operations, maximizing the chances of obtaining reliable
                evidence.
                <br />
                <br />
                <strong>4. Legal Compliance:</strong> Professional agencies
                ensure that sting operations are conducted within legal
                boundaries, adhering to ethical standards and regulations.
                <br />
                <br />
                <strong>5. Comprehensive Reporting:</strong> Investigation
                agencies provide detailed reports and evidence gathered during
                sting operations, facilitating informed decision-making and
                legal proceedings.
                <br />
                <br />
                In conclusion, entrusting a reputable investigation agency with
                a sting operation ensures professionalism, accuracy, and ethical
                conduct throughout the investigative process.
              </>
            )}

            <button
              onClick={() => setSelectedService(null)}
              className="mt-4 rounded bg-[#C9A267] px-4 py-2 text-white"
            >
              Close
            </button>
          </motion.div>
        </Dialog>
      )}
    </div>
  );
}
