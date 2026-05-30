"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const projects = [
 {
 title: "AI COMPLIANCE\nPLATFORM",
 company: "Evenness",
 description:
 "Owned end-to-end product workstream for 3 AI agent compliance workflows. Wrote user stories, defined acceptance criteria, tracked KPIs via Jira and Confluence, and shipped sprint-ready features with full regulatory alignment.",
 tags: ["Agile", "Jira", "Confluence", "AI Agents", "SAFe"],
 metric: "100%",
 metricLabel: "On-time delivery · 9 sprints · 0 compliance exceptions",
 },
 {
 title: "B2B FRAUD &\nDISPUTES PLATFORM",
 company: "American Express",
 description:
 "Drove dispute lifecycle redesign and product execution across 32,000+ accounts. Built a data-informed prioritization framework across Finance, Fraud, Legal, and Risk teams, cut dispute resolution time from 28 to 24 days.",
 tags: ["SAFe Agile", "Azure DevOps", "SQL", "Power BI"],
 metric: "$10M+",
 metricLabel: "Commercial impact · 32K+ accounts · 0 scope creep",
 },
 {
 title: "FINANCIAL CRIME\nWORKFLOW RE-ENG",
 company: "NatWest / RBS",
 description:
 "Led end-to-end workflow redesign for FATCA/CRS compliance on a $500M+ AUM platform. Automated 70% of manual reconciliation using SQL, achieved 100% regulatory compliance, and cut processing cycle from 15 to 4 days.",
 tags: ["SQL", "Waterfall", "Process Mapping", "FATCA/CRS"],
 metric: "$450K",
 metricLabel: "Saved annually · 15→4 day cycle · 100% compliance",
 },
];

export default function Projects() {
 const { ref, inView } = useInView();

 return (
 <section id="projects" className="bg-canvas section-padding">
 <div className="max-w-[1440px] mx-auto" ref={ref}>
  <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4 }}
  className="mb-10"
  >
  <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
  Case Studies
  </p>
  <h2 className="font-display text-ink uppercase text-[clamp(40px,6vw,64px)] leading-[0.9] tracking-wide mt-2">
  FEATURED<br />PROJECTS
  </h2>
  </motion.div>

  {/* 3-up product card grid */}
  <div className="grid md:grid-cols-3 gap-px bg-cloud border border-hairline">
  {projects.map((project, i) => (
  <motion.div
   key={project.title}
   initial={{ opacity: 0, y: 20 }}
   animate={inView ? { opacity: 1, y: 0 } : {}}
   transition={{ duration: 0.45, delay: i * 0.1 }}
   className="bg-canvas flex flex-col"
  >
   {/* Image area cloud background as "product stage" */}
   <div className="bg-cloud aspect-[4/3] flex items-center justify-center p-8">
   <div className="text-center">
   <div className="font-display text-ink text-[clamp(32px,4vw,56px)] leading-[0.9] tracking-wide uppercase whitespace-pre-line">
    {project.title}
   </div>
   <div className="text-[11px] font-medium text-mute uppercase tracking-widest mt-3">
    {project.company}
   </div>
   </div>
   </div>

   {/* Card metadata */}
   <div className="p-6 flex flex-col flex-1">
   <p className="text-[14px] text-charcoal leading-relaxed mb-5 flex-1">
   {project.description}
   </p>

   {/* Tags */}
   <div className="flex flex-wrap gap-2 mb-5">
   {project.tags.map((tag) => (
    <span key={tag} className="filter-chip text-[12px]">
    {tag}
    </span>
   ))}
   </div>

   {/* Outcome sale-price style, inline, no badge bg */}
   <div className="hairline-top pt-4">
   <span className="text-[22px] font-medium text-ink">{project.metric}</span>
   <p className="text-[12px] font-medium text-mute mt-0.5">{project.metricLabel}</p>
   </div>
   </div>
  </motion.div>
  ))}
  </div>
 </div>
 </section>
 );
}
