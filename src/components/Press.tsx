"use client";

import { pressItems, tvCredits } from "@/data/press";
import AnimatedSection from "./AnimatedSection";

export default function Press() {
  return (
    <section id="press" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            As Seen On
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Press &amp; Credits
          </h2>
        </AnimatedSection>

        {/* TV Network credits */}
        <AnimatedSection delay={0.1} className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {tvCredits.map((network) => (
              <div
                key={network}
                className="px-6 py-3 border border-border rounded-lg"
              >
                <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl font-bold uppercase tracking-wider text-muted">
                  {network}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Press quotes */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {pressItems.map((item, i) => (
            <AnimatedSection key={item.id} delay={0.15 + i * 0.1}>
              <div className="p-6 rounded-lg bg-surface border border-border h-full flex flex-col">
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
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="/press"
            className="text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-colors"
          >
            View Press Kit &rarr;
          </a>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
