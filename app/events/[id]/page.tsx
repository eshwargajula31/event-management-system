'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const eventDetails = {
  id: 1,
  title: "TechConf 2024",
  description: "Annual technology conference featuring the latest in AI and blockchain.",
  date: "2024-09-15",
  location: "San Francisco, CA",
  image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  price: 299,
  availableTickets: 500,
}

export default function EventDetailsPage() {
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const handleBooking = () => {
    router.push(`/events/${eventDetails.id}/booking?quantity=${quantity}`)
  }

  return (
    <div className="container py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <Image src={eventDetails.image} alt={eventDetails.title} width={2070} height={1380} className="w-full h-96 object-cover rounded-lg" />
        <div>
          <h1 className="text-4xl font-bold mb-4">{eventDetails.title}</h1>
          <p className="text-xl mb-4">{eventDetails.description}</p>
          <p className="mb-2"><strong>Date:</strong> {new Date(eventDetails.date).toLocaleDateString()}</p>
          <p className="mb-2"><strong>Location:</strong> {eventDetails.location}</p>
          <p className="mb-2"><strong>Price:</strong> ${eventDetails.price}</p>
          <p className="mb-4"><strong>Available Tickets:</strong> {eventDetails.availableTickets}</p>
          <div className="flex items-center gap-4 mb-4">
            <label htmlFor="quantity" className="font-semibold">Quantity:</label>
            <input
              type="number"
              id="quantity"
              min="1"
              max={eventDetails.availableTickets}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-20 p-2 border rounded"
            />
          </div>
          <Button onClick={handleBooking} className="w-full">Book Now</Button>
        </div>
      </div>
    </div>
  )
}

