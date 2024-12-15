import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Basic",
    price: "$99",
    description: "Perfect for small events",
    features: [
      "Up to 100 attendees",
      "Basic event registration",
      "Email support",
      "Standard analytics",
    ],
  },
  {
    name: "Pro",
    price: "$299",
    description: "Ideal for medium-sized events",
    features: [
      "Up to 500 attendees",
      "Advanced registration with custom fields",
      "Priority email and chat support",
      "Detailed analytics and reporting",
      "Virtual event capabilities",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale events",
    features: [
      "Unlimited attendees",
      "Full customization options",
      "24/7 dedicated support",
      "Advanced analytics with AI insights",
      "Hybrid event solutions",
      "On-site staff and technical support",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Pricing Plans</h1>
      <p className="text-xl mb-10 text-center max-w-2xl mx-auto">
        Choose the perfect plan for your event management needs. All plans include our core features to ensure your event's success.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {pricingPlans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/contact">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

