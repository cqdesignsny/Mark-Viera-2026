export interface TourDate {
  id: string;
  date: string;
  venue: string;
  city: string;
  state: string;
  ticketUrl: string;
  soldOut?: boolean;
}

export const tourDates: TourDate[] = [
  {
    id: "1",
    date: "2026-03-07",
    venue: "Funny Bone Comedy Club",
    city: "Hartford",
    state: "CT",
    ticketUrl: "https://hartford.funnybone.com",
    soldOut: false,
  },
  {
    id: "2",
    date: "2026-03-08",
    venue: "Funny Bone Comedy Club",
    city: "Hartford",
    state: "CT",
    ticketUrl: "https://hartford.funnybone.com",
    soldOut: false,
  },
  {
    id: "3",
    date: "2026-03-21",
    venue: "Levity Live",
    city: "West Nyack",
    state: "NY",
    ticketUrl: "https://www.levitylive.com",
    soldOut: false,
  },
  {
    id: "4",
    date: "2026-04-04",
    venue: "Funny Bone Comedy Club",
    city: "Orlando",
    state: "FL",
    ticketUrl: "https://orlando.funnybone.com",
    soldOut: false,
  },
  {
    id: "5",
    date: "2026-04-05",
    venue: "Funny Bone Comedy Club",
    city: "Orlando",
    state: "FL",
    ticketUrl: "https://orlando.funnybone.com",
    soldOut: false,
  },
  {
    id: "6",
    date: "2026-04-18",
    venue: "Funny Bone Comedy Club",
    city: "Tampa",
    state: "FL",
    ticketUrl: "https://tampa.funnybone.com",
    soldOut: false,
  },
  {
    id: "7",
    date: "2026-05-02",
    venue: "Punch Line Comedy Club",
    city: "Houston",
    state: "TX",
    ticketUrl: "https://www.punchlinecomedyclub.com",
    soldOut: false,
  },
  {
    id: "8",
    date: "2026-05-16",
    venue: "Mic Drop Comedy",
    city: "San Diego",
    state: "CA",
    ticketUrl: "https://www.micdropcomedy.com",
    soldOut: false,
  },
];
