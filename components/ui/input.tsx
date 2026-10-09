import type { InputHTMLAttributes } from "react";
import { sizes, theme } from "@/constants";
import { cn } from "@/lib/class-name";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label
      className="grid gap-2"
      style={{ color: theme.colors.textMuted, fontSize: sizes.font.small }}
    >
      {label}
      <input
        className={cn("border px-4 py-3 outline-none", className)}
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.border,
          borderRadius: theme.radius.sm,
          color: theme.colors.text,
          fontSize: sizes.font.body,
        }}
        {...props}
      />
    </label>
  );
}
