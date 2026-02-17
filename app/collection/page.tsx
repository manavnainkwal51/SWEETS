import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CollectionGrid } from "@/components/collection-grid"

export const metadata: Metadata = {
  title: "Our Collection | Royal Punjab Mithai",
  description:
    "Browse our complete range of handcrafted Punjabi sweets. From traditional Ladoo and Barfi to premium Kaju Katli and festival specials, each sweet is made with pure desi ghee.",
}

export default function CollectionPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Handcrafted With Love
            </span>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-wide text-primary md:text-5xl">
              Our Collection
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brown-light">
              Every sweet tells a story of tradition, purity, and the art of
              making mithai the way it was always meant to be.
            </p>
            <div className="mx-auto mt-6 gold-divider max-w-xs" />
          </div>
        </section>

        <CollectionGrid />
      </main>
      <SiteFooter />
    </div>
  )
}
