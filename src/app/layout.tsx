import type { Metadata } from "next";
import { Oswald, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PersonJsonLd, EventsJsonLd } from "@/components/JsonLd";

const heading = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mark Viera | The Latin Assassin — Professional Comedian",
  description:
    "Official website of Mark Viera, The Latin Assassin. Bronx-born comedian featured on HBO, Showtime, Comedy Central, and NBC. Tour dates, specials, and more.",
  keywords: [
    "Mark Viera",
    "The Latin Assassin",
    "comedian",
    "stand up comedy",
    "Boricuas of Comedy",
    "Nuyorican",
    "comedy specials",
    "HBO comedian",
  ],
  openGraph: {
    title: "Mark Viera | The Latin Assassin",
    description:
      "Official website of Mark Viera — Bronx-born comedian featured on HBO, Showtime, Comedy Central, and NBC.",
    url: "https://markviera.com",
    siteName: "Mark Viera",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Viera | The Latin Assassin",
    description:
      "Official website of Mark Viera — Bronx-born comedian featured on HBO, Showtime, Comedy Central, and NBC.",
    creator: "@MarkVieraComedy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <PersonJsonLd />
        <EventsJsonLd />
      </head>
      <body
        className={`${heading.variable} ${body.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
