"use client";

import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            Booking
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Book Mark
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl mx-auto">
            Available for comedy clubs, corporate events, private parties,
            military shows, and festivals. Get in touch to book The Latin
            Assassin for your next event.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.25}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:booking@markviera.com"
              className="px-8 py-4 bg-gold text-background font-bold uppercase tracking-wider text-sm rounded hover:bg-gold-light transition-all duration-200 hover:scale-105"
            >
              Email for Booking
            </a>
            <a
              href="/press"
              className="px-8 py-4 border border-border text-foreground font-medium uppercase tracking-wider text-sm rounded hover:border-gold hover:text-gold transition-all duration-200"
            >
              Press Kit
            </a>
          </div>
        </AnimatedSection>

        {/* Workshop promo */}
        <AnimatedSection delay={0.35}>
          <div className="mt-16 p-8 rounded-lg border border-border bg-background">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-medium mb-2">
              Learn from Mark
            </p>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold uppercase tracking-tight mb-3">
              Comedy Workshops
            </h3>
            <p className="text-muted text-base leading-relaxed max-w-lg mx-auto">
              From beginner to advanced — learn the art of stand-up comedy
              directly from a 20-year veteran. 1-on-1 sessions available.
            </p>
            <a
              href="https://markviera.com/product-category/workshops/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-colors"
            >
              View Workshops &rarr;
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
