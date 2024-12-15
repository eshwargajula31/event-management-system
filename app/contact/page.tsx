'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission, e.g., sending data to an API
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xl mb-4">
            Have questions or need assistance? We're here to help. Fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
            <p>Email: support@eventpro.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Event Street, Suite 100, New York, NY 10001</p>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Connect with the Owner</h2>
            <p className="mb-4">
              Want to discuss your event needs directly with our founder? Get in touch with Eshwar for personalized insights and solutions.
            </p>
            <Button asChild>
              <Link href="/owner">Connect with Eshwar</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

