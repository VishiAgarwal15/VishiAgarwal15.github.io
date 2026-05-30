"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const projects = [
  {
    title: "AI COMPLIANCE\nPLATFORM",
    company: "Evenness",
    description:
      "Managed end-to-end project governance for 3 AI agent workflows across 9 sprints; achieved 100% on-time delivery using Jira and Confluence with zero compliance exceptions.",
    tags: ["Jira", "Confluence", "Agile", "SAFe", "Risk Management"],
    metric: "100%",
    metricLabel: "On-time delivery · 9 sprints · 0 compliance exceptions",
  },
  {
    title: "SUPER BOWL LX\nSILICON VALLEY",
    company: "Silicon Valley Chamber of Commerce",
    description:
      "Led cross-functional project delivery for Silicon Valley Sporting Events 2026 in partnership with Northeastern University; coordinated stakeholder communications, managed timelines, and ensured execution aligned to governance standards across a large-scale public event.",
    tags: ["Stakeholder Management", "Event Delivery", "Cross-Functional"],
    metric: "2026",
    metricLabel: "Large-scale public event · Northeastern University partnership",
  },
  {
    title: "PAYMENT DISPUTE\nPROGRAM",
    company: "American Express",
    description:
      "Managed timelines, budgets, and risk escalation for B2B dispute workflows across 32K+ accounts; generated $10M+ impact with zero scope creep in a SAFe environment.",
    tags: ["SAFe", "Azure DevOps", "SQL", "Power BI", "Budget Management"],
    metric: "$10M+",
    metricLabel: "Annual impact · 32K+ accounts · 0 scope creep",
  },
  {
    title: "TAX RECONCILIATION\nRE-ENGINEERING",
    company: "NatWest / RBS",
    description:
      "Led dependency tracking and process innovation on a $500M+ AUM platform; automated 70% of reconciliation workflows and cut processing time from 15 to 4 days, saving $450K annually.",
    tags: ["SQL", "FATCA/CRS", "Process Redesign", "Workflow Automation"],
    metric: "$450K",
    metricLabel: "Saved annually · 15 to 4 day cycle · 100% compliance",
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

        {/* 2x2 grid for 4 projects */}
        <div className="grid md:grid-cols-2 gap-px bg-cloud border border-hairline">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-canvas flex flex-col"
            >
              {/* Stage */}
              <div className="bg-cloud aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="font-display text-ink text-[clamp(28px,3.5vw,48px)] leading-[0.9] tracking-wide uppercase whitespace-pre-line">
                    {project.title}
                  </div>
                  <div className="text-[11px] font-medium text-mute uppercase tracking-widest mt-3">
                    {project.company}
                  </div>
                </div>
              </div>

              {/* Metadata */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[14px] text-charcoal leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="filter-chip text-[12px]">
                      {tag}
                    </span>
                  ))}
                </div>
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
