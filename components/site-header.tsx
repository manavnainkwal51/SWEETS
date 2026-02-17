"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/legacy", label: "Our Legacy" },
  { href: "/collection", label: "Collection" },
  { href: "/celebrations", label: "Celebrations" },
  { href: "/journal", label: "Journal" },
  { href: "/visit", label: "Visit Us" },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-start">
          <span className="font-serif text-xl font-semibold tracking-wide text-primary lg:text-2xl">
            Royal Punjab
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold lg:text-xs">
            Mithai
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-brown-light transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Order Button + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/collection"
            className="hidden rounded-sm border border-gold px-5 py-2 text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground lg:inline-block"
          >
            Order Now
          </Link>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-gold-faint bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-gold-faint py-3 text-sm tracking-wide text-brown-light transition-colors duration-300 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/collection"
              onClick={() => setMobileOpen(false)}
              className="mt-4 rounded-sm border border-gold px-5 py-2.5 text-center text-sm tracking-wide text-gold transition-colors duration-300 hover:bg-gold hover:text-primary-foreground"
            >
              Order Now
            </Link>
          </nav>
        </div>
      )}

      {/* Subtle bottom shadow line */}
      <div className="gold-divider" />
    </header>
  )
}
