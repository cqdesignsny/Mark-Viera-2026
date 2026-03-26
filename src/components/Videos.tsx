"use client";

import { videos } from "@/data/videos";
import AnimatedSection from "./AnimatedSection";

export default function Videos() {
  return (
    <section id="videos" className="relative py-24 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">
            Clips
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight">
            Videos
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <AnimatedSection key={video.id} delay={i * 0.1}>
              <div className="rounded-lg overflow-hidden border border-border">
                {/* Video embed placeholder */}
                <div className="relative aspect-video bg-surface-light flex items-center justify-center">
                  {video.youtubeId.startsWith("placeholder") ? (
                    <div className="text-center p-4">
                      <div className="w-12 h-12 rounded-full bg-border mx-auto mb-3 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-muted ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-muted text-xs uppercase tracking-wider">
                        Video Coming Soon
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>

                <div className="p-4 bg-surface">
                  <h3 className="font-medium text-foreground text-sm">
                    {video.title}
                  </h3>
                  <p className="text-muted text-xs mt-1">
                    {video.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="mt-10 text-center">
          <a
            href="https://www.youtube.com/@markvieracomedy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light text-sm uppercase tracking-widest font-medium transition-colors"
          >
            More on YouTube &rarr;
          </a>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
