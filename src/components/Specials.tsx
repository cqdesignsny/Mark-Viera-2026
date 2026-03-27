"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { specials } from "@/data/specials";
import AnimatedSection from "./AnimatedSection";

export default function Specials() {
  return (
    <section id="specials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-neon-magenta/4 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-cyan/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3 animate-glow-pulse">
            Watch Now
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Comedy{" "}
            <span className="text-gradient-gold">Specials</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {specials.map((special, i) => (
            <AnimatedSection key={special.id} delay={i * 0.1}>
              <motion.a
                href={special.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group block rounded-xl overflow-hidden card-glow bg-surface"
              >
                {/* Poster */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={special.image}
                    alt={`${special.title} — ${special.platform} comedy special by Mark Viera`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent group-hover:from-background/80 group-hover:via-transparent transition-all duration-500" />

                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-neon-cyan/90 flex items-center justify-center shadow-[0_0_30px_rgba(0,229,255,0.5)]"
                    >
                      <svg
                        className="w-6 h-6 text-background ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Platform badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-background/70 backdrop-blur-sm rounded-full border border-border-glow">
                    <p className="text-neon-cyan text-[10px] uppercase tracking-wider font-bold">
                      {special.platform}
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-surface">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide group-hover:text-neon-cyan transition-colors duration-300">
                      {special.title}
                    </h3>
                    <span className="text-muted text-sm font-mono">{special.year}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {special.description}
                  </p>
                  <p className="mt-3 text-gold text-sm font-medium uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300 inline-flex items-center gap-1.5">
                    Watch Now
                    <svg
                      className="w-3.5 h-3.5"
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
                  </p>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
