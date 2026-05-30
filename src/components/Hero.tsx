"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex flex-col justify-end overflow-hidden pt-24"
    >
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <span className="inline-block border border-ink/30 text-ink text-[12px] font-medium tracking-widest uppercase px-4 py-1.5 rounded-pill">
            CSM · CSPO · PMP Approved
          </span>
        </motion.div>

        {/* Display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display text-ink uppercase leading-[0.9] text-[clamp(64px,12vw,140px)] tracking-wide"
        >
          VISHI<br />AGARWAL
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-mute text-base font-medium max-w-md leading-relaxed"
        >
          Product Manager & Project Manager — 6+ years shipping data-informed
          B2B solutions across AI compliance and financial services.{" "}
          <span className="text-ink font-semibold">$10M+ commercial impact.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-ink/10 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "6+", label: "Years Experience" },
            { value: "$10M+", label: "Commercial Impact" },
            { value: "32K+", label: "Accounts Managed" },
            { value: "3", label: "Certifications" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-ink text-[clamp(32px,5vw,48px)] leading-none tracking-wide">
                {stat.value}
              </div>
              <div className="text-mute text-[12px] font-medium uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
