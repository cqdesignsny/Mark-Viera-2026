"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shows", href: "/#shows" },
  { label: "About", href: "/#about" },
  { label: "Specials", href: "/#specials" },
  { label: "Videos", href: "/#videos" },
  { label: "Press", href: "/#press" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  function getHref(link: { href: string }) {
    if (isHome) {
      // On homepage, use anchor-only for smooth scroll
      return link.href.replace("/", "");
    }
    // On sub-pages, link back to homepage + anchor
    return link.href;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border-glow"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/images/mv-logo-white.png"
              alt="Mark Viera Comedy"
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
          <span className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wider uppercase text-neon-cyan animate-neon-flicker">
            Mark Viera
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={getHref(link)}
                className="relative text-sm font-medium uppercase tracking-widest text-muted hover:text-neon-cyan transition-all duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-cyan group-hover:w-full transition-all duration-300 shadow-[0_0_5px_rgba(0,229,255,0.5)]" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={isHome ? "#shows" : "/#shows"}
              className="ml-2 px-5 py-2 bg-gold text-background text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,68,0.4)] hover:scale-105"
            >
              Get Tickets
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-neon-cyan"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="block w-6 h-0.5 bg-neon-cyan"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-neon-cyan"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-t border-border-glow px-6 py-8">
              <ul className="flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={getHref(link)}
                      onClick={() => setMobileOpen(false)}
                      className="block text-lg font-medium uppercase tracking-widest text-muted hover:text-neon-cyan transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-3"
                >
                  <Link
                    href={isHome ? "#shows" : "/#shows"}
                    onClick={() => setMobileOpen(false)}
                    className="inline-block px-6 py-3 bg-gold text-background font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,68,0.4)]"
                  >
                    Get Tickets
                  </Link>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
