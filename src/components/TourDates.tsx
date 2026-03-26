"use client";

import { tourDates } from "@/data/tourDates";
import AnimatedSection from "./AnimatedSection";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
  return { month, day, weekday };
}

export default function TourDates() {
  return (
    <section id="shows" className="relative py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            On Tour
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Upcoming Shows
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-1">
          {tourDates.map((show, i) => {
            const { month, day, weekday } = formatDate(show.date);
            return (
              <AnimatedSection key={show.id} delay={i * 0.05}>
                <a
                  href={show.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 px-4 md:px-6 rounded-lg hover:bg-surface-light transition-colors duration-200 border border-transparent hover:border-border"
                >
                  <div className="flex items-center gap-4 md:gap-8">
                    {/* Date block */}
                    <div className="text-center min-w-[60px]">
                      <p className="text-gold text-xs uppercase font-medium tracking-wider">
                        {month}
                      </p>
                      <p className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-bold text-foreground leading-none">
                        {day}
                      </p>
                      <p className="text-muted text-xs uppercase">{weekday}</p>
                    </div>

                    {/* Venue info */}
                    <div>
                      <p className="text-foreground font-medium text-base md:text-lg group-hover:text-gold transition-colors">
                        {show.venue}
                      </p>
                      <p className="text-muted text-sm">
                        {show.city}, {show.state}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="hidden sm:block">
                    {show.soldOut ? (
                      <span className="px-5 py-2 text-sm font-medium uppercase tracking-wider text-muted border border-border rounded">
                        Sold Out
                      </span>
                    ) : (
                      <span className="px-5 py-2 text-sm font-bold uppercase tracking-wider text-background bg-gold rounded group-hover:bg-gold-light transition-colors">
                        Tickets
                      </span>
                    )}
                  </div>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="https://www.ticketmaster.com/mark-viera-tickets/artist/1441892"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-colors"
          >
            View All Dates &rarr;
          </a>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
