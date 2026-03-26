import type { Metadata } from "next";
import PressContent from "./PressContent";

export const metadata: Metadata = {
  title: "Press Kit | Mark Viera — The Latin Assassin",
  description:
    "Press kit and booking information for Mark Viera, The Latin Assassin. TV credits, downloadable assets, and contact info.",
};

export default function PressPage() {
  return <PressContent />;
}
