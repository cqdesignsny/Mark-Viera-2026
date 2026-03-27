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
  title: {
    default: "Mark Viera | The Latin Assassin — Puerto Rican Comedian | HBO, Showtime, Comedy Central",
    template: "%s | Mark Viera — The Latin Assassin",
  },
  description:
    "Official website of Mark Viera, 'The Latin Assassin' — Bronx-born Puerto Rican comedian featured on HBO, Showtime, Comedy Central, NBC, BET, and truTV. Book Mark for comedy clubs, corporate events, colleges, and festivals. Tour dates, comedy specials, and booking info.",
  keywords: [
    "Mark Viera",
    "The Latin Assassin",
    "Mark Viera comedian",
    "Latin comedian",
    "Latino comedian",
    "Puerto Rican comedian",
    "Hispanic comedian",
    "Nuyorican comedian",
    "Boricua comedian",
    "Bronx comedian",
    "New York comedian",
    "stand up comedy",
    "comedy specials",
    "book a comedian",
    "hire a comedian",
    "corporate comedian",
    "comedy club headliner",
    "HBO comedian",
    "Showtime comedian",
    "Comedy Central comedian",
    "Boricuas of Comedy",
    "The Art of the Laugh Tour",
    "Mark My Words comedy special",
    "Entre Nos HBO",
    "Tales of a Nuyorican",
    "Laff Mobb Laff Tracks",
    "Gabriel Iglesias Stand Up Revolution",
    "comedy booking agent",
    "funny Latino comedian",
    "best Latino comedians",
    "touring comedian",
  ],
  openGraph: {
    title: "Mark Viera | The Latin Assassin — Puerto Rican Comedian",
    description:
      "Official website of Mark Viera — Bronx-born Puerto Rican comedian featured on HBO, Showtime, Comedy Central, and NBC. Tour dates, specials, and booking.",
    url: "https://markviera.com",
    siteName: "Mark Viera — The Latin Assassin",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Viera | The Latin Assassin — Puerto Rican Comedian",
    description:
      "Official website of Mark Viera — Bronx-born Puerto Rican comedian featured on HBO, Showtime, Comedy Central, and NBC. Tour dates, specials, and booking.",
    creator: "@MarkVieraComedy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://markviera.com",
  },
  category: "entertainment",
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
        <link rel="icon" href="/images/mv-logo-white.png" />
        <link rel="apple-touch-icon" href="/images/mv-logo-white.png" />
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
