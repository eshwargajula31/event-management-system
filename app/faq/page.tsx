import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I create an event?",
    answer: "To create an event, log into your account, navigate to the dashboard, and click on the 'Create Event' button. Follow the step-by-step process to set up your event details, ticketing, and more."
  },
  {
    question: "Can I sell tickets through EventPro?",
    answer: "Yes, EventPro provides integrated ticketing and payment processing. When setting up your event, you can create different ticket types, set prices, and manage sales directly through our platform."
  },
  {
    question: "How do I manage attendee registrations?",
    answer: "Attendee registrations can be managed through your event dashboard. You can view registered attendees, send communications, and export attendee lists as needed."
  },
  {
    question: "What types of events can I host on EventPro?",
    answer: "EventPro supports a wide range of events including conferences, workshops, seminars, virtual events, and hybrid events. Our platform is flexible to accommodate various event formats and sizes."
  },
  {
    question: "Is there a mobile app for attendees?",
    answer: "Yes, EventPro offers a mobile app for attendees. The app provides features such as event schedules, networking opportunities, and real-time updates. Attendees can download the app from the App Store or Google Play Store."
  }
]

export default function FAQPage() {
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

