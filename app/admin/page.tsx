'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [events, setEvents] = useState([
    { id: 1, name: 'TechConf 2024', date: '2024-09-15', attendees: 500 },
    { id: 2, name: 'Marketing Summit', date: '2024-10-22', attendees: 300 },
  ])

  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Attendee' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Organizer' },
  ])

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
      <Tabs defaultValue="events" className="space-y-4">
        <TabsList>
          <TabsTrigger value="events">Manage Events</TabsTrigger>
          <TabsTrigger value="users">Manage Users</TabsTrigger>
          <TabsTrigger value="settings">System Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Manage Events</CardTitle>
            </CardHeader>
            <CardContent>
              {events.map((event) => (
                <div key={event.id} className="mb-4 p-4 border rounded flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Attendees: {event.attendees}</p>
                  </div>
                  <div>
                    <Button variant="outline" className="mr-2">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              ))}
              <Button className="mt-4">Add New Event</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Manage Users</CardTitle>
            </CardHeader>
            <CardContent>
              {users.map((user) => (
                <div key={user.id} className="mb-4 p-4 border rounded flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Role: {user.role}</p>
                  </div>
                  <div>
                    <Button variant="outline" className="mr-2">Edit</Button>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </div>
              ))}
              <Button className="mt-4">Add New User</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">Site Name</label>
                  <input type="text" id="siteName" name="siteName" defaultValue="EventPro" className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3" />
                </div>
                <div>
                  <label htmlFor="adminEmail" className="block text-sm font-medium text-gray-700">Admin Email</label>
                  <input type="email" id="adminEmail" name="adminEmail" defaultValue="admin@eventpro.com" className="mt-1 block w-full border rounded-md shadow-sm py-2 px-3" />
                </div>
                <Button type="submit">Save Settings</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

