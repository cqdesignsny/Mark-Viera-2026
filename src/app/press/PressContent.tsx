"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { tvCredits } from "@/data/press";

const tvShows = [
  { show: "30 Rock", network: "NBC" },
  { show: "Gabriel Iglesias Presents: Stand Up Revolution", network: "Comedy Central" },
  { show: "Russell Simmons Presents Stand-Up at the El Rey", network: "Comedy Central" },
  { show: "Martin Lawrence Presents: 1st Amendment Stand-Up", network: "Starz" },
  { show: "Gotham Comedy Live", network: "AXS TV" },
  { show: "ComicView", network: "BET" },
  { show: "Comics Unleashed", network: "Syndicated" },
  { show: "Laff Mobb's Laff Tracks (14 episodes)", network: "truTV" },
  { show: "All Def Comedy", network: "HBO" },
  { show: "Entre Nos: The Winners", network: "HBO Latino" },
];

export default function PressContent() {
  return (
    <div className="pt-24 md:pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            For Media &amp; Booking
          </p>
          <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight">
            Press Kit
          </h1>
        </AnimatedSection>

        {/* One-sheet bio */}
        <AnimatedSection delay={0.1} className="mt-12">
          <div className="p-8 rounded-lg bg-surface border border-border">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-tight mb-4">
              About Mark Viera
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Mark Viera, known as &ldquo;The Latin Assassin,&rdquo; is a
              Bronx-born, nationally touring comedian with over 20 years in the
              industry. He has appeared on HBO, Showtime, Comedy Central, NBC,
              BET, truTV, and AXS TV. His comedy specials include{" "}
              <em>Tales of a Nuyorican</em> (Showtime),{" "}
              <em>Entre Nos: The Winners</em> (HBO),{" "}
              <em>The Art of Stand Up</em> (HBO Max), and{" "}
              <em>Mark My Words</em> (Amazon Prime / Tubi). He has toured with
              Gabriel Iglesias, Marc Anthony, and Martin Lawrence, and currently
              headlines The Boricuas of Comedy Tour nationwide.
            </p>
          </div>
        </AnimatedSection>

        {/* TV Credits */}
        <AnimatedSection delay={0.15} className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold uppercase tracking-tight mb-6">
            Television <span className="text-gradient-gold">Credits</span>
          </h2>
          <div className="space-y-3">
            {tvShows.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-3 px-4 rounded-lg border border-border hover:border-gold/30 transition-colors"
              >
                <p className="text-foreground font-medium">{item.show}</p>
                <p className="text-gold text-sm font-medium uppercase tracking-wider">
                  {item.network}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Networks bar */}
        <AnimatedSection delay={0.2} className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold uppercase tracking-tight mb-6">
            Featured <span className="text-gradient-gold">Networks</span>
          </h2>
          <div className="flex flex-wrap gap-4">
            {tvCredits.map((network) => (
              <div
                key={network}
                className="px-6 py-3 border border-border rounded-lg"
              >
                <p className="font-[family-name:var(--font-heading)] text-lg font-bold uppercase tracking-wider text-muted">
                  {network}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Booking contact */}
        <AnimatedSection delay={0.25} className="mt-16">
          <div className="p-8 rounded-lg bg-surface border border-border text-center">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-tight mb-3">
              Booking &amp; Press Inquiries
            </h2>
            <p className="text-muted text-base mb-6">
              For booking, press inquiries, or interview requests:
            </p>
            <a
              href="mailto:booking@markviera.com"
              className="inline-block px-8 py-4 bg-gold text-background font-bold uppercase tracking-wider text-sm rounded hover:bg-gold-light transition-colors"
            >
              booking@markviera.com
            </a>
          </div>
        </AnimatedSection>

        {/* Social links */}
        <AnimatedSection delay={0.3} className="mt-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold uppercase tracking-tight mb-4">
            Social Media
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Instagram", url: "https://www.instagram.com/markvieracomedy/", handle: "@markvieracomedy" },
              { label: "TikTok", url: "https://www.tiktok.com/@markvieracomedy", handle: "@markvieracomedy" },
              { label: "Twitter / X", url: "https://twitter.com/MarkVieraComedy", handle: "@MarkVieraComedy" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 border border-border rounded-lg hover:border-gold hover:text-gold transition-colors"
              >
                <p className="text-sm font-medium">{social.label}</p>
                <p className="text-muted text-xs">{social.handle}</p>
              </a>
            ))}
          </div>
        </AnimatedSection>

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
