"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const appearances = [
  {
    network: "truTV",
    show: "Laff Mobb's Laff Tracks",
    detail: "14 Episodes",
    image: "/images/stage-trutv.jpg",
  },
  {
    network: "Comedy Central",
    show: "Stand Up Revolution",
    detail: "Gabriel Iglesias Presents",
    image: "/images/stage-levity.jpg",
  },
  {
    network: "AXS TV",
    show: "Gotham Comedy Live",
    detail: "Live from NYC",
    image: "/images/hero-slide.jpg",
  },
];

const streamingLinks = [
  {
    title: "Mark My Words",
    platform: "Amazon Prime / Tubi",
    year: "2024",
    url: "https://www.amazon.com/gp/video/detail/B0D5X3V1Y2",
  },
  {
    title: "Entre Nos: The Winners",
    platform: "HBO Max",
    year: "2020",
    url: "https://www.max.com",
  },
  {
    title: "Tales of a Nuyorican",
    platform: "Showtime",
    year: "2018",
    url: "https://www.sho.com",
  },
];

export default function Videos() {
  return (
    <section id="videos" className="relative py-24 md:py-32 bg-surface overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/3 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3 animate-glow-pulse">
            Watch
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            As Seen{" "}
            <span className="text-gradient-gold">On</span>
          </h2>
        </AnimatedSection>

        {/* TV Appearances Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {appearances.map((item, i) => (
            <AnimatedSection key={item.network} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group rounded-xl overflow-hidden card-glow bg-background"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`Mark Viera on ${item.network} — ${item.show}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  {/* Network badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-neon-cyan/20 backdrop-blur-md rounded-full border border-neon-cyan/30">
                    <p className="text-neon-cyan text-[10px] uppercase tracking-wider font-bold">
                      {item.network}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold uppercase tracking-wide text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                    {item.show}
                  </h3>
                  <p className="text-muted text-xs mt-1">{item.detail}</p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stream Now Links */}
        <AnimatedSection delay={0.2} className="mt-16">
          <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6">
            Stream <span className="text-neon-cyan">Now</span>
          </h3>
          <div className="space-y-3">
            {streamingLinks.map((link, i) => (
              <motion.a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center justify-between p-4 rounded-xl bg-background border border-border hover:border-neon-cyan/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold group-hover:text-neon-cyan transition-colors">
                      {link.title}
                    </p>
                    <p className="text-muted text-xs">
                      {link.platform} &bull; {link.year}
                    </p>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-muted group-hover:text-neon-cyan transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        {/* YouTube CTA */}
        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@markvieracomedy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-3"
          >
            More on YouTube
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
