"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    category: "Project Delivery",
    skills: ["End-to-End Project Management", "Program Management", "Project Governance", "Timeline & Budget Management", "Resource Coordination", "Agile & SAFe", "SDLC", "Sprint Planning"],
  },
  {
    category: "Tools",
    skills: ["Jira", "Confluence", "Azure DevOps", "Asana", "SQL", "Power BI", "Excel", "GitHub", "Trello", "AI Tools", "Prompt Engineering"],
  },
  {
    category: "Risk & Compliance",
    skills: ["Risk Identification", "Mitigation Strategies", "Dependency Management", "Compliance Oversight", "Industry Standards"],
  },
  {
    category: "Stakeholder Management",
    skills: ["Cross-Functional Collaboration", "Executive Reporting", "Onshore/Offshore Coordination", "Stakeholder Communication", "Retail Project Management"],
  },
  {
    category: "Process Innovation",
    skills: ["Continuous Improvement", "Process Redesign", "Workflow Automation", "Project Lifecycle Management"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Decision-Making", "Effective Communication", "Time Management", "Detail-Oriented", "Analytical Ability"],
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

        {/* Skill rows */}
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

      </div>
    </section>
  );
}
