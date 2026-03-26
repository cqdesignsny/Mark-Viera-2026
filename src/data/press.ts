export interface PressItem {
  id: string;
  outlet: string;
  quote: string;
  url?: string;
}

export const pressItems: PressItem[] = [
  {
    id: "1",
    outlet: "Shepherd Express",
    quote: "An honest brand of fun that connects with audiences on a deeply personal level.",
    url: "https://shepherdexpress.com/culture/comedy/mark-vieras-honest-brand-of-fun/",
  },
  {
    id: "2",
    outlet: "Industry Peers",
    quote: "The Latino Bernie Mac.",
  },
  {
    id: "3",
    outlet: "Comedy Circuit",
    quote: "A soul-baring storyteller with a hilariously high energy style.",
  },
];

export const tvCredits: string[] = [
  "HBO",
  "Showtime",
  "Comedy Central",
  "NBC",
  "BET",
  "truTV",
  "AXS TV",
  "Amazon Prime",
];
