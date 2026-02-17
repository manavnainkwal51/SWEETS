import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Visit Us | Royal Punjab Mithai - Best Sweet Shop in Amritsar",
  description:
    "Visit Royal Punjab Mithai, the best sweet shop in Amritsar. Authentic Punjabi sweets made with pure desi ghee. Open daily 8 AM - 9 PM. WhatsApp orders welcome.",
}

export default function VisitPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        {/* Page Header */}
        <section className="py-16 text-center lg:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <span className="text-xs uppercase tracking-[0.35em] text-gold">
              Come Say Hello
            </span>
            <h1 className="mt-3 font-serif text-4xl font-medium tracking-wide text-primary md:text-5xl">
              Visit Us
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brown-light">
              Step into our shop and experience the aroma of freshly prepared
              sweets. We are the best sweet shop in Amritsar, and we would love
              to welcome you.
            </p>
            <div className="mx-auto mt-6 gold-divider max-w-xs" />
          </div>
        </section>

        {/* Map + Info */}
        <section className="pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
              {/* Map */}
              <div className="flex-1">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-sm bg-muted lg:aspect-square">
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

              {/* Contact Info */}
              <div className="flex flex-1 flex-col gap-8">
                <h2 className="font-serif text-3xl font-medium text-primary">
                  Get in Touch
                </h2>

                <div className="flex flex-col gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-faint">
                      <MapPin className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-medium text-primary">
                        Address
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brown-light">
                        123 Heritage Lane, Near Golden Temple Road
                        <br />
                        Amritsar, Punjab, India 143001
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-faint">
                      <Phone className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-medium text-primary">
                        Phone
                      </h3>
                      <p className="mt-1 text-sm text-brown-light">
                        +91 98765 43210
                      </p>
                      <p className="text-sm text-brown-light">
                        +91 98765 43211
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-faint">
                      <Clock className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-medium text-primary">
                        Store Hours
                      </h3>
                      <p className="mt-1 text-sm text-brown-light">
                        Monday &ndash; Sunday
                      </p>
                      <p className="text-sm text-brown-light">
                        8:00 AM &ndash; 9:00 PM
                      </p>
                      <p className="mt-1 text-xs text-brown-light/60">
                        Open all days including festivals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold-faint">
                      <MessageCircle className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-medium text-primary">
                        WhatsApp
                      </h3>
                      <p className="mt-1 text-sm text-brown-light">
                        Message us for orders, enquiries, and custom hampers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="gold-divider" />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm tracking-wide text-[#FFFDF8] transition-opacity duration-300 hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Us
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 rounded-sm border border-gold px-6 py-3 text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </div>

                {/* Local SEO Text */}
                <p className="text-sm leading-relaxed text-brown-light/60">
                  Royal Punjab Mithai is recognised as one of the best sweet
                  shops in Amritsar, Punjab. We specialise in authentic Punjabi
                  sweets including Ladoo, Barfi, Gulab Jamun, Pinni, and
                  premium wedding hampers. Serving families across Punjab and
                  shipping nationwide.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
