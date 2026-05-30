"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

const contactLinks = [
 {
 label: "Email",
 value: "vishiagarwal02@gmail.com",
 href: "mailto:vishiagarwal02@gmail.com",
 icon: (
 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 ),
 },
 {
 label: "LinkedIn",
 value: "linkedin.com/in/vishi-agarwal",
 href: "https://linkedin.com/in/vishi-agarwal",
 icon: (
 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
 </svg>
 ),
 },
 {
 label: "Phone",
 value: "+91 99532 18262",
 href: "tel:+919953218262",
 icon: (
 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
 </svg>
 ),
 },
];

export default function Contact() {
 const { ref, inView } = useInView();
 const [formState, setFormState] = useState({ name: "", email: "", message: "" });
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
 setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e: React.FormEvent) => {
 e.preventDefault();
 setSubmitted(true);
 setFormState({ name: "", email: "", message: "" });
 setTimeout(() => setSubmitted(false), 4000);
 };

 return (
 <section id="contact" className="bg-canvas section-padding hairline-top">
 <div className="max-w-[1440px] mx-auto" ref={ref}>
  <motion.div
  initial={{ opacity: 0, y: 12 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4 }}
  className="mb-10"
  >
  <p className="text-[12px] font-medium uppercase tracking-widest text-ink">
  Get In Touch
  </p>
  <h2 className="font-display text-ink uppercase text-[clamp(40px,6vw,64px)] leading-[0.9] tracking-wide mt-2">
  LET&apos;S<br />CONNECT
  </h2>
  </motion.div>

  <div className="grid md:grid-cols-2 gap-16 items-start">
  {/* Contact links */}
  <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.1 }}
  >
  <p className="text-mute text-[15px] leading-relaxed mb-8 max-w-sm">
   Whether you have a role in mind, a project to discuss, or just want
   to connect my inbox is always open.
  </p>
  <div className="space-y-0">
   {contactLinks.map((link) => (
   <a
   key={link.label}
   href={link.href}
   target={link.label === "LinkedIn" ? "_blank" : undefined}
   rel="noopener noreferrer"
   className="flex items-center gap-4 py-5 border-b border-hairline group"
   >
   <div className="text-mute group-hover:text-ink transition-colors">
    {link.icon}
   </div>
   <div className="flex-1">
    <div className="text-[11px] font-medium uppercase tracking-widest text-stone">
    {link.label}
    </div>
    <div className="text-[14px] font-medium text-ink group-hover:text-ink transition-colors">
    {link.value}
    </div>
   </div>
   <svg className="w-4 h-4 text-mute group-hover:text-ink transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
   </svg>
   </a>
   ))}
  </div>
  </motion.div>

  {/* Contact form */}
  <motion.form
  initial={{ opacity: 0, x: 20 }}
  animate={inView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.15 }}
  onSubmit={handleSubmit}
  className="space-y-4"
  >
  {[
   { id: "name", label: "Name", type: "text", placeholder: "Your name" },
   { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  ].map((field) => (
   <div key={field.id}>
   <label htmlFor={field.id} className="block text-[12px] font-medium uppercase tracking-widest text-mute mb-2">
   {field.label}
   </label>
   <input
   id={field.id}
   name={field.id}
   type={field.type}
   required
   value={formState[field.id as keyof typeof formState]}
   onChange={handleChange}
   placeholder={field.placeholder}
   className="w-full bg-white border border-hairline text-ink placeholder-stone text-[14px] font-medium px-4 py-3 focus:outline-none focus:border-ink transition-colors"
   />
   </div>
  ))}
  <div>
   <label htmlFor="message" className="block text-[12px] font-medium uppercase tracking-widest text-mute mb-2">
   Message
   </label>
   <textarea
   id="message"
   name="message"
   required
   rows={5}
   value={formState.message}
   onChange={handleChange}
   placeholder="Tell me about your project or opportunity..."
   className="w-full bg-white border border-hairline text-ink placeholder-stone text-[14px] font-medium px-4 py-3 focus:outline-none focus:border-ink transition-colors resize-none"
   />
  </div>
  <button
   type="submit"
   className="btn-outline-on-image w-full justify-center mt-2"
  >
   {submitted ? (
   <>
   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
   </svg>
   Message Sent
   </>
   ) : (
   "Send Message"
   )}
  </button>
  </motion.form>
  </div>

  {/* Footer */}
  <div className="mt-20 pt-8 border-t border-hairline flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
  <p className="text-[12px] font-medium text-mute">
  &copy; {new Date().getFullYear()} Vishi Agarwal. Built with Next.js &amp; Tailwind CSS.
  </p>
  <p className="text-[9px] font-medium text-stone uppercase tracking-widest">
  Delhi, India · vishiagarwal02@gmail.com
  </p>
  </div>
 </div>
 </section>
 );
}
