import { sizes, theme } from "@/constants";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p
        className="mb-3 uppercase tracking-[0.28em]"
        style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
      >
        {eyebrow}
      </p>
      <h2
        className="font-semibold leading-tight"
        style={{ color: theme.colors.text, fontSize: sizes.font.h2 }}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className="mx-auto mt-4 max-w-2xl leading-7"
          style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}
