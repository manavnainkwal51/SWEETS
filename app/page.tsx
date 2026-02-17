import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { GoldDivider } from "@/components/gold-divider"
import { LegacySection } from "@/components/legacy-section"
import { SignatureCollection } from "@/components/signature-collection"
import { CelebrationsSection } from "@/components/celebrations-section"
import { JournalSection } from "@/components/journal-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { VisitCtaSection } from "@/components/visit-cta-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <GoldDivider />
        <LegacySection />
        <GoldDivider />
        <SignatureCollection />
        <GoldDivider />
        <CelebrationsSection />
        <GoldDivider />
        <JournalSection />
        <GoldDivider />
        <TestimonialsSection />
        <GoldDivider />
        <VisitCtaSection />
      </main>
      <SiteFooter />
    </div>
  )
}
