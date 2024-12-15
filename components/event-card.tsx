import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  image: string
}

export function EventCard({ event }: { event: Event }) {
  return (
    <Card className="overflow-hidden">
      <Image src={event.image} alt={event.title} width={400} height={300} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-2">{event.description}</p>
        <p className="text-sm">
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p className="text-sm">
          <strong>Location:</strong> {event.location}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

