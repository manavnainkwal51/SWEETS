import Image from "next/image"
import Link from "next/link"

const celebrations = [
  {
    title: "Diwali Collection",
    description:
      "Illuminate your celebrations with our curated festival boxes, crafted to bring warmth and sweetness to every home.",
    image: "/images/celebration-diwali.jpg",
  },
  {
    title: "Wedding Hampers",
    description:
      "Elegant gift hampers designed for the most special occasion. Customized packaging with premium selections.",
    image: "/images/celebration-wedding.jpg",
  },
]

export function CelebrationsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            For Every Occasion
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-wide text-primary md:text-4xl">
            Celebrations, Made Sweeter
          </h2>
        </div>

        {/* Cards with phulkari-inspired subtle border */}
        <div className="grid gap-8 md:grid-cols-2">
          {celebrations.map((item) => (
            <Link
              key={item.title}
              href="/celebrations"
              className="group relative overflow-hidden border border-gold/20 bg-card transition-all duration-500 hover:border-gold/40"
            >
              {/* Subtle phulkari corner pattern */}
              <div className="absolute top-0 right-0 h-16 w-16 opacity-20">
                <svg viewBox="0 0 64 64" className="h-full w-full text-gold">
                  <pattern id="phulkari" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M0 4L4 0L8 4L4 8Z" fill="currentColor" opacity="0.3" />
                  </pattern>
                  <rect width="64" height="64" fill="url(#phulkari)" />
                </svg>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col gap-2 p-6 lg:p-8">
                <h3 className="font-serif text-xl font-medium text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-brown-light">
                  {item.description}
                </p>
                <span className="mt-2 text-sm tracking-wide text-gold underline underline-offset-4 transition-colors duration-300 group-hover:text-maroon">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional categories */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {["Lohri Special Pinni", "Corporate Gifts", "Rakhi Gift Boxes", "Custom Hampers"].map(
            (item) => (
              <Link
                key={item}
                href="/celebrations"
                className="flex items-center justify-between border border-gold/15 bg-card px-6 py-4 transition-colors duration-300 hover:border-gold/30"
              >
                <span className="font-serif text-base text-primary">
                  {item}
                </span>
                <span className="text-gold">&rarr;</span>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
