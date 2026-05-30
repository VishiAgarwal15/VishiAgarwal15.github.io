import Link from "next/link";

export default function PageShell({ children }: { children: React.ReactNode }) {
 return (
 <>
 <main className="pt-[88px] min-h-screen">
  {children}
 </main>
 <footer className="bg-white hairline-top">
  <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
  <Link href="/" className="font-display text-ink text-xl tracking-wider uppercase">
  VA
  </Link>
  <nav className="flex flex-wrap gap-6">
  {[
   { label: "About", href: "/about" },
   { label: "Experience", href: "/experience" },
   { label: "Projects", href: "/projects" },
   { label: "Skills", href: "/skills" },
   { label: "Contact", href: "/contact" },
  ].map((link) => (
   <Link
   key={link.href}
   href={link.href}
   className="text-[13px] font-medium text-mute hover:text-ink transition-colors"
   >
   {link.label}
   </Link>
  ))}
  </nav>
  <p className="text-[11px] font-medium text-stone uppercase tracking-widest">
  &copy; {new Date().getFullYear()} Vishi Agarwal
  </p>
  </div>
 </footer>
 </>
 );
}
