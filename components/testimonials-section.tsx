"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Harpreet Kaur",
    review:
      "The finest sweets we have ever tasted. Our entire family orders from Royal Punjab Mithai for every celebration. The purity of ingredients is unmatched.",
  },
  {
    name: "Rajinder Singh",
    review:
      "We have been ordering wedding hampers for over a decade. The quality and presentation are always impeccable. Our guests are always impressed.",
  },
  {
    name: "Anita Sharma",
    review:
      "As an NRI, finding authentic Punjabi sweets was always a challenge. Royal Punjab Mithai reminded me of my grandmother's kitchen. Pure nostalgia.",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <span className="text-xs uppercase tracking-[0.35em] text-gold">
          Trusted By Families
        </span>
        <h2 className="mt-3 font-serif text-3xl font-medium tracking-wide text-primary md:text-4xl">
          What Our Patrons Say
        </h2>

        {/* Testimonial Card */}
        <div className="mt-12 min-h-[200px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`transition-all duration-700 ${
                index === current
                  ? "opacity-100"
                  : "pointer-events-none absolute opacity-0"
              }`}
            >
              {index === current && (
                <div className="flex flex-col items-center gap-5">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-gold text-gold"
                      />
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="font-serif text-lg italic leading-relaxed text-brown md:text-xl">
                    &ldquo;{testimonial.review}&rdquo;
                  </blockquote>
                  {/* Name */}
                  <p className="text-sm tracking-wide text-brown-light">
                    &mdash; {testimonial.name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-6 bg-gold"
                  : "w-2 bg-gold/30"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
