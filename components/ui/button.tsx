import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { sizes, theme } from "@/constants";
import { cn } from "@/lib/class-name";

type ButtonVariant = "primary" | "secondary";

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return "href" in props;
}

function isInternalHref(href: string) {
  return href.startsWith("/");
}

function buttonStyle(variant: ButtonVariant) {
  const isPrimary = variant === "primary";

  return {
    background: isPrimary
      ? `linear-gradient(180deg, ${theme.colors.gold}, #78651f)`
      : "rgba(159, 160, 154, 0.04)",
    borderColor: isPrimary ? theme.colors.gold : theme.colors.border,
    borderRadius: "9999px",
    boxShadow: isPrimary
      ? "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 12px 26px rgba(0, 0, 0, 0.28)"
      : "inset 0 1px 0 rgba(255, 255, 255, 0.06)",
    color: "#ffffff",
    fontSize: sizes.font.eyebrow,
    textShadow: "0 1px 5px rgba(0, 0, 0, 0.35)",
  };
}

export function Button({
  ...props
}: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center border px-5 py-3 text-center font-semibold uppercase tracking-[0.18em] shadow-sm transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#C9AF44]/45 focus:ring-offset-2 focus:ring-offset-[#10100f] active:translate-y-0",
    className,
  );

  if (isLinkButton(props)) {
    const { href } = props;
    const anchorProps = { ...props } as Partial<LinkButtonProps>;
    delete anchorProps.children;
    delete anchorProps.className;
    delete anchorProps.variant;
    delete anchorProps.href;
    const cleanAnchorProps = anchorProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

    if (isInternalHref(href)) {
      return (
        <Link className={classes} href={href} style={buttonStyle(variant)} {...cleanAnchorProps}>
          {children}
        </Link>
      );
    }

    return (
      <a className={classes} href={href} style={buttonStyle(variant)} {...cleanAnchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = { ...props };
  delete buttonProps.children;
  delete buttonProps.className;
  delete buttonProps.variant;

  return (
    <button className={classes} style={buttonStyle(variant)} {...buttonProps}>
      {children}
    </button>
  );
}
