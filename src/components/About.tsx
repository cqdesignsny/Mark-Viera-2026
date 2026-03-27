"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { bioShort } from "@/data/bio";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "20+", label: "Years in Comedy" },
  { value: "8", label: "TV Networks" },
  { value: "4", label: "Comedy Specials" },
  { value: "286K", label: "Instagram Followers" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-cyan/3 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px]" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo — new image with neon border treatment */}
          <AnimatedSection>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden glow-ambient"
            >
              <div className="absolute inset-0 rounded-xl border border-neon-cyan/20 z-20 pointer-events-none" />
              <Image
                src="/images/mark-hero-2.jpeg"
                alt="Mark Viera — The Latin Assassin, nationally touring comedian as seen on HBO, Showtime, Comedy Central, and NBC"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              {/* Corner accent */}
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <p className="text-neon-cyan text-xs uppercase tracking-[0.3em] font-medium">
                  As Seen On
                </p>
                <p className="text-foreground/70 text-xs mt-1 tracking-wider">
                  HBO &bull; Showtime &bull; Comedy Central &bull; NBC &bull; BET &bull; truTV
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Bio text */}
          <div>
            <AnimatedSection>
              <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3">
                About
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                The Latin
                <br />
                <span className="text-neon-outline">Assassin</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-muted text-lg leading-relaxed mb-8">
                {bioShort}
              </p>
              <Link
                href="/bio"
                className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-3"
              >
                Full Bio
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
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats bar */}
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ duration: 0.3 }}
                className="text-center py-6 px-4 rounded-xl bg-background border border-border card-glow"
              >
                <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-neon-cyan">
                  {stat.value}
                </p>
                <p className="text-muted text-xs mt-2 uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
