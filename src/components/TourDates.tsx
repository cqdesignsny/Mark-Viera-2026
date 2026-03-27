"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { tourDates } from "@/data/tourDates";
import AnimatedSection from "./AnimatedSection";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const month = date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const day = date.getDate();
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  const fullDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return { month, day, weekday, fullDate };
}

export default function TourDates() {
  const [expandedFlyer, setExpandedFlyer] = useState<string | null>(null);

  return (
    <section id="shows" className="relative py-24 md:py-32">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <p className="text-neon-cyan uppercase tracking-[0.4em] text-xs font-medium mb-3 animate-glow-pulse">
            The Art of the Laugh Tour
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            <span className="text-neon-outline">Upcoming</span>{" "}
            <span className="text-gradient-gold">Shows</span>
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-3">
          {tourDates.map((show, i) => {
            const { month, day, weekday, fullDate } = formatDate(show.date);
            const isExpanded = expandedFlyer === show.id;

            return (
              <AnimatedSection key={show.id} delay={i * 0.06}>
                <div className="card-glow rounded-xl overflow-hidden bg-surface">
                  {/* Main row */}
                  <div className="flex items-center justify-between p-4 md:p-5">
                    <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                      {/* Date block — neon accent */}
                      <div className="text-center min-w-[64px] py-2 px-3 rounded-lg bg-background border border-border-glow">
                        <p className="text-neon-cyan text-[10px] uppercase font-bold tracking-widest">
                          {month}
                        </p>
                        <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-none">
                          {day}
                        </p>
                        <p className="text-muted text-[10px] uppercase tracking-wider">
                          {weekday}
                        </p>
                      </div>

                      {/* Venue info */}
                      <div className="min-w-0">
                        <p className="text-foreground font-semibold text-base md:text-lg truncate">
                          {show.venue}
                        </p>
                        <p className="text-muted text-sm">
                          {show.city}, {show.state}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 ml-4 shrink-0">
                      {/* Flyer toggle */}
                      {show.flyer && (
                        <button
                          onClick={() =>
                            setExpandedFlyer(isExpanded ? null : show.id)
                          }
                          className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs uppercase tracking-wider font-medium text-muted border border-border rounded-lg hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300"
                          aria-label={`${isExpanded ? "Hide" : "View"} flyer for ${show.venue}`}
                        >
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          Flyer
                        </button>
                      )}

                      {/* Ticket CTA */}
                      {show.soldOut ? (
                        <span className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-muted border border-border rounded-lg">
                          Sold Out
                        </span>
                      ) : (
                        <a
                          href={show.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative px-5 py-2.5 bg-gold text-background text-xs font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,168,68,0.35)] hover:scale-105"
                          aria-label={`Buy tickets for ${show.venue} on ${fullDate}`}
                        >
                          <span className="relative z-10">Tickets</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Expandable flyer */}
                  <AnimatePresence>
                    {isExpanded && show.flyer && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-border"
                      >
                        <div className="p-4 md:p-6 flex justify-center bg-background/50">
                          <div className="relative max-w-sm w-full rounded-lg overflow-hidden border border-border-glow shadow-[0_0_30px_rgba(0,229,255,0.08)]">
                            <Image
                              src={show.flyer}
                              alt={`${show.venue} — ${show.city}, ${show.state} show flyer`}
                              width={400}
                              height={500}
                              className="w-full h-auto"
                              sizes="400px"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="https://www.ticketmaster.com/mark-viera-tickets/artist/1441892"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan text-sm uppercase tracking-widest font-medium transition-all duration-300 hover:gap-3"
          >
            View All Dates
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
