'use client'

import { motion } from "framer-motion"

const stats = [
  { number: "1000+", label: "Events Managed" },
  { number: "50k+", label: "Attendees" },
  { number: "95%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Support" },
]

export function Stats() {
  return (
    <section className="container py-20">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="text-4xl font-bold text-blue-500 mb-2">{stat.number}</div>
            <div className="text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

