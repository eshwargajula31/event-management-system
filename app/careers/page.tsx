import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Careers at EventPro</h1>
      <p className="text-xl mb-6">
        Join our dynamic team and help shape the future of event management. We're always looking for talented individuals who are passionate about creating exceptional experiences.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Open Positions</h2>
      <ul className="space-y-4">
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold">Senior Full Stack Developer</h3>
          <p>Help us build and maintain our cutting-edge event management platform.</p>
        </li>
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold">Event Coordinator</h3>
          <p>Assist clients in planning and executing successful events using our platform.</p>
        </li>
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold">UX/UI Designer</h3>
          <p>Create intuitive and visually appealing interfaces for our web and mobile applications.</p>
        </li>
      </ul>
      <div className="mt-8">
        <p className="text-lg mb-4">
          Don't see a position that fits your skills? We're always interested in hearing from talented individuals. Send us your resume and let us know how you can contribute to our team.
        </p>
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

