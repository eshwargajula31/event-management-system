import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Support</h1>
      <p className="text-xl mb-6">
        We're here to help you make the most of EventPro. Find answers to common questions or get in touch with our support team.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">How do I create a new event?</h3>
              <p>To create a new event, log in to your EventPro account, click on "Create Event" in the dashboard, and follow the step-by-step guide.</p>
            </div>
            <div>
              <h3 className="font-bold">Can I customize the registration form?</h3>
              <p>Yes, you can fully customize your registration form. Go to the "Registration" section in your event settings to add, remove, or edit fields.</p>
            </div>
            <div>
              <h3 className="font-bold">How do I set up a virtual event?</h3>
              <p>When creating your event, select "Virtual Event" as the event type. You'll then be able to set up live streaming, virtual networking rooms, and more.</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p className="mb-4">Can't find the answer you're looking for? Our support team is ready to assist you.</p>
          <Button asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
          <div className="mt-8">
            <h3 className="font-bold mb-2">Support Hours</h3>
            <p>Monday - Friday: 9am - 8pm EST</p>
            <p>Saturday - Sunday: 10am - 6pm EST</p>
          </div>
        </div>
      </div>
    </div>
  )
}

