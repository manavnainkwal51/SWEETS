import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-gold-light">
                Royal Punjab
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light/70">
                Mithai
              </p>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Crafted with tradition, served with grace. Authentic Punjabi
              sweets since 1952.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg text-gold-light">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/legacy", label: "Our Legacy" },
                { href: "/collection", label: "Collection" },
                { href: "/celebrations", label: "Celebrations" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/60 transition-colors duration-300 hover:text-gold-light"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg text-gold-light">Collections</h3>
            <div className="flex flex-col gap-2">
              {[
                "Diwali Collection",
                "Wedding Hampers",
                "Lohri Special",
                "Corporate Gifts",
              ].map((item) => (
                <Link
                  key={item}
                  href="/celebrations"
                  className="text-sm text-primary-foreground/60 transition-colors duration-300 hover:text-gold-light"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-serif text-lg text-gold-light">Visit Us</h3>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <p>123 Heritage Lane, Amritsar</p>
              <p>Punjab, India 143001</p>
              <p className="mt-2">+91 98765 43210</p>
              <p>Mon - Sun: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            {new Date().getFullYear()} Royal Punjab Mithai. All rights reserved.
            Crafted with love across generations.
          </p>
        </div>
      </div>
    </footer>
  )
}
