import Image from "next/image";
import Link from "next/link";
import { aboutBreadcrumb, sizes, theme } from "@/constants";
import { ContactModalTrigger } from "@/components/contact/contact-modal-trigger";
import { SiteFooter, SiteHeader } from "@/components/home";

const founderStory = [
  "My name is Mafia Mirza, founder of Virgo Beauty.",
  "Virgo Beauty was created with a simple vision: to provide women with a professional, comfortable and welcoming place where beauty and self-care come together.",
  "At Virgo Beauty, we offer hair styling, makeup, skincare, nails and bridal beauty with personal attention and quality care.",
  "My goal is to make every client feel confident, beautiful and relaxed from the moment they walk in.",
];

export function AboutPage() {
  return (
    <main style={{ backgroundColor: theme.colors.background }}>
      <SiteHeader />

      <section className="px-5 pb-20 pt-8">
        <div className="mx-auto" style={{ maxWidth: sizes.pageMaxWidth }}>
          <div
            className="mb-12 flex items-center gap-3"
            style={{ color: theme.colors.textMuted, fontSize: sizes.font.small }}
          >
            <Link
              href={aboutBreadcrumb[0].href}
              className="transition hover:opacity-80"
              style={{ color: theme.colors.gold }}
            >
              {aboutBreadcrumb[0].label}
            </Link>
            <span>/</span>
            <span>{aboutBreadcrumb[1].label}</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="text-center lg:text-left">
              <div
                className="relative mx-auto aspect-square max-w-[380px] overflow-hidden rounded-full border lg:mx-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 18%, rgba(201,175,68,0.24), rgba(9,9,8,0.5) 62%)",
                  borderColor: theme.colors.border,
                  boxShadow: theme.shadows.soft,
                }}
              >
                <Image
                  src="/hero-portrait-cutout.png"
                  alt="Mafia Mirza, founder of Virgo Beauty"
                  fill
                  priority
                  sizes="(max-width: 1024px) 85vw, 380px"
                  className="object-contain object-bottom"
                />
              </div>
              <h1 className="mt-6 text-3xl font-semibold" style={{ color: theme.colors.text }}>
                Mafia Mirza
              </h1>
              <p className="mt-2" style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}>
                Founder & Lead Beautician
              </p>
              <div className="mx-auto mt-4 h-px w-24 lg:mx-0" style={{ backgroundColor: theme.colors.gold }} />
            </div>

            <div>
              <p
                className="mb-3 uppercase tracking-[0.24em]"
                style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
              >
                About Founder
              </p>
              <h2
                className="max-w-2xl font-semibold leading-tight"
                style={{ color: theme.colors.text, fontSize: sizes.font.h2 }}
              >
                Meet the Woman Behind Virgo Beauty
              </h2>
              <div
                className="mt-6 grid gap-4 leading-7"
                style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}
              >
                {founderStory.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20" style={{ backgroundColor: theme.colors.surface }}>
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="mb-3 uppercase tracking-[0.24em]"
            style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
          >
            Appointment
          </p>
          <h2 className="font-semibold leading-tight" style={{ color: theme.colors.text, fontSize: sizes.font.h2 }}>
            Let&apos;s Book Your Appointment
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7" style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}>
            Choose your beauty service and reserve your next visit with Virgo Beauty.
          </p>
          <div className="mt-8">
            <ContactModalTrigger mode="button">Book Appointment</ContactModalTrigger>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
