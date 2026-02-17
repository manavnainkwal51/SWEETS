import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

export const metadata: Metadata = {
  title: "Royal Punjab Mithai | Authentic Punjabi Sweets Since 1952",
  description:
    "Experience the finest handcrafted Punjabi sweets made with pure desi ghee and time-honored recipes. Premium wedding hampers, festival collections, and corporate gifting. Best sweet shop for authentic Indian mithai.",
  keywords: [
    "Punjabi sweets",
    "Indian mithai",
    "wedding sweets",
    "Diwali sweets",
    "premium Indian sweets",
    "desi ghee sweets",
    "sweet hampers",
    "corporate gifting sweets",
  ],
  openGraph: {
    title: "Royal Punjab Mithai | Authentic Punjabi Sweets Since 1952",
    description:
      "Handcrafted with tradition, served with grace. Premium Punjabi sweets made with pure ingredients.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
