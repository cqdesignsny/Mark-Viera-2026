"use client";

import Image from "next/image";
import { specials } from "@/data/specials";
import AnimatedSection from "./AnimatedSection";

export default function Specials() {
  return (
    <section id="specials" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            Watch Now
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Comedy Specials
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {specials.map((special, i) => (
            <AnimatedSection key={special.id} delay={i * 0.1}>
              <a
                href={special.watchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden border border-border hover:border-gold/50 transition-all duration-300"
              >
                {/* Poster area with real image */}
                <div className="relative aspect-video bg-surface-light overflow-hidden">
                  <Image
                    src={special.image}
                    alt={`${special.title} — ${special.platform}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors duration-300" />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-6 h-6 text-background ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 bg-surface">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wide group-hover:text-gold transition-colors">
                      {special.title}
                    </h3>
                    <span className="text-muted text-sm">{special.year}</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {special.description}
                  </p>
                  <p className="mt-3 text-gold text-sm font-medium uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Watch Now &rarr;
                  </p>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
