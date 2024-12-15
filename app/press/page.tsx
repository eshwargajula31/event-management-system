import Link from "next/link"

export default function PressPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Press and Media</h1>
      <p className="text-xl mb-6">
        Stay up-to-date with the latest news and announcements from EventPro. For media inquiries, please contact our press team.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Recent Press Releases</h2>
      <ul className="space-y-4">
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold">EventPro Launches AI-Powered Event Recommendations</h3>
          <p className="text-sm text-muted-foreground">June 15, 2023</p>
          <p>Our new AI feature helps event organizers create personalized experiences for attendees.</p>
        </li>
        <li className="bg-muted p-4 rounded-lg">
          <h3 className="font-bold">EventPro Expands to European Market</h3>
          <p className="text-sm text-muted-foreground">April 3, 2023</p>
          <p>We're excited to announce our expansion into key European markets, bringing our innovative event management solutions to a wider audience.</p>
        </li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Media Resources</h2>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-blue-500 hover:underline">Download Press Kit</Link>
          </li>
          <li>
            <Link href="#" className="text-blue-500 hover:underline">Company Logos</Link>
          </li>
          <li>
            <Link href="#" className="text-blue-500 hover:underline">Executive Bios</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

