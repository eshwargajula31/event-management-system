'use client'

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

const eventTypes = [
  {
    title: "Corporate Events",
    description: "Conferences, seminars, and business meetings",
    features: [
      "Professional venue selection",
      "Registration management",
      "Speaker coordination",
      "Catering services",
    ],
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Virtual Events",
    description: "Online conferences and digital experiences",
    features: [
      "Live streaming",
      "Virtual networking",
      "Interactive sessions",
      "Digital content delivery",
    ],
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
  {
    title: "Hybrid Events",
    description: "Combined in-person and virtual experiences",
    features: [
      "Synchronized experiences",
      "Multi-platform engagement",
      "Real-time interaction",
      "Comprehensive analytics",
    ],
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
  },
]

export function EventTypes() {
  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Event Types We Support
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Choose the perfect event format for your needs
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {eventTypes.map((type, index) => (
          <motion.div
            key={type.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <Image src={type.image} alt={type.title} width={400} height={300} />
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg
                        className="h-4 w-4 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href="/events">View All Events</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

