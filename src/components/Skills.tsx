"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const skillGroups = [
 {
 category: "Product & Platform",
 skills: ["Product Roadmap", "Backlog Management", "Feature Prioritization", "PRD Writing", "User Stories", "Platform Tooling", "Client Onboarding", "Engagement Loops", "Data-Informed Decisions"],
 },
 {
 category: "Agile & Delivery",
 skills: ["Agile", "Scrum", "SAFe", "Kanban", "Waterfall", "SDLC", "Sprint Planning", "Backlog Refinement"],
 },
 {
 category: "Data & AI",
 skills: ["SQL", "Power BI", "Product Analytics", "Amplitude", "Mixpanel", "KPI Tracking", "AI Agent Workflows", "API Integration", "Prompt Engineering"],
 },
 {
 category: "Tools",
 skills: ["Jira", "Confluence", "Azure DevOps", "GitHub", "Asana", "Trello", "Excel", "PowerPoint", "Microsoft Teams"],
 },
 {
 category: "Leadership",
 skills: ["Cross-Functional Collaboration", "Stakeholder Management", "Ownership Instinct", "Written & Verbal Communication", "Business Judgment", "Scrappy Execution"],
 },
];

const certifications = [
 {
 name: "CSM",
 full: "Certified ScrumMaster",
 issuer: "Scrum Alliance",
 status: "Active",
 },
 {
 name: "CSPO",
 full: "Certified Scrum Product Owner",
 issuer: "Scrum Alliance",
 status: "Active",
 },
 {
 name: "PMP",
 full: "Project Management Professional",
 issuer: "PMI",
 status: "Approved",
 },
];

export default function Skills() {
 const { ref, inView } = useInView();

 return (
 <section id="skills" className="bg-canvas section-padding">
 <div className="max-w-[1440px] mx-auto" ref={ref}>
  <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4 }}
  className="mb-10"
  >
  <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
  Expertise
  </p>
  <h2 className="font-display text-ink uppercase text-[clamp(40px,6vw,64px)] leading-[0.9] tracking-wide mt-2">
  SKILLS &<br />CERTS
  </h2>
  </motion.div>

  {/* Skill rows filter sidebar style */}
  <div className="mb-16">
  {skillGroups.map((group, i) => (
  <motion.div
   key={group.category}
   initial={{ opacity: 0, y: 10 }}
   animate={inView ? { opacity: 1, y: 0 } : {}}
   transition={{ duration: 0.4, delay: i * 0.08 }}
   className="py-6 hairline-bottom"
  >
   <p className="text-[12px] font-medium uppercase tracking-widest text-mute mb-4">
   {group.category}
   </p>
   <div className="flex flex-wrap gap-2">
   {group.skills.map((skill) => (
   <span key={skill} className="filter-chip">
    {skill}
   </span>
   ))}
   </div>
  </motion.div>
  ))}
  </div>

  {/* Certifications 3-up flat cards */}
  <div>
  <p className="text-[12px] font-medium uppercase tracking-widest text-mute mb-6">
  Certifications
  </p>
  <div className="grid sm:grid-cols-3 gap-px bg-cloud border border-hairline">
  {certifications.map((cert, i) => (
   <motion.div
   key={cert.name}
   initial={{ opacity: 0, y: 12 }}
   animate={inView ? { opacity: 1, y: 0 } : {}}
   transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
   className="bg-canvas p-8"
   >
   <div className="font-display text-ink text-[56px] leading-none tracking-wide">
   {cert.name}
   </div>
   <div className="text-[14px] font-medium text-ink mt-2">{cert.full}</div>
   <div className="text-[12px] font-medium text-mute mt-1">{cert.issuer}</div>
   <div className="mt-4">
   <span className="inline-flex items-center px-3 py-1 rounded-pill text-[11px] font-medium bg-ink text-white">{cert.status}</span>
   </div>
   </motion.div>
  ))}
  </div>
  </div>
 </div>
 </section>
 );
}
