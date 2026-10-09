"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigation, navigationActions, sizes, theme } from "@/constants";
import { ContactModalTrigger } from "@/components/contact/contact-modal-trigger";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className="sticky top-0 z-20 border-b"
      style={{
        backgroundColor: theme.colors.espresso,
        borderColor: theme.colors.border,
      }}
    >
      <div
        className="mx-auto flex items-center justify-between gap-6 px-5 py-3"
        style={{ maxWidth: sizes.pageMaxWidth }}
      >
        <Link className="flex items-center gap-3" href={navigationActions.brandHome} aria-label="Virgo Beauty home">
          <Image
            src="/virgo-logo.jpg"
            alt="Virgo Beauty"
            width={sizes.logo.header}
            height={sizes.logo.header}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <span
            className="text-base font-bold tracking-[-0.01em] sm:text-xl"
            style={{
              color: theme.colors.text,
              textShadow: "0 1px 12px rgba(255, 255, 255, 0.16)",
            }}
          >
            Virgo Beauty
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) =>
            "href" in item ? (
              <Link
                href={item.href}
                key={item.label}
                className="font-semibold transition hover:opacity-80"
                style={{ color: theme.colors.text, fontSize: sizes.font.body }}
              >
                {item.label}
              </Link>
            ) : (
              <ContactModalTrigger
                className="font-semibold"
                key={item.label}
                style={{ color: theme.colors.text, fontSize: sizes.font.body, fontWeight: 600 }}
              >
                {item.label}
              </ContactModalTrigger>
            ),
          )}
          <ContactModalTrigger mode="button" className="rounded-full px-7 py-3 normal-case tracking-normal">
            Book
          </ContactModalTrigger>
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label="Open navigation menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border md:hidden"
          onClick={() => setMenuOpen(true)}
          style={{ borderColor: theme.colors.border, color: theme.colors.text }}
          type="button"
        >
          <span className="grid gap-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-black/65 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <aside
            className="absolute right-0 top-0 flex h-dvh w-[82vw] max-w-[340px] flex-col border-l p-6 shadow-2xl"
            style={{
              backgroundColor: theme.colors.espresso,
              borderColor: theme.colors.border,
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <Link
                className="flex items-center gap-3"
                href={navigationActions.brandHome}
                onClick={() => setMenuOpen(false)}
              >
                <Image
                  src="/virgo-logo.jpg"
                  alt="Virgo Beauty"
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="font-bold" style={{ color: theme.colors.text }}>
                  Virgo Beauty
                </span>
              </Link>
              <button
                aria-label="Close menu"
                className="text-3xl leading-none"
                onClick={() => setMenuOpen(false)}
                style={{ color: theme.colors.text }}
                type="button"
              >
                x
              </button>
            </div>

            <nav className="mt-10 grid gap-5">
              <Link
                className="font-semibold"
                href={navigationActions.brandHome}
                onClick={() => setMenuOpen(false)}
                style={{ color: theme.colors.text, fontSize: sizes.font.lead }}
              >
                Home
              </Link>
              {navigation.map((item) =>
                "href" in item ? (
                  <Link
                    className="font-semibold"
                    href={item.href}
                    key={item.label}
                    onClick={() => setMenuOpen(false)}
                    style={{ color: theme.colors.text, fontSize: sizes.font.lead }}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <ContactModalTrigger
                    className="font-semibold"
                    key={item.label}
                    style={{ color: theme.colors.text, fontSize: sizes.font.lead, fontWeight: 600 }}
                  >
                    {item.label}
                  </ContactModalTrigger>
                ),
              )}
              <ContactModalTrigger mode="button" className="mt-4 w-full px-6 py-3 normal-case tracking-normal">
                Book
              </ContactModalTrigger>
            </nav>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
