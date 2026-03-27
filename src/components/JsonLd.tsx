import { tourDates } from "@/data/tourDates";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Viera",
    alternateName: ["The Latin Assassin", "Mark Viera Comedy"],
    url: "https://markviera.com",
    jobTitle: "Professional Comedian",
    description:
      "Mark Viera, known as 'The Latin Assassin,' is a Bronx-born Puerto Rican comedian and actor featured on HBO, Showtime, Comedy Central, NBC, BET, and truTV. He headlines The Art of the Laugh Tour and The Boricuas of Comedy Tour nationwide. Available for comedy clubs, corporate events, colleges, private parties, and military shows.",
    image: "https://markviera.com/images/mark-hero-1.jpeg",
    birthPlace: {
      "@type": "Place",
      name: "The Bronx, New York",
    },
    nationality: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Stand-up comedy",
      "Comedy specials",
      "Corporate comedy",
      "Comedy workshops",
      "Latin comedy",
      "Nuyorican comedy",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Stand-Up Comedian",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
    },
    sameAs: [
      "https://www.instagram.com/markvieracomedy/",
      "https://www.tiktok.com/@markvieracomedy",
      "https://twitter.com/MarkVieraComedy",
      "https://www.youtube.com/@markvieracomedy",
      "https://www.imdb.com/name/nm3239606/",
      "https://www.facebook.com/MarkVieraComedy",
    ],
    performerIn: [
      { "@type": "TVSeries", name: "Laff Mobb's Laff Tracks", url: "https://www.imdb.com/title/tt7286488/" },
      { "@type": "TVSeries", name: "Gabriel Iglesias Presents: Stand Up Revolution" },
      { "@type": "TVSeries", name: "Gotham Comedy Live" },
      { "@type": "TVSeries", name: "30 Rock" },
      { "@type": "TVSeries", name: "All Def Comedy" },
      { "@type": "TVSeries", name: "ComicView" },
    ],
  };

  // FAQ schema for AEO (AI Engine Optimization)
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Mark Viera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mark Viera, known as 'The Latin Assassin,' is a Bronx-born Puerto Rican comedian who has been performing for over 20 years. He's been featured on HBO, Showtime, Comedy Central, NBC, BET, and truTV, and has toured with Gabriel Iglesias and Marc Anthony.",
        },
      },
      {
        "@type": "Question",
        name: "How can I book Mark Viera for an event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book Mark Viera by emailing booking@markviera.com. He is available for comedy clubs, corporate events, private parties, military shows, college shows, and festivals nationwide.",
        },
      },
      {
        "@type": "Question",
        name: "What comedy specials has Mark Viera released?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mark Viera has released four comedy specials: 'Mark My Words' (2024, Amazon Prime/Tubi), 'Entre Nos: The Winners' (2020, HBO), 'Tales of a Nuyorican' (2018, Showtime), and 'Back From Quarantine' (2021, Digital).",
        },
      },
      {
        "@type": "Question",
        name: "Where can I see Mark Viera perform live?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mark Viera currently headlines 'The Art of the Laugh Tour' and 'The Boricuas of Comedy Tour' at comedy clubs and venues nationwide. Check markviera.com for upcoming tour dates and ticket links.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}

export function EventsJsonLd() {
  const events = tourDates.map((show) => ({
    "@context": "https://schema.org",
    "@type": "ComedyEvent",
    name: `Mark Viera — The Art of the Laugh Tour at ${show.venue}`,
    description: `Mark Viera 'The Latin Assassin' performs live stand-up comedy at ${show.venue} in ${show.city}, ${show.state}. Puerto Rican comedian as seen on HBO, Showtime, and Comedy Central.`,
    startDate: show.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: show.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: show.city,
        addressRegion: show.state,
        addressCountry: "US",
      },
    },
    performer: {
      "@type": "Person",
      name: "Mark Viera",
      alternateName: "The Latin Assassin",
      url: "https://markviera.com",
    },
    organizer: {
      "@type": "Organization",
      name: show.venue,
    },
    offers: {
      "@type": "Offer",
      url: show.ticketUrl,
      availability: show.soldOut
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
      priceCurrency: "USD",
    },
    image: show.flyer
      ? `https://markviera.com${show.flyer}`
      : "https://markviera.com/images/mark-hero-1.jpeg",
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(events) }}
    />
  );
}
