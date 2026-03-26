export interface Special {
  id: string;
  title: string;
  year: number;
  platform: string;
  description: string;
  watchUrl: string;
  image: string;
}

export const specials: Special[] = [
  {
    id: "1",
    title: "Mark My Words",
    year: 2024,
    platform: "Amazon Prime / Tubi",
    description:
      "Mark Viera's latest hour of comedy — raw, honest, and funnier than ever.",
    watchUrl: "https://www.amazon.com/gp/video/detail/B0D5X3V1Y2",
    image: "/images/special-mark-my-words.png",
  },
  {
    id: "2",
    title: "Entre Nos: The Winners",
    year: 2020,
    platform: "HBO",
    description:
      "Winner of the Latinos Stand-Up! competition. A half-hour HBO special celebrating Nuyorican comedy.",
    watchUrl: "https://www.max.com",
    image: "/images/special-entre-nos.png",
  },
  {
    id: "3",
    title: "Tales of a Nuyorican",
    year: 2018,
    platform: "Showtime",
    description:
      "A full hour of storytelling — growing up in the Bronx, family, love, and everything in between.",
    watchUrl: "https://www.sho.com",
    image: "/images/special-nuyorican.jpg",
  },
  {
    id: "4",
    title: "Back From Quarantine",
    year: 2021,
    platform: "Digital",
    description:
      "Mark's pandemic-era special — proof that nothing can keep a real comedian down.",
    watchUrl: "https://markviera.com/shop/",
    image: "/images/special-back-quarantine.png",
  },
];
