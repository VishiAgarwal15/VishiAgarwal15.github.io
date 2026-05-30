"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-canvas transition-shadow duration-200 ${
        scrolled ? "shadow-[inset_0_-1px_0_#e5e7eb]" : ""
      }`}
    >
      {/* Utility bar */}
      <div className="bg-cloud hidden md:flex items-center justify-end px-6 md:px-12 lg:px-20 h-9">
        <div className="flex items-center gap-6 text-[12px] font-medium text-ink">
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Download Resume</a>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between shadow-[inset_0_-1px_0_#e5e7eb]">
        {/* Logo */}
        <a href="#hero" className="font-display text-2xl text-ink tracking-wider uppercase">
          VA
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[15px] font-medium text-ink hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="btn-primary text-sm px-6 h-10">
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-canvas shadow-[inset_0_-1px_0_#cacacb]">
          <ul className="flex flex-col divide-y divide-hairline-soft">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-4 text-[15px] font-medium text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-6 py-4">
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary w-full justify-center">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
