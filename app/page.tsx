import {
  AboutSection,
  Hero,
  ServicesAndOffersSection,
  SiteFooter,
  SiteHeader,
  TestimonialsSection,
} from "@/components/home";
import { theme } from "@/constants";

export default function Home() {
  return (
    <main style={{ backgroundColor: theme.colors.background }}>
      <SiteHeader />
      <Hero />

      <AboutSection />
      <ServicesAndOffersSection />

      <TestimonialsSection />
      <SiteFooter />
    </main>
  );
}
