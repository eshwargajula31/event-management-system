import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function HybridEventsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Hybrid Events</h1>
      <p className="text-xl mb-6">
        Get the best of both worlds with our hybrid event solutions.
        We seamlessly blend in-person and virtual experiences to maximize your event's reach and impact.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Benefits of Hybrid Events:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Increased attendance and participation</li>
            <li>Cost-effective for attendees and organizers</li>
            <li>Expanded global reach</li>
            <li>Enhanced engagement through multiple channels</li>
            <li>Valuable data and analytics from both in-person and online interactions</li>
          </ul>
        </div>
        <div>
          <Image 
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
            alt="Hybrid Event" 
            width={2070}
            height={1380}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Button asChild>
        <Link href="/contact">Explore Hybrid Solutions</Link>
      </Button>
    </div>
  )
}

