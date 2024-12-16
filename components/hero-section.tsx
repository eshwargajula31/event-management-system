'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { PlayCircle } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 opacity-10" />
      <div className="container relative">
        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div 
            className="flex flex-col justify-center gap-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Corporate Event Management Software
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Comprehensive Event Management System for In-Person, Virtual & Hybrid Events.
              Enhance Experiences for Organizers, Speakers, Exhibitors, Sponsors & Attendees.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
                <Link href="/register">
                  Get Started
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                <PlayCircle className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square w-full max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-green-500 rounded-3xl opacity-20 blur-2xl" />
              <Image
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Event Management Dashboard"
                width={1000}
                height={1000}
                className="relative rounded-3xl border shadow-2xl object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

