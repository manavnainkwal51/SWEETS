import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Journal | Royal Punjab Mithai - Sweet Traditions & Festival Guides",
  description:
    "Explore stories of sweet traditions, festival guides, gifting advice, and ingredient stories from our heritage Punjabi sweet shop.",
}

const articles = [
  {
    title: "The History of Punjabi Pinni",
    date: "January 15, 2026",
    category: "Sweet Traditions",
    excerpt:
      "A journey through the centuries-old tradition of making Pinni, the quintessential Punjabi winter sweet that has warmed hearts across generations.",
    image: "/images/journal-pinni.jpg",
    slug: "history-of-punjabi-pinni",
    content: `Pinni is more than a sweet — it is a tradition woven into the fabric of Punjabi life. For centuries, as winter descends upon the plains of Punjab, families gather to prepare this humble yet nourishing delicacy. Made from whole wheat flour roasted slowly in pure desi ghee, sweetened with jaggery, and enriched with almonds, dried fruits, and edible gum, Pinni is the taste of home for millions.

The origins of Pinni trace back to Ayurvedic traditions, where it was prescribed as a warming food to build strength during the cold months. Mothers prepared it for new brides, grandmothers packed it for grandchildren leaving home, and families sent it to soldiers stationed in distant lands.

At Royal Punjab Mithai, we honour this tradition with the same reverence as our founders did. Our Pinni is prepared in small batches, using the finest wheat flour roasted until golden, mixed with jaggery that has been carefully reduced, and studded with premium dry fruits. Each ball is shaped by hand, carrying with it the warmth of our kitchen and the love of generations.

The beauty of Pinni lies in its simplicity. There are no artificial flavours, no shortcuts, and no compromises. It is Punjab, distilled into a sweet — honest, hearty, and deeply satisfying.`,
  },
  {
    title: "Why Pure Desi Ghee Matters",
    date: "December 8, 2025",
    category: "Ingredient Stories",
    excerpt:
      "Understanding the difference between genuine desi ghee and alternatives, and why it defines the taste of authentic mithai.",
    image: "/images/journal-ghee.jpg",
    slug: "why-pure-desi-ghee-matters",
    content: `In the world of Indian sweets, there is one ingredient that separates the ordinary from the extraordinary: pure desi ghee. This golden, aromatic clarified butter is not merely an ingredient — it is the soul of authentic mithai.

True desi ghee is made by slowly simmering butter churned from full-cream milk until the water evaporates and the milk solids separate, leaving behind a golden liquid with a nutty, rich aroma. This process, unchanged for thousands of years, produces a fat that is not only deeply flavourful but also carries nutritional benefits recognized by Ayurveda for millennia.

The difference between sweets made with genuine desi ghee and those made with vegetable oil or vanaspati is immediately apparent. Ghee-based sweets have a delicate, melt-in-the-mouth quality that no substitute can replicate. The aroma is warm and inviting, the texture is smooth, and the aftertaste is clean and satisfying.

At Royal Punjab Mithai, we source our ghee from trusted dairy farms in Punjab where cows are grass-fed and the milk is of the highest quality. We use ghee generously — not as a cost to be minimized, but as the foundation upon which every sweet is built.

When you taste our Ladoo, our Barfi, or our Pinni, you are tasting the difference that three generations of uncompromising quality standards make. That difference begins with pure desi ghee.`,
  },
  {
    title: "Top Wedding Sweet Hampers for 2026",
    date: "November 22, 2025",
    category: "Gifting Advice",
    excerpt:
      "A guide to selecting the perfect sweet hamper that complements the grandeur of Punjabi weddings and leaves a lasting impression.",
    image: "/images/journal-hampers.jpg",
    slug: "top-wedding-sweet-hampers",
    content: `A Punjabi wedding is a celebration like no other — vibrant, joyous, and grand in every way. And at the heart of every wedding celebration are the sweets that mark the occasion. Choosing the right sweet hamper is not just about taste; it is about making a statement that reflects the family's values and the importance of the occasion.

Here is our guide to selecting the perfect wedding sweet hamper for 2026:

The Classic Elegance Hamper features our signature Kaju Katli, Besan Ladoo, and Mathura Peda in a silk-lined box. This timeless combination is perfect for families who value tradition and want their hampers to reflect understated sophistication. Starting at Rs. 1,500 per box.

The Royal Heritage Hamper is our most premium offering, featuring twelve varieties of our finest sweets including Kaju Katli, Pista Barfi, Badam Peda, and seasonal specialties. Presented in a handcrafted wooden box with brass fittings. Starting at Rs. 3,500 per box.

The Contemporary Collection is designed for modern couples who appreciate tradition with a contemporary touch. Features a curated selection of fusion sweets alongside classics, presented in minimalist packaging. Starting at Rs. 2,000 per box.

No matter which hamper you choose, every sweet is prepared fresh, using pure ingredients and traditional methods. We offer complete customization of sweet selection, packaging design, and personalized name cards to make your wedding hampers truly unique.

Order early to ensure availability and allow time for any custom requests. We recommend placing wedding orders at least three to four weeks before the event.`,
  },
  {
    title: "How to Choose the Perfect Diwali Mithai",
    date: "October 10, 2025",
    category: "Festival Guides",
    excerpt:
      "Navigating the world of Diwali sweets: from traditional favourites to premium selections for gifting.",
    image: "/images/celebration-diwali.jpg",
    slug: "how-to-choose-diwali-mithai",
    content: `Diwali, the Festival of Lights, is incomplete without the exchange of sweets. But with so many varieties available, choosing the right mithai for gifting and celebrating can feel overwhelming. Here is our guide to selecting the perfect Diwali sweets.

For traditional families, nothing beats the classics: Besan Ladoo, Gulab Jamun, and Mathura Peda. These timeless sweets carry the warmth of tradition and are universally loved across all age groups. They travel well and have a good shelf life, making them ideal for Diwali gifting.

For premium gifting to business associates or special family members, consider our Kaju Katli or Pista Barfi. These premium dry sweets are elegant, sophisticated, and make a lasting impression. Paired with our signature gold-foiled packaging, they elevate any Diwali celebration.

For health-conscious recipients, our sugar-free collection offers the same traditional taste using natural sweeteners. Made with the same care and pure ingredients as our regular collection, these are perfect for elders and those mindful of their sugar intake.

Remember that the best Diwali mithai is always fresh. Order close to the festival for maximum freshness, and choose a trusted maker who uses pure ingredients. At Royal Punjab Mithai, every Diwali box is prepared fresh and shipped with care to ensure your celebrations are truly sweet.`,
  },
]

export default function JournalPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Stories & Traditions
            </span>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-wide text-primary md:text-5xl">
              From Our Journal
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brown-light">
              Exploring the rich traditions, ingredients, and stories behind
              the sweets we make and the celebrations we serve.
            </p>
            <div className="mx-auto mt-6 gold-divider max-w-xs" />
          </div>
        </section>

        {/* Articles */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="flex flex-col gap-16">
              {articles.map((article) => (
                <article key={article.slug} id={article.slug}>
                  {/* Image */}
                  <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-sm">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 900px"
                    />
                  </div>

                  {/* Meta */}
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                      {article.category}
                    </span>
                    <span className="text-xs text-brown-light/50">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl font-medium text-primary md:text-3xl">
                    {article.title}
                  </h2>

                  {/* Content */}
                  <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-brown-light">
                    {article.content.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="mt-12 gold-divider" />
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
