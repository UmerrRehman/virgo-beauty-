import { sizes, theme } from "@/constants";
import { highlights } from "@/components/home-data";

export function HighlightStrip() {
  return (
    <section
      className="border-y"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.espresso }}
    >
      <div
        className="mx-auto flex flex-wrap justify-center gap-x-9 gap-y-4 px-5 py-5"
        style={{ maxWidth: sizes.pageMaxWidth }}
      >
        {highlights.map((item) => (
          <span
            className="uppercase tracking-[0.2em]"
            key={item}
            style={{ color: theme.colors.goldSoft, fontSize: sizes.font.eyebrow }}
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
