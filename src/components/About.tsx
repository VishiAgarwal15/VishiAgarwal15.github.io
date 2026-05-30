"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "../hooks/useInView";

export default function About() {
 const { ref, inView } = useInView();

 return (
 <section id="about" className="bg-canvas section-padding hairline-bottom">
 <div className="max-w-[1440px] mx-auto" ref={ref}>
  {/* Section label */}
  <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4 }}
  className="mb-10"
  >
  <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
  Who I Am
  </p>
  <h2 className="font-display text-ink uppercase text-[clamp(40px,6vw,64px)] leading-[0.9] tracking-wide mt-2">
  ABOUT ME
  </h2>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-12 md:gap-20">
  {/* Bio */}
  <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.1 }}
  >
  <p className="text-base text-charcoal leading-relaxed mb-5">
   Product Manager and Product Owner with 6+ years of experience
   shipping data-informed B2B solutions across AI compliance,
   financial services, and payment platforms. I own end-to-end
   workstreams from discovery and PRD writing to sprint delivery
   and stakeholder sign-off. I don&apos;t wait for permission to
   move fast.
  </p>
  <p className="text-base text-charcoal leading-relaxed mb-8">
   At American Express, I drove $10M+ in commercial impact managing
   dispute workflows across 32,000+ accounts. At NatWest, I cut a
   15-day processing cycle down to 4 days on a $500M+ AUM platform.
   At Evenness, I shipped AI compliance features with 100% on-time
   delivery across 9 sprints. CSM &amp; CSPO certified through Scrum
   Alliance, PMP approved through PMI.
  </p>
  <Link
   href="/contact"
   className="inline-flex items-center gap-2 text-ink font-medium text-sm underline underline-offset-4"
  >
   Let&apos;s work together
   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
   </svg>
  </Link>
  </motion.div>

  {/* Key signals */}
  <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.15 }}
  className="grid grid-cols-2 gap-px bg-cloud border border-hairline"
  >
  {[
   { value: "6+", label: "Years Experience" },
   { value: "$10M+", label: "Commercial Impact" },
   { value: "32K+", label: "Accounts Managed" },
   { value: "3", label: "Certifications" },
  ].map((stat) => (
   <div key={stat.label} className="bg-canvas p-8">
   <div className="font-display text-ink text-[48px] leading-none tracking-wide">
   {stat.value}
   </div>
   <div className="text-mute text-[12px] font-medium uppercase tracking-widest mt-2">
   {stat.label}
   </div>
   </div>
  ))}
  </motion.div>
  </div>
 </div>
 </section>
 );
}
