import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

export function VisitCtaSection() {
  return (
    <section className="bg-ivory-dark/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Map */}
          <div className="flex-1 w-full">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted">
              <iframe
                title="Royal Punjab Mithai Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108890.01125955!2d74.78929!3d31.63399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39197ca73d0c9be5%3A0x81427e3dc0e0844b!2sAmritsar%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Come Say Hello
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-wide text-primary md:text-4xl text-balance">
              Visit Us
            </h2>
            <p className="text-base leading-relaxed text-brown-light text-pretty">
              Step into our shop and experience the aroma of freshly prepared
              sweets. We are the best sweet shop in Amritsar, serving authentic
              Punjabi mithai with warmth and tradition.
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <div className="flex items-start gap-3 text-left">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-medium text-brown">
                    123 Heritage Lane, Amritsar
                  </p>
                  <p className="text-sm text-brown-light">Punjab, India 143001</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
                <p className="text-sm text-brown">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3 text-left">
                <Clock className="h-4 w-4 flex-shrink-0 text-gold" />
                <p className="text-sm text-brown">
                  Mon &ndash; Sun: 8:00 AM &ndash; 9:00 PM
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row lg:justify-start justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-[#25D366] px-6 py-3 text-center text-sm tracking-wide text-[#FFFDF8] transition-opacity duration-300 hover:opacity-90"
              >
                WhatsApp Us
              </a>
              <Link
                href="/visit"
                className="rounded-sm border border-gold px-6 py-3 text-center text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
