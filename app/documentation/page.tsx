import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-xl mb-6">
        Explore our comprehensive guides and API documentation to make the most of EventPro's features.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">User Guides</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Getting Started with EventPro</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Creating Your First Event</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Managing Attendees and Registrations</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Virtual Event Best Practices</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">API Documentation</h2>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-blue-500 hover:underline">API Overview</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Authentication</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Events API</Link>
            </li>
            <li>
              <Link href="#" className="text-blue-500 hover:underline">Attendees API</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-bold">How do I integrate EventPro with my existing systems?</h3>
            <p>Our API allows for seamless integration with your CRM, marketing tools, and more. Check out our Integration Guide for detailed instructions.</p>
          </div>
          <div>
            <h3 className="font-bold">What payment gateways does EventPro support?</h3>
            <p>We support major payment gateways including Stripe, PayPal, and Square. Visit our Payment Integration documentation for more information.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

