"use client";

import { motion } from "framer-motion";
import { pressItems, tvCredits } from "@/data/press";
import AnimatedSection from "./AnimatedSection";

export default function Press() {
  return (
    <section id="press" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-gold/4 rounded-full blur-[100px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3 animate-glow-pulse">
            As Seen On
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Press &amp; <span className="text-gradient-gold">Credits</span>
          </h2>
        </AnimatedSection>

        {/* TV Network credits — neon badges */}
        <AnimatedSection delay={0.1} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
            {tvCredits.map((network, i) => (
              <motion.div
                key={network}
                whileHover={{ scale: 1.1, y: -3 }}
                transition={{ duration: 0.2 }}
                className="px-5 py-3 rounded-lg border border-border-glow bg-surface card-glow"
              >
                <p className="font-[family-name:var(--font-heading)] text-base md:text-lg font-bold uppercase tracking-wider text-neon-cyan">
                  {network}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Press quotes */}
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {pressItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={0.15 + i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-xl bg-surface card-glow h-full flex flex-col"
              >
                <svg
                  className="w-8 h-8 text-gold/40 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-foreground text-base leading-relaxed flex-1 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-gold text-sm font-medium mt-4 uppercase tracking-wider">
                  &mdash; {item.outlet}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="/press"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-3"
          >
            View Press Kit
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
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
