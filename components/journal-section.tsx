import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    title: "The History of Punjabi Pinni",
    date: "January 15, 2026",
    excerpt:
      "A journey through the centuries-old tradition of making Pinni, the quintessential Punjabi winter sweet.",
    image: "/images/journal-pinni.jpg",
    slug: "history-of-punjabi-pinni",
  },
  {
    title: "Why Pure Desi Ghee Matters",
    date: "December 8, 2025",
    excerpt:
      "Understanding the difference between genuine desi ghee and alternatives, and why it defines the taste of authentic mithai.",
    image: "/images/journal-ghee.jpg",
    slug: "why-pure-desi-ghee-matters",
  },
  {
    title: "Top Wedding Sweet Hampers",
    date: "November 22, 2025",
    excerpt:
      "A guide to selecting the perfect sweet hamper that complements the grandeur of Punjabi weddings.",
    image: "/images/journal-hampers.jpg",
    slug: "top-wedding-sweet-hampers",
  },
]

export function JournalSection() {
  return (
    <section className="bg-ivory-dark/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Stories & Traditions
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-wide text-primary md:text-4xl">
            From Our Journal
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href="/journal"
              className="group flex flex-col bg-card transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs text-brown-light/60">
                  {article.date}
                </span>
                <h3 className="font-serif text-lg font-medium leading-snug text-primary transition-colors duration-300 group-hover:text-maroon">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-brown-light">
                  {article.excerpt}
                </p>
                <span className="mt-auto pt-3 text-sm tracking-wide text-gold underline underline-offset-4 transition-colors duration-300 group-hover:text-maroon">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/journal"
            className="inline-block text-sm tracking-wide text-gold underline underline-offset-4 transition-colors duration-300 hover:text-maroon"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  )
}
