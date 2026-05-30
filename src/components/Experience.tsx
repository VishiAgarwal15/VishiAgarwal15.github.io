"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const experiences = [
  {
    company: "Evenness",
    location: "Atlanta, GA",
    title: "Product Owner (Co-op) — a11yFORGE Engine (AI Compliance & Regulatory Transformation)",
    period: "Jan 2026 - Apr 2026",
    logo: null,
    monogram: "EV",
    bullets: [
      "Managed project timelines and resources across 3 AI agent compliance workflows spanning 9 sprints; achieved 100% on-time delivery with zero missed deadlines",
      "Identified risks and dependencies early across Engineering, Compliance, and Operations; drove mitigation strategies that reduced defect rate by 35% with zero compliance exceptions",
      "Maintained structured stakeholder communication cadence across all delivery cycles; ensured full compliance with governance standards and zero scope creep",
    ],
  },
  {
    company: "American Express India Private Limited",
    location: "Gurugram, IND",
    title: "Senior Business Analyst",
    period: "Nov 2022 - Nov 2024",
    logo: "https://logo.clearbit.com/americanexpress.com",
    monogram: "AX",
    bullets: [
      "Managed end-to-end program delivery for B2B dispute workflows across 32K+ accounts; tracked KPIs, controlled budgets, and ensured industry standards adherence, generating $10M+ annual impact",
      "Coordinated cross-functional resources across Finance, Fraud, Legal, and Risk (onshore/offshore); cut resolution time from 28 to 24 days and improved forecasting accuracy by 12%",
      "Drove continuous improvement through AI tools and automated dashboards; lifted output accuracy from 94% to 98% across programs",
    ],
  },
  {
    company: "Barclays Shared Services",
    location: "Noida, IND",
    title: "Business Analyst",
    period: "Mar 2021 - Nov 2022",
    logo: "https://logo.clearbit.com/barclays.com",
    monogram: "BA",
    bullets: [
      "Led cross-functional project delivery for HM Treasury's $250M+ Bounce Back Loan program; defined timelines, managed resources, and achieved 22% operational efficiency gain in 18 months",
      "Implemented mitigation strategies across SME recovery portfolios; cut fraud risk by 8% and lifted recovery rate from 34% to 48%",
      "Recovered $18M in loans through structured execution aligned to governance and industry standards across Technology and Compliance",
    ],
  },
  {
    company: "Royal Bank of Scotland (NatWest)",
    location: "Delhi, IND",
    title: "Delivery Analyst",
    period: "Dec 2017 - Feb 2020",
    logo: "https://logo.clearbit.com/natwest.com",
    monogram: "RBS",
    bullets: [
      "Delivered end-to-end program management for FATCA/CRS compliance across $500M+ AUM; coordinated cross-functional resources, managed risks and escalations, achieving 100% compliance with zero regulatory findings",
      "Automated 70% of reconciliation workflows; reduced processing time from 15 to 4 days, saving $450K annually",
      "Reduced rework by 25% across Legal, Finance, and Operations through centralized documentation systems and effective communication",
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="bg-canvas section-padding">
      <div className="max-w-[1440px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
            Career Path
          </p>
          <h2 className="font-display text-ink uppercase text-[clamp(40px,6vw,64px)] leading-[0.9] tracking-wide mt-2">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="grid md:grid-cols-[240px_1fr] gap-8 py-10 hairline-bottom"
            >
              {/* Left: logo + company + period */}
              <div>
                {/* Logo */}
                <div className="w-12 h-12 bg-cloud border border-hairline flex items-center justify-center mb-4 overflow-hidden">
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-8 h-8 object-contain grayscale"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = "none";
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="font-display text-ink text-[14px] tracking-wide">${exp.monogram}</span>`;
                        }
                      }}
                    />
                  ) : (
                    <span className="font-display text-ink text-[14px] tracking-wide">{exp.monogram}</span>
                  )}
                </div>

                <div className="text-[15px] font-medium text-ink">{exp.company}</div>
                <div className="text-[12px] font-medium text-mute mt-0.5">{exp.location}</div>
                <div className="text-[12px] font-medium text-stone mt-3 font-mono">{exp.period}</div>
              </div>

              {/* Right: title + bullets */}
              <div>
                <div className="text-[15px] font-medium text-ink mb-4">{exp.title}</div>
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-[14px] text-charcoal leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-ink shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
