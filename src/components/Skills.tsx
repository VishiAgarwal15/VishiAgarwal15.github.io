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

        {/* Certifications */}
        <div>
          <div className="mb-8 pt-4">
            <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
              Credentials
            </p>
            <h3 className="font-display text-ink uppercase text-[clamp(32px,5vw,52px)] leading-[0.9] tracking-wide mt-2">
              CERTIFICATIONS
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-cloud border border-hairline">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="bg-canvas flex flex-col"
              >
                {/* Stage — matches project card style */}
                <div className="bg-cloud aspect-[4/3] flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="font-display text-ink text-[clamp(48px,6vw,80px)] leading-[0.9] tracking-wide uppercase">
                      {cert.name}
                    </div>
                    <div className="text-[11px] font-medium text-mute uppercase tracking-widest mt-3">
                      {cert.issuer}
                    </div>
                  </div>
                </div>
                {/* Metadata */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-[15px] font-medium text-ink mb-2">{cert.full}</p>
                  <p className="text-[13px] text-mute mb-5">{cert.issuer}</p>
                  <div className="hairline-top pt-4 mt-auto">
                    <span className="inline-flex items-center px-3 py-1 rounded-pill text-[11px] font-medium bg-ink text-white">
                      {cert.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
