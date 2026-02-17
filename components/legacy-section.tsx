import Image from "next/image"
import Link from "next/link"

export function LegacySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Sepia Image */}
          <div className="relative flex-1">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-sm mx-auto lg:mx-0">
              <Image
                src="/images/legacy-photo.jpg"
                alt="Vintage photograph of the original Royal Punjab Mithai shop, circa 1952"
                fill
                className="object-cover sepia"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            {/* Subtle gold corner accent */}
            <div className="absolute -top-3 -left-3 h-20 w-20 border-t border-l border-gold/30 lg:-top-4 lg:-left-4 lg:h-28 lg:w-28" />
          </div>

          {/* Story Content */}
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Since 1952
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-wide text-primary md:text-4xl text-balance">
              Our Legacy
            </h2>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-brown-light">
              <p>
                In the heart of Amritsar, our grandfather Sardar Pritam Singh
                began a humble sweet shop with nothing but a brass karahi, pure
                desi ghee, and recipes whispered by his mother. Every morning
                before dawn, he would prepare each sweet by hand, infusing them
                with the warmth of his devotion.
              </p>
              <p>
                Three generations later, we continue to honour that same
                devotion. Our sweets are still prepared using traditional methods
                &mdash; slow-cooked, hand-shaped, and made only with the purest
                ingredients. No shortcuts. No compromises.
              </p>
              <p>
                What began as a neighbourhood shop has become a trusted name for
                families across Punjab and beyond. From weddings to festivals, our
                sweets have been part of countless celebrations, carrying forward
                a legacy of purity and taste.
              </p>
            </div>
            <Link
              href="/legacy"
              className="mt-2 inline-block text-sm tracking-wide text-gold underline underline-offset-4 transition-colors duration-300 hover:text-maroon"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
