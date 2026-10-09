import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { contact, routes, sizes, theme } from "@/constants";

type FooterIconName = "email" | "instagram" | "location" | "phone" | "whatsapp";

const socialLinks = [
  { label: "Instagram", href: contact.instagramHref, icon: "instagram" },
  { label: "WhatsApp", href: contact.whatsappHref, icon: "whatsapp" },
  { label: "Email", href: contact.emailHref, icon: "email" },
] as const;

const contactLinks = [
  { label: "WhatsApp", href: contact.whatsappHref, icon: "whatsapp" },
  { label: "Instagram", href: contact.instagramHref, icon: "instagram" },
  { label: "Email", href: contact.emailHref, icon: "email" },
  { label: "Phone", href: contact.phoneHref, icon: "phone" },
] as const;

function FooterIcon({ name }: { name: FooterIconName }) {
  const paths: Record<FooterIconName, ReactNode> = {
    email: (
      <>
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    instagram: (
      <>
        <rect height="16" rx="4" width="16" x="4" y="4" />
        <circle cx="12" cy="12" r="3.4" />
        <path d="M16.6 7.4h.01" />
      </>
    ),
    location: (
      <>
        <path d="M12 21s6-5.4 6-11a6 6 0 0 0-12 0c0 5.6 6 11 6 11Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    phone: (
      <path d="M7.4 4.8 9.6 9l-2 1.2c1 2.1 2.7 3.8 4.8 4.8l1.2-2 4.2 2.2-.8 3.4c-.2.8-.9 1.4-1.8 1.4C9 20 4 15 4 8.8c0-.9.6-1.6 1.4-1.8l2-.5Z" />
    ),
    whatsapp: (
      <>
        <path d="M5.5 19.1 6.6 16A7.2 7.2 0 1 1 9 18.1l-3.5 1Z" />
        <path d="M9.4 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3 0 .5-.2.7l-.4.5c.7 1.2 1.6 2 2.8 2.6l.5-.6c.2-.2.4-.3.7-.2l1.4.7c.3.1.4.3.4.6v.4c0 .3-.1.6-.4.8-.5.4-1.2.6-1.9.5-2.9-.5-5.3-2.8-5.8-5.8-.1-.6.1-1.3.5-1.8Z" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="border-t px-5"
      style={{
        backgroundColor: theme.colors.background,
        borderColor: theme.colors.border,
        fontFamily: sizes.fontFamily,
      }}
    >
      <div
        className="mx-auto grid gap-10 py-14 md:grid-cols-[1.4fr_0.55fr_0.75fr]"
        style={{ maxWidth: sizes.pageMaxWidth }}
      >
        <div>
          <div className="flex items-center gap-4">
            <Image
              src="/virgo-logo.jpg"
              alt="Virgo Beauty"
              width={sizes.logo.footer}
              height={sizes.logo.footer}
              className="h-14 w-14 rounded-full object-cover"
            />
            <div>
              <p className="text-2xl font-bold tracking-[-0.02em]" style={{ color: theme.colors.text }}>
                Virgo Beauty
              </p>
              <p className="mt-1" style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}>
                Beauty, Care & Confidence
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 leading-7" style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}>
            <p className="flex items-start gap-3">
              <FooterIcon name="location" />
              <span>{contact.address}</span>
            </p>
            <a className="flex items-center gap-3 transition hover:opacity-80" href={contact.emailHref}>
              <FooterIcon name="email" />
              {contact.email}
            </a>
            <a className="flex items-center gap-3 transition hover:opacity-80" href={contact.phoneHref}>
              <FooterIcon name="phone" />
              {contact.phone}
            </a>
          </div>

          <div className="mt-8 flex gap-5">
            {socialLinks.map((item) => (
              <a
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full border transition hover:-translate-y-0.5 hover:opacity-90"
                href={item.href}
                key={item.label}
                style={{
                  borderColor: theme.colors.border,
                  color: theme.colors.text,
                }}
              >
                <FooterIcon name={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-semibold" style={{ color: theme.colors.gold, fontSize: sizes.font.lead }}>
            Company
          </h3>
          <nav className="grid gap-4" style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}>
            <Link className="transition hover:opacity-80" href={routes.about}>
              About Us
            </Link>
            <Link className="transition hover:opacity-80" href={routes.services}>
              Services
            </Link>
          </nav>
        </div>

        <div>
          <h3 className="mb-5 font-semibold" style={{ color: theme.colors.gold, fontSize: sizes.font.lead }}>
            Contact
          </h3>
          <div className="grid gap-4" style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}>
            {contactLinks.map((item) => (
              <a className="flex items-center gap-3 transition hover:opacity-80" href={item.href} key={item.label}>
                <FooterIcon name={item.icon} />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className="mx-auto flex flex-wrap items-center justify-between gap-4 border-t py-6"
        style={{ borderColor: theme.colors.border, color: theme.colors.textMuted, fontSize: sizes.font.small, maxWidth: sizes.pageMaxWidth }}
      >
        <p>Copyright 2026 Virgo Beauty.</p>
        <p>Premium salon care.</p>
      </div>
    </footer>
  );
}
