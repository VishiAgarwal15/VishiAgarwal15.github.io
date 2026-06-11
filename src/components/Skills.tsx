"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const skillGroups = [
  {
    category: "Agile & Product",
    skills: [
      "Product Roadmap", "Backlog Management", "User Story Writing",
      "Business Requirements Documentation", "BRD/FRD", "Gap Analysis",
      "Process Mapping", "Sprint Planning", "UAT/SIT", "Defect Triage",
      "SAFe", "Scrum", "CSPO", "CSM",
    ],
  },
  {
    category: "Domain",
    skills: [
      "BFSI", "Digital Banking Solutions", "Payments", "Lending",
      "Credit Underwriting", "Fraud Risk", "Regulatory Compliance",
      "KYC/AML", "FATCA/CRS",
    ],
  },
  {
    category: "Data & Tools",
    skills: [
      "Advanced Excel", "SQL", "Jira", "Confluence", "Azure DevOps",
      "Power BI", "MS Project", "Smartsheet", "Asana", "GitHub",
      "Prompt Engineering",
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      "Stakeholder Management", "Cross-Functional Leadership", "Coaching",
      "Problem Solving", "Customer-Centered Design", "Communication",
    ],
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
            SKILLS
          </h2>
        </motion.div>

        <div>
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
