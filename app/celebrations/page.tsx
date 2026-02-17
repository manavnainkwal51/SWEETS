import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Celebrations | Royal Punjab Mithai - Festival & Wedding Collections",
  description:
    "Make every celebration sweeter with our curated Diwali collections, wedding hampers, Lohri specials, and Rakhi gift boxes. Premium packaging with authentic Punjabi sweets.",
}

const celebrations = [
  {
    title: "Diwali Sweets Collection",
    slug: "diwali",
    image: "/images/celebration-diwali.jpg",
    description:
      "Illuminate your Festival of Lights with our curated Diwali boxes featuring the finest traditional sweets in premium packaging.",
    longDescription:
      "Diwali is the festival of new beginnings, and what better way to celebrate than with sweets made the traditional way? Our Diwali Collection features specially curated assortments of our finest mithai, presented in ornate boxes that reflect the grandeur of the occasion. From Kaju Katli to premium Ladoo, each piece is crafted to perfection. We offer customized hampers for families, corporate gifting, and NRI shipping to ensure your loved ones celebrate with the taste of home.",
    faq: [
      {
        q: "When should I place my Diwali order?",
        a: "We recommend placing orders at least 7 days before Diwali to ensure freshness and availability. Early orders receive priority packaging.",
      },
      {
        q: "Do you offer corporate Diwali gifting?",
        a: "Yes, we offer customized corporate Diwali hampers with your company branding. Minimum order of 25 boxes with special corporate pricing.",
      },
      {
        q: "Can you ship Diwali sweets internationally?",
        a: "Yes, we ship to USA, Canada, UK, and Australia. International orders should be placed at least 14 days before Diwali.",
      },
    ],
  },
  {
    title: "Wedding Hampers",
    slug: "wedding",
    image: "/images/celebration-wedding.jpg",
    description:
      "Elegant gift hampers designed for the most special occasion. Customized packaging with premium selections for your big day.",
    longDescription:
      "A Punjabi wedding is a grand celebration, and our wedding hampers are designed to match that grandeur. For over three generations, families across Punjab have trusted us to provide the sweets that mark their most joyous occasions. Our wedding hampers feature a curated selection of premium mithai, beautifully packaged in silk-lined boxes with personalized ribbons and cards. Whether you need 50 or 5,000 boxes, we deliver with the same attention to quality and presentation.",
    faq: [
      {
        q: "Can hampers be customized?",
        a: "Absolutely. We offer full customization of sweet selection, box design, ribbon colours, and personalized name cards at no extra cost for orders above 100 boxes.",
      },
      {
        q: "What is the minimum order for weddings?",
        a: "Our minimum order is 25 hampers. For orders above 200, we offer a tasting session for the family before the wedding.",
      },
      {
        q: "How far in advance should I order?",
        a: "We recommend placing wedding orders at least 3-4 weeks in advance. This allows time for customization, tasting, and any adjustments.",
      },
    ],
  },
]

const additionalCategories = [
  {
    title: "Lohri Special Pinni",
    description:
      "Celebrate the harvest festival with our traditional Punjabi Pinni, made with wheat flour, jaggery, and pure desi ghee. A winter delicacy that warms the heart.",
  },
  {
    title: "Rakhi Gift Boxes",
    description:
      "Show your sibling love with our specially crafted Rakhi hampers. Assorted premium sweets paired with elegant packaging for the bond that lasts a lifetime.",
  },
  {
    title: "Corporate Gifts",
    description:
      "Make a lasting impression with our corporate gifting solutions. Customized branding, premium packaging, and the finest sweets for your valued clients and partners.",
  },
  {
    title: "Custom Hampers",
    description:
      "Create your own combination from our complete range. Choose your sweets, select your packaging, and we will craft a hamper that is uniquely yours.",
  },
]

export default function CelebrationsPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              For Every Occasion
            </span>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-wide text-primary md:text-5xl">
              Celebrations, Made Sweeter
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brown-light">
              From festivals to weddings, our curated collections bring
              tradition and elegance to every occasion.
            </p>
            <div className="mx-auto mt-6 gold-divider max-w-xs" />
          </div>
        </section>

        {/* Featured Collections */}
        {celebrations.map((item, index) => (
          <section
            key={item.slug}
            className={`py-16 lg:py-20 ${
              index % 2 === 1 ? "bg-ivory-dark/50" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div
                className={`flex flex-col gap-10 lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } lg:gap-16`}
              >
                {/* Image */}
                <div className="relative flex-1">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-1 flex-col gap-4">
                  <h2 className="font-serif text-3xl font-medium text-primary">
                    {item.title}
                  </h2>
                  <p className="text-base leading-relaxed text-brown-light">
                    {item.longDescription}
                  </p>
                  <a
                    href={`https://wa.me/919876543210?text=I'm interested in ${item.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block w-fit rounded-sm border border-gold px-6 py-3 text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12 mx-auto max-w-3xl">
                <h3 className="mb-6 font-serif text-xl font-medium text-primary text-center">
                  Frequently Asked Questions
                </h3>
                <div className="flex flex-col gap-4">
                  {item.faq.map((faqItem) => (
                    <div
                      key={faqItem.q}
                      className="border border-gold/15 bg-card p-5"
                    >
                      <h4 className="font-serif text-base font-medium text-primary">
                        {faqItem.q}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-brown-light">
                        {faqItem.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Categories */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="mb-10 text-center font-serif text-3xl font-medium text-primary">
              More Celebrations
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {additionalCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="flex flex-col gap-3 border border-gold/15 bg-card p-6 lg:p-8"
                >
                  <h3 className="font-serif text-lg font-medium text-primary">
                    {cat.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-brown-light">
                    {cat.description}
                  </p>
                  <a
                    href={`https://wa.me/919876543210?text=I'm interested in ${cat.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-sm tracking-wide text-gold underline underline-offset-4 transition-colors duration-300 hover:text-maroon"
                  >
                    Enquire via WhatsApp
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
