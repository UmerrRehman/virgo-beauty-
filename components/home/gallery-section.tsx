import { sizes, theme } from "@/constants";
import { gallery } from "@/components/home-data";
import { SectionHeader } from "./section-header";

export function GallerySection() {
  return (
    <section className="px-5 py-24" style={{ backgroundColor: theme.colors.background }}>
      <div className="mx-auto" style={{ maxWidth: sizes.pageMaxWidth }}>
        <SectionHeader eyebrow="Salon moments" title="Textured rooms, polished finishes." />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              className="flex aspect-[4/3] items-end border p-5"
              key={item}
              style={{
                background: `linear-gradient(${130 + index * 12}deg, ${theme.colors.surfaceMuted}, ${theme.colors.espresso})`,
                borderColor: theme.colors.border,
                borderRadius: theme.radius.md,
                boxShadow: index === 1 ? theme.shadows.glow : "none",
              }}
            >
              <span
                className="font-semibold"
                style={{ color: theme.colors.text, fontSize: sizes.font.h3 }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
