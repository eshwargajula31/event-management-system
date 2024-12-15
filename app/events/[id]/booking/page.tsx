'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function BookingPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const quantity = parseInt(searchParams.get('quantity') || '1')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/events/1/payment?quantity=${quantity}`)
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Booking Details</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label htmlFor="phone">Phone</Label>
          <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <Label>Quantity</Label>
          <p className="text-lg font-semibold">{quantity}</p>
        </div>
        <Button type="submit" className="w-full">Proceed to Payment</Button>
      </form>
    </div>
  )
}

