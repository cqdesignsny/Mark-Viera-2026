export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  description: string;
}

// NOTE: Replace these YouTube IDs with real ones from Mark's channel (@markvieracomedy)
// To get the ID: go to youtube.com/@markvieracomedy, click a video, copy the ID from the URL after watch?v=
export const videos: Video[] = [
  {
    id: "1",
    title: "Mark Viera — Laff Mobb's Laff Tracks (truTV)",
    youtubeId: "REPLACE_WITH_REAL_ID_1",
    description:
      "Mark brings the house down on truTV's Laff Mobb's Laff Tracks — 14 episodes of pure Bronx comedy.",
  },
  {
    id: "2",
    title: "Gotham Comedy Live (AXS TV)",
    youtubeId: "REPLACE_WITH_REAL_ID_2",
    description: "Live from Gotham Comedy Club in NYC on AXS TV.",
  },
  {
    id: "3",
    title: "Gabriel Iglesias Presents: Stand Up Revolution",
    youtubeId: "REPLACE_WITH_REAL_ID_3",
    description:
      "Comedy Central's Stand Up Revolution with Gabriel Iglesias.",
  },
];

// Mark's YouTube channel for the channel link
export const youtubeChannelUrl = "https://www.youtube.com/@markvieracomedy";
