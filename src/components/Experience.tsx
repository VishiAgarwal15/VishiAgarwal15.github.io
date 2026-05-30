"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const experiences = [
 {
 company: "Evenness",
 location: "Atlanta, GA",
 title: "Product Owner (Co-op) a11yFORGE AI Compliance Engine",
 period: "Jan 2026 Apr 2026",
 bullets: [
 "Owned end-to-end product workstreams for 3 AI agent compliance workflows; shipped sprint-ready features with 100% on-time delivery across 9 sprints",
 "Worked directly with engineering on API integration flows; reduced defect rate by 35% through proactive dependency resolution",
 "Defined acceptance criteria and product documentation; maintained zero compliance exceptions throughout the full delivery lifecycle",
 "Coordinated cross-functional delivery across Software Engineering, QA, and Operations, aligned 14-person team with zero slippage",
 ],
 },
 {
 company: "American Express India",
 location: "Gurugram, IND",
 title: "Scrum Master & Senior Business Analyst",
 period: "Nov 2022 Nov 2024",
 bullets: [
 "Owned product execution for B2B dispute resolution workflows across 32,000+ accounts; delivered $10M+ commercial impact with zero scope creep",
 "Built engagement loops in a SAFe Agile environment; drove output accuracy from 94% to 98% and sprint efficiency by 18%",
 "Led cross-functional alignment between Engineering, Compliance, and Operations; accelerated stakeholder sign-off across fast-paced delivery cycles",
 ],
 },
 {
 company: "Barclays Shared Services",
 location: "Noida, IND",
 title: "Business Analyst",
 period: "Mar 2021 Nov 2022",
 bullets: [
 "Owned platform tooling improvements for a $250M+ B2B payment settlement platform; delivered 22% operational efficiency gain",
 "Recovered $18M in defaulted loans by pushing underwriting recovery rates from 34% to 48% through data analysis and iterative process improvement",
 "Reduced operational complexity and aligned Technology and Compliance teams on scalable product delivery",
 ],
 },
 {
 company: "Royal Bank of Scotland (NatWest)",
 location: "Delhi, IND",
 title: "Product Delivery Analyst & Scrum Master",
 period: "Dec 2017 Feb 2020",
 bullets: [
 "Spearheaded digital transformation on a $500M+ AUM platform; cut processing cycle time from 15 to 4 days, delivering $450K in savings, adopted as enterprise standard",
 "Automated 70% of manual reconciliation workflows using SQL; achieved 100% FATCA/CRS regulatory compliance with zero findings",
 "Reduced rework by 25% through structured defect triage and cross-functional coordination",
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
   {/* Left: company + period */}
   <div>
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
