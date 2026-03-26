export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "Mark Viera on Laff Mobb's Laff Tracks",
    youtubeId: "placeholder1",
    description: "Mark brings the house down on truTV's Laff Mobb's Laff Tracks.",
  },
  {
    id: "2",
    title: "Gotham Comedy Live",
    youtubeId: "placeholder2",
    description: "Live from Gotham Comedy Club on AXS TV.",
  },
  {
    id: "3",
    title: "Stand Up Revolution",
    youtubeId: "placeholder3",
    description:
      "Gabriel Iglesias Presents: Stand Up Revolution on Comedy Central.",
  },
];
