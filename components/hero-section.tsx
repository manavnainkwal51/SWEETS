import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-16 lg:flex-row lg:gap-12 lg:px-10 lg:py-24">
        {/* Left Content */}
        <div className="flex flex-1 flex-col gap-6 text-center lg:text-left animate-fade-in">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Established 1952
          </span>
          <h1 className="font-serif text-4xl font-medium leading-tight tracking-wide text-primary md:text-5xl lg:text-6xl text-balance">
            Crafted With Tradition. Served With Grace.
          </h1>
          <p className="max-w-md mx-auto text-base leading-relaxed text-brown-light lg:mx-0 lg:text-lg text-pretty">
            Authentic Punjabi sweets prepared with time-honored recipes and pure
            ingredients, passed down through three generations.
          </p>
          <div className="flex flex-col items-center gap-3 pt-2 sm:flex-row lg:items-start">
            <Link
              href="/collection"
              className="rounded-sm border border-gold px-7 py-3 text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              Explore Collection
            </Link>
            <Link
              href="/visit"
              className="rounded-sm bg-ivory-dark px-7 py-3 text-sm tracking-wide text-brown transition-colors duration-300 hover:bg-gold-faint"
            >
              Visit Our Store
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex-1 animate-fade-in-delay-1">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm lg:aspect-square">
            <Image
              src="/images/hero-sweets.jpg"
              alt="Premium Punjabi sweets arranged on a traditional brass thali"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Subtle gold corner accent */}
          <div className="absolute -bottom-3 -right-3 h-24 w-24 border-b border-r border-gold/30 lg:-bottom-4 lg:-right-4 lg:h-32 lg:w-32" />
        </div>
      </div>
    </section>
  )
}
