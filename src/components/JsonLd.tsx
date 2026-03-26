import { tourDates } from "@/data/tourDates";

function formatDateLd(dateStr: string) {
  return dateStr;
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mark Viera",
    alternateName: "The Latin Assassin",
    url: "https://markviera.com",
    jobTitle: "Comedian",
    description:
      "Bronx-born professional comedian featured on HBO, Showtime, Comedy Central, and NBC.",
    sameAs: [
      "https://www.instagram.com/markvieracomedy/",
      "https://www.tiktok.com/@markvieracomedy",
      "https://twitter.com/MarkVieraComedy",
      "https://www.imdb.com/name/nm3239606/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function EventsJsonLd() {
  const events = tourDates.map((show) => ({
    "@context": "https://schema.org",
    "@type": "ComedyEvent",
    name: `Mark Viera Live at ${show.venue}`,
    startDate: formatDateLd(show.date),
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
    },
    offers: {
      "@type": "Offer",
      url: show.ticketUrl,
      availability: show.soldOut
        ? "https://schema.org/SoldOut"
        : "https://schema.org/InStock",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(events) }}
    />
  );
}
