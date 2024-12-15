'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const eventDetails = {
  id: 1,
  title: "TechConf 2024",
  price: 299,
}

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const quantity = parseInt(searchParams.get('quantity') || '1')

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/events/1/confirmation`)
  }

  const totalAmount = eventDetails.price * quantity

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Payment</h1>
      <div className="max-w-md mx-auto">
        <div className="mb-6 p-4 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <p><strong>Event:</strong> {eventDetails.title}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Total Amount:</strong> ${totalAmount}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input type="text" id="cardNumber" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" value={paymentData.expiryDate} onChange={handleChange} required />
          </div>
          <div className="mb-4">
            <Label htmlFor="cvv">CVV</Label>
            <Input type="text" id="cvv" name="cvv" value={paymentData.cvv} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full">Pay ${totalAmount}</Button>
        </form>
      </div>
    </div>
  )
}

