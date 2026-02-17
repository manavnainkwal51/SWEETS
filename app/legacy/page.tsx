import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Our Legacy | Royal Punjab Mithai",
  description:
    "Discover the rich heritage of Royal Punjab Mithai. Three generations of handcrafted Punjabi sweets made with pure desi ghee and traditional recipes since 1952.",
}

export default function LegacyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Three Generations
            </span>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-wide text-primary md:text-5xl">
              Our Legacy
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brown-light">
              A story of devotion, purity, and the timeless art of making sweets
              the way they were always meant to be made.
            </p>
            <div className="mx-auto mt-6 gold-divider max-w-xs" />
          </div>
        </section>

        {/* Story */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            {/* Large Image */}
            <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-sm">
              <Image
                src="/images/legacy-photo.jpg"
                alt="Vintage photograph of the original Royal Punjab Mithai shop"
                fill
                className="object-cover sepia"
                sizes="(max-width: 1024px) 100vw, 900px"
                priority
              />
            </div>

            {/* Content */}
            <div className="mx-auto max-w-2xl">
              <h2 className="font-serif text-2xl font-medium text-primary md:text-3xl">
                The Beginning
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-brown-light">
                <p>
                  In 1952, in the narrow lanes of old Amritsar, Sardar Pritam
                  Singh opened the doors to a small shop that would eventually
                  become a beloved institution. Armed with nothing more than a
                  brass karahi, a coal-fired stove, and recipes passed down from
                  his mother, he began crafting sweets with a singular
                  commitment to purity.
                </p>
                <p>
                  Every morning before the sun rose over the Golden Temple, he
                  would begin his preparations. The ghee was always pure desi
                  ghee, sourced from the family dairy. The sugar was never
                  refined beyond necessity. The cardamom was hand-crushed, the
                  saffron carefully selected strand by strand.
                </p>
              </div>

              <div className="my-12 gold-divider" />

              <h2 className="font-serif text-2xl font-medium text-primary md:text-3xl">
                Carrying Forward
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-brown-light">
                <p>
                  When his son, Sardar Gurdev Singh, took over in the 1980s, the
                  commitment to quality never wavered. The shop expanded, the
                  reputation grew, but the methods remained the same. Each sweet
                  was still prepared by hand, tasted for perfection, and
                  presented with the pride of a craftsman.
                </p>
                <p>
                  Under Gurdev Singh, the shop began serving wedding families
                  across Punjab. The fame of our ladoo and barfi spread through
                  word of mouth alone &mdash; from one satisfied family to the
                  next.
                </p>
              </div>

              <div className="my-12 gold-divider" />

              <h2 className="font-serif text-2xl font-medium text-primary md:text-3xl">
                Today
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-brown-light">
                <p>
                  Now in its third generation, Royal Punjab Mithai continues to
                  honour the legacy of Sardar Pritam Singh. We serve families
                  across India and ship to Punjabi families around the world.
                  Our sweets have graced weddings in Delhi, Diwali celebrations
                  in London, and festival gatherings in Toronto.
                </p>
                <p>
                  We believe that the secret to great mithai is simple: pure
                  ingredients, traditional methods, and the patience to do
                  things right. In a world that rushes toward shortcuts, we
                  remain committed to the slow, careful art of sweet-making.
                </p>
                <p>
                  Every box that leaves our shop carries not just sweets, but
                  the warmth of three generations of devotion.
                </p>
              </div>

              {/* Values */}
              <div className="mt-16 grid gap-8 sm:grid-cols-3">
                {[
                  {
                    title: "Pure Ingredients",
                    description:
                      "Only genuine desi ghee, natural sugars, and hand-selected spices.",
                  },
                  {
                    title: "Traditional Methods",
                    description:
                      "Every sweet is hand-prepared using recipes passed down through generations.",
                  },
                  {
                    title: "Trusted Quality",
                    description:
                      "Seventy years of consistent quality, loved by families across the world.",
                  },
                ].map((value) => (
                  <div key={value.title} className="text-center">
                    <h3 className="font-serif text-lg font-medium text-primary">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brown-light">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
