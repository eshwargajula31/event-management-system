'use client'

import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { EventTypes } from "@/components/event-types"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/stats"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <HeroSection />
      <Features />
      <EventTypes />
      <Stats />
      <Testimonials />
      <CTASection />
    </div>
  )
}

