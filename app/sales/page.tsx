import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SalesPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Sales Inquiries</h1>
      <p className="text-xl mb-6">
        Interested in EventPro for your organization? Our sales team is ready to help you find the perfect solution for your event management needs.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose EventPro?</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Comprehensive event management platform
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Customizable solutions for businesses of all sizes
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            24/7 customer support
          </li>
          <li className="flex items-center">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7" />
            </svg>
            Seamless integration with existing systems
          </li>
        </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-4">Ready to take your events to the next level? Contact our sales team to discuss your needs and get a personalized demo.</p>
          <Button asChild>
            <Link href="/contact">Contact Sales</Link>
          </Button>
          <div className="mt-8">
            <h3 className="font-bold mb-2">Sales Team Hours</h3>
            <p>Monday - Friday: 9am - 6pm EST</p>
          </div>
        </div>
      </div>
    </div>
  )
}

