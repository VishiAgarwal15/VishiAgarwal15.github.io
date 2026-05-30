"use client";

import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const education = [
  {
    degree: "Master of Science",
    field: "Project Management (STEM)",
    school: "Northeastern University, California",
    period: "Jan 2025 – Jun 2026",
    description:
      "STEM-designated MS in Project Management. Focused on enterprise project governance, Agile delivery, risk management, and strategic leadership.",
  },
  {
    degree: "Bachelor of Commerce",
    field: "Finance",
    school: "University of Delhi",
    period: "Jul 2014 – Jun 2017",
    description:
      "Foundation in financial analysis, corporate strategy, and quantitative methods. Core coursework in accounting, economics, and business law.",
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="bg-canvas section-padding hairline-bottom">
      <div className="max-w-[1440px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
            Academic Background
          </p>
          <h2 className="font-display text-ink uppercase text-[clamp(40px,6vw,64px)] leading-[0.9] tracking-wide mt-2">
            EDUCATION
          </h2>
        </motion.div>

        {/* 2-up flat cards */}
        <div className="grid md:grid-cols-2 gap-px bg-cloud border border-hairline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-canvas p-10"
            >
              <div className="text-[11px] font-medium text-mute uppercase tracking-widest mb-4">
                {edu.period}
              </div>
              <div className="font-display text-ink text-[clamp(28px,4vw,40px)] leading-[0.9] tracking-wide uppercase">
                {edu.degree}
              </div>
              <div className="text-[15px] font-medium text-ink mt-3">{edu.field}</div>
              <div className="text-[14px] font-medium text-mute mt-1">{edu.school}</div>
              <p className="text-[14px] text-charcoal leading-relaxed mt-5">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
