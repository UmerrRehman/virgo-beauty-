import type { ReactNode } from "react";
import { contact, sizes, theme } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SectionHeader } from "./section-header";

type ContactItem = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
};

function IconWrap({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
      style={{
        backgroundColor: "rgba(201, 175, 68, 0.1)",
        color: theme.colors.gold,
      }}
    >
      {children}
    </span>
  );
}

const iconClass = "h-5 w-5";

function WhatsAppIcon() {
  return (
    <IconWrap>
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M7.5 19.2 4 20l.9-3.3A8 8 0 1 1 12 20a8.1 8.1 0 0 1-4.5-1.3Z" />
        <path d="M9.2 8.4c.2-.4.4-.4.7-.4h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.7 1.2 1.6 2 2.8 2.7l.6-.5c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.6c0 .3-.1.5-.4.7-.5.3-1 .5-1.7.5-2.9 0-7-4.1-7-7 0-.6.2-1.2.5-1.6Z" />
      </svg>
    </IconWrap>
  );
}

function InstagramIcon() {
  return (
    <IconWrap>
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M16.5 7.8h.1" />
      </svg>
    </IconWrap>
  );
}

function EmailIcon() {
  return (
    <IconWrap>
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M5 7h14v10H5V7Z" />
        <path d="m5 8 7 5 7-5" />
      </svg>
    </IconWrap>
  );
}

function PhoneIcon() {
  return (
    <IconWrap>
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
        <path d="M7.5 5h2.3l1.1 3-1.6 1.2c.8 1.8 2.2 3.2 4 4l1.2-1.6 3 1.1V15c0 1.2-1 2-2.1 1.9C10.8 16.5 7.5 13.2 7.1 8.6 7 7.5 7.9 5 7.5 5Z" />
      </svg>
    </IconWrap>
  );
}

const contactItems: ContactItem[] = [
  {
    label: "WhatsApp",
    value: contact.phone,
    href: contact.whatsappHref,
    icon: <WhatsAppIcon />,
  },
  {
    label: "Instagram",
    value: contact.instagram,
    href: contact.instagramHref,
    icon: <InstagramIcon />,
  },
  {
    label: "Email",
    value: contact.email,
    href: contact.emailHref,
    icon: <EmailIcon />,
  },
  {
    label: "Phone",
    value: contact.phone,
    href: contact.phoneHref,
    icon: <PhoneIcon />,
  },
];

export function ContactSection() {
  return (
    <section id="contact" style={{ backgroundColor: theme.colors.surface }}>
      <div className="px-5 py-24">
        <div className="mx-auto" style={{ maxWidth: sizes.pageMaxWidth }}>
          <SectionHeader
            eyebrow="Contact Us"
            title="Get in Touch with Virgo Beauty"
            copy="Reach us on WhatsApp, Instagram, email or phone for service details, salon offers and appointment support."
          />

          <div className="mx-auto grid max-w-5xl gap-x-10 gap-y-8 md:grid-cols-2">
            {contactItems.map((item) => (
              <a
                className="group flex items-center gap-4 border-b pb-6 transition hover:translate-x-1"
                href={item.href}
                key={item.label}
                style={{
                  borderColor: theme.colors.border,
                }}
              >
                {item.icon}
                <span className="min-w-0">
                  <span
                    className="block uppercase tracking-[0.2em]"
                    style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
                  >
                    {item.label}
                  </span>
                  <strong className="mt-2 block break-words font-semibold" style={{ color: theme.colors.text }}>
                    {item.value}
                  </strong>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t px-5 py-24" style={{ borderColor: theme.colors.border }}>
        <div
          className="mx-auto grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          style={{ maxWidth: sizes.pageMaxWidth }}
        >
          <SectionHeader
            eyebrow="Book Appointment"
            title="Plan your next appointment."
            copy="Share your preferred service and timing. Our team will get back to you with appointment details."
          />

          <form className="grid gap-4">
            {contact.formFields.map((label) => (
              <Input key={label} label={label} />
            ))}
            <Button type="submit" className="mt-2">
              Send request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
