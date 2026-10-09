import { sizes, theme } from "@/constants";
import { testimonials } from "@/components/home-data";
import { SectionHeader } from "./section-header";

export function TestimonialsSection() {
  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto" style={{ maxWidth: sizes.pageMaxWidth }}>
        <SectionHeader eyebrow="Guest notes" title="Thoughtful words from regulars." />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              className="border p-6"
              key={item.name}
              style={{ borderColor: theme.colors.border, borderRadius: theme.radius.md }}
            >
              <blockquote
                className="leading-7"
                style={{ color: theme.colors.text, fontSize: sizes.font.body }}
              >
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption
                className="mt-5"
                style={{ color: theme.colors.gold, fontSize: sizes.font.small }}
              >
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
