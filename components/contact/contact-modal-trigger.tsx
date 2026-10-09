"use client";

import { useEffect, useId, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { contact, sizes, theme } from "@/constants";
import { cn } from "@/lib/class-name";

type ContactModalTriggerProps = {
  children: ReactNode;
  className?: string;
  mode?: "link" | "button";
  style?: CSSProperties;
};

const contactItems = [
  { label: "WhatsApp", value: contact.phone, href: contact.whatsappHref, icon: "WA" },
  { label: "Instagram", value: contact.instagram, href: contact.instagramHref, icon: "IG" },
  { label: "Email", value: contact.email, href: contact.emailHref, icon: "EM" },
  { label: "Phone", value: contact.phone, href: contact.phoneHref, icon: "PH" },
];

function buttonStyle() {
  return {
    background: `linear-gradient(180deg, ${theme.colors.gold}, #78651f)`,
    borderColor: theme.colors.gold,
    borderRadius: "9999px",
    boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 12px 26px rgba(0, 0, 0, 0.28)",
    color: "#ffffff",
    fontSize: sizes.font.eyebrow,
    textShadow: "0 1px 5px rgba(0, 0, 0, 0.35)",
  };
}

export function ContactModalTrigger({
  children,
  className,
  mode = "link",
  style,
}: ContactModalTriggerProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        className={
          mode === "button"
            ? cn(
                "inline-flex items-center justify-center border px-5 py-3 text-center font-semibold uppercase tracking-[0.18em] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#C9AF44]/45 focus:ring-offset-2 focus:ring-offset-[#10100f] active:translate-y-0",
                className,
              )
            : cn("text-left transition hover:opacity-80", className)
        }
        onClick={() => setOpen(true)}
        style={mode === "button" ? { ...buttonStyle(), ...style } : style}
        type="button"
      >
        {children}
      </button>

      {open ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center p-4"
          role="dialog"
        >
          <button
            aria-label="Close contact modal"
            className="modal-overlay absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            type="button"
          />
          <div
            className="modal-popup relative mx-auto max-h-[86vh] w-full max-w-3xl overflow-y-auto border p-5 shadow-2xl md:p-8"
            style={{
              backgroundColor: theme.colors.surface,
              borderColor: theme.colors.border,
              borderRadius: theme.radius.md,
            }}
          >
            <div className="mb-6 flex items-start justify-between gap-5">
              <div>
                <p
                  className="mb-2 uppercase tracking-[0.24em]"
                  style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
                >
                  Contact Virgo Beauty
                </p>
            
              </div>
              <button
                aria-label="Close"
                className="text-3xl leading-none transition hover:opacity-70"
                onClick={() => setOpen(false)}
                style={{ color: theme.colors.text }}
                type="button"
              >
                x
              </button>
            </div>

            <div>
           
              <div className="mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2">
                {contactItems.map((item) => (
                  <a
                    className="flex items-center gap-4 border-b pb-4 transition hover:translate-x-1"
                    href={item.href}
                    key={item.label}
                    style={{ borderColor: theme.colors.border }}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: "rgba(201, 175, 68, 0.1)",
                        color: theme.colors.gold,
                      }}
                    >
                      {item.icon}
                    </span>
                    <span className="min-w-0">
                      <span
                        className="block uppercase tracking-[0.2em]"
                        style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
                      >
                        {item.label}
                      </span>
                      <strong className="mt-1 block break-words font-semibold" style={{ color: theme.colors.text }}>
                        {item.value}
                      </strong>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
