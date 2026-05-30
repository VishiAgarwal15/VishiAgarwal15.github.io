"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const certifications = [
  {
    name: "CSM",
    full: "Certified ScrumMaster®",
    issuer: "Scrum Alliance",
    issued: "Active",
    description:
      "Demonstrates expertise in Scrum framework, Agile ceremonies, sprint planning, and coaching teams to deliver high-value products iteratively.",
    verifyUrl: "https://www.scrumalliance.org/community/profile",
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" stroke="#111111" strokeWidth="3" fill="none" />
        <text x="40" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="#111111" fontFamily="Arial">SCRUM</text>
        <text x="40" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#111111" fontFamily="Arial">ALLIANCE</text>
        <text x="40" y="63" textAnchor="middle" fontSize="8" fill="#111111" fontFamily="Arial">CERTIFIED</text>
      </svg>
    ),
  },
  {
    name: "CSPO",
    full: "Certified Scrum Product Owner®",
    issuer: "Scrum Alliance",
    issued: "Active",
    description:
      "Validates proficiency in product ownership, backlog management, stakeholder collaboration, and maximising product value through Agile delivery.",
    verifyUrl: "https://www.scrumalliance.org/community/profile",
    logo: (
      <svg className="w-16 h-16" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="38" stroke="#111111" strokeWidth="3" fill="none" />
        <text x="40" y="34" textAnchor="middle" fontSize="13" fontWeight="700" fill="#111111" fontFamily="Arial">SCRUM</text>
        <text x="40" y="50" textAnchor="middle" fontSize="10" fontWeight="600" fill="#111111" fontFamily="Arial">ALLIANCE</text>
        <text x="40" y="63" textAnchor="middle" fontSize="8" fill="#111111" fontFamily="Arial">CERTIFIED</text>
      </svg>
    ),
  },
];

export default function Certifications() {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="bg-canvas section-padding">
      <div className="max-w-[1440px] mx-auto" ref={ref}>

        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-16 hairline-bottom pb-10"
        >
          <p className="text-[12px] font-medium uppercase tracking-widest text-ink mb-2">
            Credentials
          </p>
          <h1 className="font-display text-ink uppercase text-[clamp(56px,10vw,120px)] leading-[0.9] tracking-wide">
            CERTIFI<br />CATIONS
          </h1>
          <p className="text-mute text-base font-medium max-w-lg mt-6 leading-relaxed">
            Scrum Alliance certified in both ScrumMaster and Product Owner disciplines, validating end-to-end Agile delivery expertise.
          </p>
        </motion.div>

        {/* Certification cards — 2 up */}
        <div className="grid md:grid-cols-2 gap-px bg-cloud border border-hairline">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-canvas flex flex-col"
            >
              {/* Stage */}
              <div className="bg-cloud aspect-[4/3] flex flex-col items-center justify-center gap-6 p-8">
                {cert.logo}
                <div className="text-center">
                  <div className="font-display text-ink text-[clamp(56px,8vw,96px)] leading-[0.9] tracking-wide uppercase">
                    {cert.name}
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="p-8 flex flex-col flex-1">
                <h2 className="font-display text-ink uppercase text-[clamp(20px,2.5vw,28px)] leading-tight tracking-wide mb-2">
                  {cert.full}
                </h2>
                <p className="text-[13px] font-medium text-mute mb-4">{cert.issuer}</p>
                <p className="text-[14px] text-charcoal leading-relaxed flex-1 mb-6">
                  {cert.description}
                </p>
                <div className="hairline-top pt-5 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-pill text-[11px] font-medium bg-ink text-white">
                    {cert.issued}
                  </span>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[13px] font-medium text-ink underline underline-offset-4"
                  >
                    Verify credential
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
