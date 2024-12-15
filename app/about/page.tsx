import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">About EventPro</h1>
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <p className="text-xl mb-4">
            EventPro is a leading event management platform dedicated to helping businesses and individuals create unforgettable experiences. With our cutting-edge technology and passionate team, we've been transforming the event industry since 2010.
          </p>
          <p className="text-xl mb-4">
            Our mission is to simplify event planning and execution, allowing our clients to focus on what matters most - creating meaningful connections and impactful moments.
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3" 
            alt="EventPro Team" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="grid md:grid-cols-3 gap-6">
          <li className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2">Innovation</h3>
            <p>We constantly push the boundaries of what's possible in event management.</p>
          </li>
          <li className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2">Customer-Centric</h3>
            <p>Our clients' success is our top priority, driving everything we do.</p>
          </li>
          <li className="bg-muted p-4 rounded-lg">
            <h3 className="font-bold mb-2">Reliability</h3>
            <p>We deliver consistent, high-quality experiences for every event.</p>
          </li>
        </ul>
      </div>
      <div className="mt-10">
  <h2 className="text-2xl font-semibold mb-4">Meet the Owner</h2>
  <p className="mb-4">
    Curious about the mind behind EventPro? Learn more about our founder and visionary leader.
  </p>
  <Button asChild>
    <Link href="/owner">Meet Eshwar</Link>
  </Button>
</div>
    </div>
  )
}

