import type { Metadata } from "next";
import { bioFull, milestones } from "@/data/bio";
import BioContent from "./BioContent";

export const metadata: Metadata = {
  title: "Bio | Mark Viera — The Latin Assassin",
  description:
    "The full story of Mark Viera, The Latin Assassin. From the Bronx to HBO, Showtime, Madison Square Garden, and beyond.",
};

export default function BioPage() {
  return <BioContent bioFull={bioFull} milestones={milestones} />;
}
