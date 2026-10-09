import Image from "next/image";
import Link from "next/link";
import { contact, navigationActions, sizes, theme } from "@/constants";
import { ContactModalTrigger } from "@/components/contact/contact-modal-trigger";

const heroServices = ["Hair", "Makeup", "Skincare", "Nails", "Bridal"];

export function Hero() {
  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,rgba(201,175,68,0.16),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(159,160,154,0.12),transparent_28%),linear-gradient(135deg,rgba(35,30,22,0.95),rgba(9,9,8,1)_55%)]" />
      <div
        className="hero-shell relative mx-auto grid w-full items-center justify-items-center gap-7 px-5 lg:grid-cols-2"
        style={{ maxWidth: sizes.pageMaxWidth }}
      >
        <div className="hero-copy w-full text-center">
          <p
            className="hero-kicker mx-auto max-w-3xl font-semibold uppercase leading-[1.02] tracking-[0.14em]"
            style={{ color: theme.colors.gold }}
          >
            WELCOME TO VIRGO BEAUTY
          </p>
          <h1
            className="hero-title mx-auto max-w-2xl font-semibold leading-[1.14]"
            style={{ color: theme.colors.text }}
          >
            Beauty, Care & Confidence &mdash; All in One Place.
          </h1>
          <p
            className="hero-description mx-auto max-w-2xl leading-7"
            style={{ color: theme.colors.textMuted }}
          >
            Discover professional hair, makeup, skincare, nail and bridal services designed to
            make you look and feel your best. Explore our latest salon offers and book your
            beauty appointment with ease.
          </p>
          <div className="hero-cta mx-auto flex max-w-xl flex-col items-center gap-2">
            <ContactModalTrigger mode="button" className="px-7 py-3 normal-case tracking-normal">
              Book Instantly
            </ContactModalTrigger>
            <a
              className="text-sm font-medium transition hover:opacity-80"
              href={contact.whatsappHref}
              style={{ color: theme.colors.textMuted }}
            >
              Prefer WhatsApp? Message us now
            </a>
          </div>
          <div className="hero-tags mx-auto flex max-w-xl flex-wrap justify-center gap-2">
            {heroServices.map((service) => (
              <span
                className="hero-tag border px-3 py-2 uppercase tracking-[0.18em]"
                key={service}
                style={{
                  backgroundColor: "rgba(159, 160, 154, 0.05)",
                  borderColor: theme.colors.border,
                  borderRadius: theme.radius.sm,
                  color: theme.colors.text,
                  fontSize: sizes.font.eyebrow,
                }}
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-portrait relative w-full overflow-visible">
          <div className="absolute bottom-8 left-1/2 h-[170px] w-[460px] max-w-[92%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(201,175,68,0.24),rgba(159,160,154,0.1)_42%,transparent_70%)] blur-sm" />
          <div className="absolute bottom-0 left-1/2 h-[96px] w-[500px] max-w-[96%] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.62),rgba(0,0,0,0.24)_48%,transparent_74%)]" />
          <div className="absolute bottom-20 left-1/2 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,175,68,0.14),transparent_65%)]" />
          <Image
            src="/hero-portrait-cutout.png"
            alt="Virgo Beauty salon portrait"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 46vw"
            className="object-contain object-bottom drop-shadow-[0_28px_48px_rgba(0,0,0,0.48)]"
          />
        </div>
      </div>
      <Link
        aria-label="Scroll to services and offers"
        className="hero-down-arrow absolute inset-x-0 z-10 mx-auto flex h-16 w-16 items-center justify-center"
        href={navigationActions.scrollToServices}
        style={{
          color: theme.colors.gold,
        }}
      >
        <span className="h-7 w-7 rotate-45 border-b-4 border-r-4" />
      </Link>
    </section>
  );
}
