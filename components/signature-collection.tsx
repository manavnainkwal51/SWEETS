import Image from "next/image"
import Link from "next/link"

const products = [
  {
    name: "Besan Ladoo",
    price: "450",
    description: "Golden gram flour rounds enriched with pure desi ghee",
    image: "/images/product-ladoo.jpg",
  },
  {
    name: "Kaju Katli",
    price: "850",
    description: "Delicate cashew diamond slices with silver leaf",
    image: "/images/product-barfi.jpg",
  },
  {
    name: "Gulab Jamun",
    price: "380",
    description: "Soft milk dumplings soaked in rose-infused syrup",
    image: "/images/product-gulab-jamun.jpg",
  },
  {
    name: "Mathura Peda",
    price: "520",
    description: "Traditional milk peda with cardamom and saffron",
    image: "/images/product-peda.jpg",
  },
  {
    name: "Punjabi Pinni",
    price: "400",
    description: "Hearty wheat and jaggery balls with dry fruits",
    image: "/images/product-pinni.jpg",
  },
  {
    name: "Rasgulla",
    price: "350",
    description: "Spongy cottage cheese balls in light sugar syrup",
    image: "/images/product-rasgulla.jpg",
  },
]

export function SignatureCollection() {
  return (
    <section className="bg-ivory-dark/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-xs uppercase tracking-[0.35em] text-gold">
            Handcrafted Daily
          </span>
          <h2 className="mt-3 font-serif text-3xl font-medium tracking-wide text-primary md:text-4xl">
            Signature Collection
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brown-light">
            Each sweet is a testament to our heritage &mdash; crafted with care,
            prepared with pure ingredients.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              href="/collection"
              className="group flex flex-col bg-card transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-1 p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-lg font-medium text-primary transition-colors duration-300 group-hover:text-maroon">
                    {product.name}
                  </h3>
                  <span className="text-sm text-gold">
                    {"Rs. "}{product.price}/kg
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-brown-light">
                  {product.description}
                </p>
                <div className="mt-2 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="mt-12 text-center">
          <Link
            href="/collection"
            className="inline-block rounded-sm border border-gold px-8 py-3 text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
          >
            View Entire Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
