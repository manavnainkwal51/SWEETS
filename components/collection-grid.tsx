"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

const categories = ["All", "Traditional", "Premium", "Festival Special", "Dry Sweets"]

const allProducts = [
  {
    name: "Besan Ladoo",
    price: "450",
    category: "Traditional",
    description: "Golden gram flour rounds enriched with pure desi ghee and cardamom",
    ingredients: "Gram flour, desi ghee, sugar, cardamom, pistachios",
    image: "/images/product-ladoo.jpg",
  },
  {
    name: "Kaju Katli",
    price: "850",
    category: "Premium",
    description: "Delicate cashew diamond slices finished with edible silver leaf",
    ingredients: "Cashew nuts, sugar, silver leaf (vark), cardamom",
    image: "/images/product-barfi.jpg",
  },
  {
    name: "Gulab Jamun",
    price: "380",
    category: "Traditional",
    description: "Soft milk dumplings soaked in fragrant rose-infused sugar syrup",
    ingredients: "Milk solids, flour, sugar, rose water, saffron",
    image: "/images/product-gulab-jamun.jpg",
  },
  {
    name: "Mathura Peda",
    price: "520",
    category: "Traditional",
    description: "Traditional milk peda from Mathura with rich cardamom and saffron notes",
    ingredients: "Reduced milk, sugar, cardamom, saffron, pistachios",
    image: "/images/product-peda.jpg",
  },
  {
    name: "Punjabi Pinni",
    price: "400",
    category: "Traditional",
    description: "Hearty wheat flour and jaggery balls studded with dry fruits and desi ghee",
    ingredients: "Wheat flour, jaggery, desi ghee, almonds, dried fruits",
    image: "/images/product-pinni.jpg",
  },
  {
    name: "Rasgulla",
    price: "350",
    category: "Traditional",
    description: "Spongy cottage cheese balls soaked in light cardamom sugar syrup",
    ingredients: "Cottage cheese, sugar, cardamom, rose water",
    image: "/images/product-rasgulla.jpg",
  },
  {
    name: "Diwali Gift Box",
    price: "1,200",
    category: "Festival Special",
    description: "A curated selection of our finest sweets in an ornate gift box for Diwali",
    ingredients: "Assorted premium sweets, decorative packaging",
    image: "/images/celebration-diwali.jpg",
  },
  {
    name: "Wedding Hamper",
    price: "2,500",
    category: "Premium",
    description: "Luxurious assortment in premium packaging, perfect for wedding celebrations",
    ingredients: "Kaju Katli, Ladoo, Barfi, Peda, dry fruits",
    image: "/images/celebration-wedding.jpg",
  },
]

export function CollectionGrid() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null)

  const filtered =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory)

  return (
    <section className="pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-sm px-5 py-2 text-sm tracking-wide transition-colors duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "border border-gold/20 text-brown-light hover:border-gold/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              className="group flex flex-col bg-card text-left transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 transition-all duration-500 group-hover:bg-primary/10">
                  <span className="translate-y-4 text-sm tracking-wide text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    View Details
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                  {product.category}
                </span>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-lg font-medium text-primary">
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
            </button>
          ))}
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary/40 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <div
              className="relative w-full max-w-2xl bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 text-sm text-brown-light hover:text-primary"
                aria-label="Close detail view"
              >
                Close
              </button>
              <div className="flex flex-col md:flex-row">
                <div className="relative aspect-square w-full md:w-1/2">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6 md:w-1/2 md:p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold/70">
                    {selectedProduct.category}
                  </span>
                  <h2 className="font-serif text-2xl font-medium text-primary">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-base leading-relaxed text-brown-light">
                    {selectedProduct.description}
                  </p>
                  <div className="gold-divider" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brown-light/60">
                      Ingredients
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-brown-light">
                      {selectedProduct.ingredients}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-brown-light/60">
                      Price
                    </p>
                    <p className="mt-1 font-serif text-xl text-gold">
                      Rs. {selectedProduct.price}/kg
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <a
                      href={`https://wa.me/919876543210?text=I'd like to order ${selectedProduct.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm tracking-wide text-primary-foreground transition-opacity duration-300 hover:opacity-90"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Order via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
