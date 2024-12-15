'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function ConfirmationPage() {
  return (
    <div className="container py-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-xl mb-8">Thank you for your purchase. Your tickets have been booked successfully.</p>
      <div className="mb-8">
        <Image 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" 
          alt="Confirmation" 
          width={2070}
          height={1380}
          className="mx-auto w-full max-w-md rounded-lg"
        />
      </div>
      <p className="mb-4">An email with your ticket details has been sent to your registered email address.</p>
      <Button asChild>
        <Link href="/events">Explore More Events</Link>
      </Button>
    </div>
  )
}

