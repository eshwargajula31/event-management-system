'use client'

import { motion } from "framer-motion"
import { Calendar, Users, Globe2, BarChart4, CreditCard, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    icon: Calendar,
    title: "Event Planning",
    description: "Comprehensive tools for planning and organizing events of any scale.",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Users,
    title: "Registration Management",
    description: "Streamlined registration process with customizable forms and automated confirmations.",
    image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: Globe2,
    title: "Virtual Events",
    description: "Host engaging virtual and hybrid events with interactive features.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: BarChart4,
    title: "Analytics",
    description: "Detailed insights and reporting for event performance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Secure payment gateway integration for ticket sales and registrations.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Built-in tools for attendee communication and engagement.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
]

export function Features() {
  return (
    <section className="container py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Powerful Features for Event Success
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to create and manage successful events
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="mb-4 relative h-40 overflow-hidden rounded-lg">
              <Image 
                src={feature.image} 
                alt={feature.title} 
                width={1000}
                height={667}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <feature.icon className="h-12 w-12 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

