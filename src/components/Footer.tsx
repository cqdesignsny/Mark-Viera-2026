import {
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div className="text-center md:text-left">
            <p className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wider uppercase text-gradient-gold">
              Mark Viera
            </p>
            <p className="text-sm text-muted mt-1">The Latin Assassin</p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/markvieracomedy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-gold transition-colors"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.tiktok.com/@markvieracomedy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-muted hover:text-gold transition-colors"
            >
              <TikTokIcon />
            </a>
            <a
              href="https://twitter.com/MarkVieraComedy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-muted hover:text-gold transition-colors"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://www.youtube.com/@markvieracomedy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-muted hover:text-gold transition-colors"
            >
              <YouTubeIcon />
            </a>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <a href="/bio" className="hover:text-gold transition-colors">
              Bio
            </a>
            <a href="/press" className="hover:text-gold transition-colors">
              Press
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              Booking
            </a>
          </div>
        </div>

        <div className="section-divider mt-8 mb-6" />

        <p className="text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Mark Viera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
