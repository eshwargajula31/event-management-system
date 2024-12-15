'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UserDashboard() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    upcomingEvents: [
      { id: 1, name: 'TechConf 2024', date: '2024-09-15' },
      { id: 2, 'name': 'Marketing Summit', date: '2024-10-22' },
    ],
    pastEvents: [
      { id: 3, name: 'AI Symposium', date: '2023-11-05' },
      { id: 4, name: 'Startup Expo', date: '2023-12-01' },
    ],
  })

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Welcome, {user.name}</h1>
      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
          <TabsTrigger value="account">Account Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              {user.upcomingEvents.map((event) => (
                <div key={event.id} className="mb-4 p-4 border rounded">
                  <h3 className="font-semibold">{event.name}</h3>
                  <p>Date: {event.date}</p>
                  <Button className="mt-2">View Details</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past">
          <Card>
            <CardHeader>
              <CardTitle>Past Events</CardTitle>
            </CardHeader>
            <CardContent>
              {user.pastEvents.map((event) => (
                <div key={event.id} className="mb-4 p-4 border rounded">
                  <h3 className="font-semibold">{event.name}</h3>
                  <p>Date: {event.date}</p>
                  <Button variant="outline" className="mt-2">View Certificate</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" id="name" name="name" value={user.name} className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" id="email" name="email" value={user.email} className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3" />
                </div>
                <Button type="submit">Update Profile</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

