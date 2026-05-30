"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-[inset_0_-1px_0_#e5e7eb]" : "shadow-[inset_0_-1px_0_#e5e7eb]"
      }`}
    >
      {/* Utility bar */}
      <div className="bg-cloud hidden md:flex items-center justify-end px-6 md:px-12 lg:px-20 h-9">
        <div className="flex items-center gap-6 text-[12px] font-medium text-ink">
          <a href="mailto:vishiagarwal02@gmail.com" className="hover:underline">vishiagarwal02@gmail.com</a>
          <span className="text-stone">·</span>
          <a href="tel:+14085911490" className="hover:underline">(408) 591-1490</a>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl text-ink tracking-wider uppercase">
          VA
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors duration-200 ${
                    active
                      ? "text-ink underline underline-offset-4"
                      : "text-mute hover:text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hire Me CTA */}
        <div className="hidden md:flex">
          <Link href="/contact" className="btn-primary text-sm px-6 h-10">
            Hire Me
          </Link>
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
        <div className="md:hidden bg-white shadow-[inset_0_-1px_0_#d1d5db]">
          <ul className="flex flex-col divide-y divide-[#e5e7eb]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-6 py-4 text-[15px] font-medium ${
                    pathname === link.href ? "text-ink" : "text-mute"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
