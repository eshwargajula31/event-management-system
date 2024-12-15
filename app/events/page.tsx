'use client'

import { EventCard } from "@/components/event-card"

const events = [
  {
    id: 1,
    title: "TechConf 2024",
    description: "Annual technology conference featuring the latest in AI and blockchain.",
    date: "2024-09-15",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Green Earth Expo",
    description: "Exhibition showcasing sustainable technologies and eco-friendly products.",
    date: "2024-10-22",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Global Marketing Summit",
    description: "Bringing together marketing professionals from around the world.",
    date: "2024-11-05",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Health & Wellness Expo",
    description: "Explore the latest trends in health, fitness, and wellness.",
    date: "2024-12-01",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function EventsPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

