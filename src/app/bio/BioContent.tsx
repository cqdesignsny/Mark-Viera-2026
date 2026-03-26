"use client";

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
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            The Full Story
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
            Mark Viera
          </h1>
          <p className="text-muted text-xl mt-2 font-medium">
            The Latin Assassin
          </p>
        </AnimatedSection>

        {/* Bio text */}
        <div className="mt-12 space-y-6">
          {paragraphs.map((p, i) => (
            <AnimatedSection key={i} delay={0.05 * i}>
              <p className="text-muted text-lg leading-relaxed">{p}</p>
            </AnimatedSection>
          ))}
        </div>

        {/* Career timeline */}
        <AnimatedSection delay={0.1} className="mt-20">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold uppercase tracking-tight mb-10">
            Career <span className="text-gradient-gold">Milestones</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <AnimatedSection key={i} delay={0.05 * i}>
                <div className="flex items-start gap-6 md:gap-8 relative">
                  {/* Dot */}
                  <div className="relative z-10 w-8 md:w-12 flex-shrink-0 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-gold" />
                  </div>

                  <div className="flex-1 pb-2">
                    <p className="text-gold text-sm font-medium uppercase tracking-wider mb-1">
                      {m.year}
                    </p>
                    <p className="text-foreground text-base md:text-lg">
                      {m.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Back link */}
        <AnimatedSection className="mt-16">
          <a
            href="/"
            className="text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-colors"
          >
            &larr; Back to Home
          </a>
        </AnimatedSection>
      </div>
    </div>
  );
}
