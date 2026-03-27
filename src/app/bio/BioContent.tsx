"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

interface Props {
  bioFull: string;
  milestones: { year: string; text: string }[];
}

export default function BioContent({ bioFull, milestones }: Props) {
  const paragraphs = bioFull.split("\n\n");

  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header with photo */}
        <div className="grid md:grid-cols-[1fr_280px] gap-10 items-start mb-16">
          <div>
            <AnimatedSection>
              <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3 animate-glow-pulse">
                The Full Story
              </p>
              <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-[0.9]">
                <span className="text-neon-outline">Mark</span>{" "}
                <span className="text-gradient-gold">Viera</span>
              </h1>
              <p className="text-neon-gold text-xl mt-3 italic" style={{ fontFamily: "Georgia, serif" }}>
                &ldquo;The Latin Assassin&rdquo;
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-muted text-sm uppercase tracking-widest">
                Bronx-Born &bull; Puerto Rican &bull; Nationally Touring Comedian
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden border border-neon-cyan/20 shadow-[0_0_30px_rgba(0,229,255,0.08)]"
            >
              <Image
                src="/images/mark-praying.jpeg"
                alt="Mark Viera — The Latin Assassin"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>
          </AnimatedSection>
        </div>

        {/* Bio text */}
        <div className="space-y-6">
          {paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <p className="text-muted text-lg leading-relaxed">{p}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Career timeline */}
        <AnimatedSection delay={0.1} className="mt-20">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10">
            Career <span className="text-neon-cyan">Milestones</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line — neon */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan/40 via-gold/30 to-neon-cyan/40" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={0.05 * i}>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-6 md:gap-8 relative"
                >
                  {/* Dot */}
                  <div className="relative z-10 w-8 md:w-12 flex-shrink-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_8px_rgba(0,229,255,0.5)]" />
                  </div>

                  <div className="flex-1 pb-2">
                    <p className="text-neon-cyan text-xs font-bold uppercase tracking-widest mb-1">
                      {m.year}
                    </p>
                    <p className="text-foreground text-base md:text-lg">
                      {m.text}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Back link */}
        <AnimatedSection className="mt-16 flex items-center gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-neon-cyan text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-3"
          >
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Home
          </Link>
          <a
            href="mailto:booking@markviera.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background font-bold uppercase tracking-wider text-xs rounded-lg hover:shadow-[0_0_20px_rgba(212,168,68,0.4)] transition-all duration-300"
          >
            Book Mark
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
