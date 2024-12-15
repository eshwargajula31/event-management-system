import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function CorporateEventsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Corporate Events</h1>
      <p className="text-xl mb-6">
        We specialize in organizing professional corporate events that leave a lasting impression.
        From conferences and seminars to team-building workshops, we've got you covered.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Conference planning and execution</li>
            <li>Corporate seminars and workshops</li>
            <li>Team building events</li>
            <li>Product launches</li>
            <li>Annual meetings and shareholder events</li>
          </ul>
        </div>
        <div>
          <Image 
            src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
            alt="Corporate Event" 
            width={2070}
            height={1380}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Button asChild>
        <Link href="/contact">Get a Quote</Link>
      </Button>
    </div>
  )
}

