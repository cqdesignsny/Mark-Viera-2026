export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  ticketUrl: string;
  soldOut?: boolean;
  flyer?: string;
}

export const tourDates: TourDate[] = [
  {
    id: "kop",
    date: "2026-03-27",
    venue: "Stress Factory at Valley Forge Casino",
    city: "King of Prussia",
    state: "PA",
    ticketUrl: "https://www.stressfactory.com",
    flyer: "/images/flyers/king-of-prussia.png",
  },
  {
    id: "kop2",
    date: "2026-03-28",
    venue: "Stress Factory at Valley Forge Casino",
    city: "King of Prussia",
    state: "PA",
    ticketUrl: "https://www.stressfactory.com",
    flyer: "/images/flyers/king-of-prussia.png",
  },
  {
    id: "dallas",
    date: "2026-04-10",
    venue: "Addison Improv",
    city: "Dallas",
    state: "TX",
    ticketUrl: "https://improv.com/dallas",
    flyer: "/images/flyers/dallas.png",
  },
  {
    id: "ftl",
    date: "2026-04-24",
    venue: "Fort Lauderdale Improv",
    city: "Fort Lauderdale",
    state: "FL",
    ticketUrl: "https://improv.com/fort-lauderdale",
    flyer: "/images/flyers/ft-lauderdale.png",
  },
  {
    id: "levity",
    date: "2026-05-01",
    venue: "Levity Live",
    city: "West Nyack",
    state: "NY",
    ticketUrl: "https://www.levitylive.com",
    flyer: "/images/flyers/levity-live.png",
  },
  {
    id: "houston",
    date: "2026-05-15",
    venue: "Houston Improv",
    city: "Houston",
    state: "TX",
    ticketUrl: "https://improv.com/houston",
    flyer: "/images/flyers/houston.png",
  },
  {
    id: "newbrunswick",
    date: "2026-05-22",
    venue: "Stress Factory",
    city: "New Brunswick",
    state: "NJ",
    ticketUrl: "https://www.stressfactory.com",
    flyer: "/images/flyers/new-brunswick.png",
  },
  {
    id: "harlem",
    date: "2026-06-06",
    venue: "Victoria Theater",
    city: "Harlem",
    state: "NY",
    ticketUrl: "https://www.ticketmaster.com",
    flyer: "/images/flyers/harlem.png",
  },
  {
    id: "sanfran",
    date: "2026-06-20",
    venue: "Cobb's Comedy Club",
    city: "San Francisco",
    state: "CA",
    ticketUrl: "https://www.cobbscomedy.com",
    flyer: "/images/flyers/san-fran.png",
  },
  {
    id: "chandler",
    date: "2026-07-10",
    venue: "Copper Blues",
    city: "Chandler",
    state: "AZ",
    ticketUrl: "https://www.ticketmaster.com",
    flyer: "/images/flyers/chandler.png",
  },
];
