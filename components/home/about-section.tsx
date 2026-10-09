import { sizes, theme } from "@/constants";
import { stats } from "@/components/home-data";
import { SectionHeader } from "./section-header";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24" style={{ backgroundColor: theme.colors.background }}>
      <div
        className="mx-auto grid gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        style={{ maxWidth: sizes.pageMaxWidth }}
      >
        <SectionHeader
          eyebrow="Our approach"
          title="Made-to-measure beauty without the rush."
          copy="Virgo Beauty is designed around calm consultation, precise service, and details that feel personal instead of performative."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              className="border p-6"
              key={stat.label}
              style={{ borderColor: theme.colors.border, borderRadius: theme.radius.md }}
            >
              <strong className="block text-4xl font-semibold" style={{ color: theme.colors.gold }}>
                {stat.value}
              </strong>
              <span
                className="mt-3 block leading-6"
                style={{ color: theme.colors.textMuted, fontSize: sizes.font.small }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
