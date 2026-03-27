"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <AnimatedSection>
          <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3 animate-glow-pulse">
            Booking &amp; Events
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            <span className="text-neon-outline">Book</span>{" "}
            <span className="text-gradient-gold">Mark</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl mx-auto">
            Available for comedy clubs, corporate events, private parties,
            military shows, colleges, and festivals nationwide.
            Get in touch to book The Latin Assassin for your next event.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:booking@markviera.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gold text-background font-bold uppercase tracking-wider text-sm rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,68,0.4)]"
            >
              Email for Booking
            </motion.a>
            <motion.a
              href="/press"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 border border-neon-cyan/30 text-neon-cyan font-medium uppercase tracking-wider text-sm rounded-lg transition-all duration-300 hover:border-neon-cyan/60 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:bg-neon-cyan/5"
            >
              Press Kit
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Workshop promo */}
        <AnimatedSection delay={0.35}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="mt-16 p-8 rounded-xl border border-border card-glow bg-background"
          >
            <p className="text-neon-cyan uppercase tracking-[0.4em] text-[10px] font-bold mb-2">
              Learn from Mark
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
              Comedy <span className="text-gradient-gold">Workshops</span>
            </h3>
            <p className="text-muted text-base leading-relaxed max-w-lg mx-auto">
              From beginner to advanced — learn the art of stand-up comedy
              directly from a 20-year veteran. 1-on-1 coaching sessions available.
            </p>
            <a
              href="https://markviera.com/product-category/workshops/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-3"
            >
              View Workshops
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
