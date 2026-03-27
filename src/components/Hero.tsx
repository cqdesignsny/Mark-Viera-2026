"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 md:pb-24">
      {/* Background: dark gradient with warm spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-[#0a0a0a] to-[#0e0e12]" />

      {/* Ambient neon glow spots */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/8 rounded-full blur-[100px]" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[400px] bg-neon-magenta/3 rounded-full blur-[80px]" />

      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Mark cutout image — positioned behind text on larger screens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 right-[5%] md:right-[10%] lg:right-[15%] w-[280px] sm:w-[340px] md:w-[420px] lg:w-[500px] pointer-events-none"
      >
        <Image
          src="/images/mark-cutout-smile.png"
          alt="Mark Viera — The Latin Assassin"
          width={500}
          height={700}
          className="object-contain object-bottom drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          priority
        />
        {/* Glow underneath the image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-neon-cyan/10 blur-[40px] rounded-full" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Tour name */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neon-cyan uppercase tracking-[0.4em] text-xs md:text-sm font-medium mb-4 animate-glow-pulse"
          >
            The Art of the Laugh Tour
          </motion.p>

          {/* Name — neon outline style like the flyers */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-[family-name:var(--font-heading)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tight leading-[0.9]"
          >
            <span className="text-neon-outline animate-neon-flicker">Mark</span>
            <br />
            <span className="text-gradient-gold">Viera</span>
          </motion.h1>

          {/* Tagline — cursive neon gold like the flyers */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 text-neon-gold text-xl md:text-2xl italic font-light tracking-wide"
            style={{ fontFamily: "Georgia, serif" }}
          >
            &ldquo;The Latin Assassin&rdquo;
          </motion.p>

          {/* Credits line */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-4 text-muted text-sm md:text-base tracking-wider uppercase"
          >
            HBO &bull; Showtime &bull; Comedy Central &bull; NBC &bull; BET
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-8 flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href="#shows"
              className="group relative px-8 py-4 bg-gold text-background font-bold uppercase tracking-wider text-sm rounded overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,68,0.4)] hover:scale-105"
            >
              <span className="relative z-10">Get Tickets</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#specials"
              className="px-8 py-4 border border-neon-cyan/30 text-neon-cyan font-medium uppercase tracking-wider text-sm rounded transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:bg-neon-cyan/5"
            >
              Watch Specials
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border border-neon-cyan/30 rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-neon-cyan rounded-full shadow-[0_0_4px_rgba(0,229,255,0.6)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
