"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  InstagramIcon,
  TikTokIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border-glow">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              <Image
                src="/images/mv-logo-white.png"
                alt="Mark Viera Comedy"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wider uppercase text-neon-cyan">
                Mark Viera
              </p>
              <p className="text-xs text-muted">The Latin Assassin</p>
            </div>
          </Link>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {[
              { href: "https://www.instagram.com/markvieracomedy/", label: "Instagram", Icon: InstagramIcon },
              { href: "https://www.tiktok.com/@markvieracomedy", label: "TikTok", Icon: TikTokIcon },
              { href: "https://twitter.com/MarkVieraComedy", label: "Twitter / X", Icon: TwitterIcon },
              { href: "https://www.youtube.com/@markvieracomedy", label: "YouTube", Icon: YouTubeIcon },
            ].map(({ href, label, Icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="text-muted hover:text-neon-cyan transition-colors duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="/bio" className="hover:text-neon-cyan transition-colors duration-300">
              Bio
            </Link>
            <Link href="/press" className="hover:text-neon-cyan transition-colors duration-300">
              Press
            </Link>
            <Link href="/#contact" className="hover:text-neon-cyan transition-colors duration-300">
              Booking
            </Link>
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
