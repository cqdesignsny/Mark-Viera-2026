"use client";

import Image from "next/image";
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
    <section id="about" className="relative py-24 md:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <AnimatedSection>
            <div className="relative aspect-[3/4] bg-surface-light rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/headshot-portrait.jpeg"
                alt="Mark Viera - The Latin Assassin"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Spotlight overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </AnimatedSection>

          {/* Bio text */}
          <div>
            <AnimatedSection>
              <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
                About
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
                The Latin
                <br />
                <span className="text-gradient-gold">Assassin</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-muted text-lg leading-relaxed mb-8">
                {bioShort}
              </p>
              <a
                href="/bio"
                className="text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-colors"
              >
                Full Bio &rarr;
              </a>
            </AnimatedSection>
          </div>
        </div>

        {/* Stats bar */}
        <AnimatedSection delay={0.2} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center py-6 px-4 rounded-lg bg-background border border-border"
              >
                <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-gold">
                  {stat.value}
                </p>
                <p className="text-muted text-sm mt-1 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
