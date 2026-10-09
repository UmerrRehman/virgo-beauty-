import { sizes, theme } from "@/constants";
import { serviceOffers } from "@/components/home-data";

export function ServicesAndOffersSection() {
  return (
    <section
      id="services-and-offers"
      className="px-5 pb-24 pt-8"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div className="mx-auto" style={{ maxWidth: sizes.pageMaxWidth }}>
        <h2 className="mb-10 text-center font-semibold" style={{ color: theme.colors.text, fontSize: sizes.font.h2 }}>
          Services
        </h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOffers.map((item) => (
            <article
              className="grid min-h-[260px] border p-6 text-center transition hover:-translate-y-1"
              key={item.title}
              style={{
                backgroundColor: theme.colors.surfaceSoft,
                borderColor: theme.colors.border,
                borderRadius: theme.radius.md,
              }}
            >
              <div>
                <p
                  className="uppercase tracking-[0.22em]"
                  style={{ color: theme.colors.gold, fontSize: sizes.font.eyebrow }}
                >
                  {item.label}
                </p>
                <h3
                  className="mt-4 font-semibold"
                  style={{ color: theme.colors.text, fontSize: sizes.font.h3 }}
                >
                  {item.title}
                </h3>
                <span className="mt-3 block text-3xl font-semibold" style={{ color: theme.colors.goldSoft }}>
                  {item.price}
                </span>
              </div>

              <p
                className="mt-5 leading-7"
                style={{ color: theme.colors.textMuted, fontSize: sizes.font.body }}
              >
                {item.detail}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {item.perks.map((perk) => (
                  <span
                    className="border px-3 py-1"
                    key={perk}
                    style={{
                      borderColor: theme.colors.border,
                      borderRadius: theme.radius.sm,
                      color: theme.colors.goldSoft,
                      fontSize: sizes.font.small,
                    }}
                  >
                    {perk}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
