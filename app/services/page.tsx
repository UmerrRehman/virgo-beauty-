import type { Metadata } from "next";
import { ServicesAndOffersSection, SiteFooter, SiteHeader } from "@/components/home";
import { theme } from "@/constants";

export const metadata: Metadata = {
  title: "Services & Offers | Virgo Beauty",
  description: "Explore Virgo Beauty services and salon offers for hair, makeup, skincare, nails and bridal beauty.",
};

export default function Page() {
  return (
    <main style={{ backgroundColor: theme.colors.background }}>
      <SiteHeader />
      <ServicesAndOffersSection />
      <SiteFooter />
    </main>
  );
}
