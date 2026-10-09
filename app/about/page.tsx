import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About Us | Virgo Beauty",
  description: "Meet Mafia Mirza, founder of Virgo Beauty, and learn about the salon's story, values and beauty philosophy.",
};

export default function Page() {
  return <AboutPage />;
}
