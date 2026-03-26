"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-wide.jpg"
          alt="Mark Viera performing live on stage"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Background gradient spotlight */}
      <div className="absolute inset-0 spotlight-glow" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Subtle animated border at bottom */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-4"
        >
          The Latin Assassin
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-[family-name:var(--font-heading)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-none"
        >
          <span className="text-gradient-gold">Mark</span>
          <br />
          <span className="text-foreground">Viera</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          Comedian &bull; Storyteller &bull; As Seen on HBO, Showtime &amp;
          Comedy Central
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#shows"
            className="px-8 py-4 bg-gold text-background font-bold uppercase tracking-wider text-sm rounded hover:bg-gold-light transition-all duration-200 hover:scale-105"
          >
            Get Tickets
          </a>
          <a
            href="#specials"
            className="px-8 py-4 border border-border text-foreground font-medium uppercase tracking-wider text-sm rounded hover:border-gold hover:text-gold transition-all duration-200"
          >
            Watch Specials
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
