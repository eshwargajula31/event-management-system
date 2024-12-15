import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function VirtualEventsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Virtual Events</h1>
      <p className="text-xl mb-6">
        Embrace the future of events with our cutting-edge virtual event solutions.
        We create engaging online experiences that connect your audience from anywhere in the world.
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Virtual Event Features:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Interactive webinars and workshops</li>
            <li>Virtual trade shows and exhibitions</li>
            <li>Online networking sessions</li>
            <li>Live streaming with Q&A capabilities</li>
            <li>Virtual team building activities</li>
          </ul>
        </div>
        <div>
          <Image 
            src="https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
            alt="Virtual Event" 
            width={2070}
            height={1380}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Button asChild>
        <Link href="/contact">Learn More</Link>
      </Button>
    </div>
  )
}

