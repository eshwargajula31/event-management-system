import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Globe } from 'lucide-react'
import Image from 'next/image'

export default function OwnerPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About the Owner</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <Image 
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3" 
            alt="Eshwar" 
            width={1974}
            height={1974}
            className="rounded-full w-48 h-48 object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Eshwar</h2>
            <p className="text-lg mb-4">
              Passionate event management professional and tech enthusiast. Founder of EventPro, 
              dedicated to revolutionizing the way events are planned and executed.
            </p>
            <div className="flex gap-4">
              <Button asChild variant="outline">
                <Link href="https://eshwar.xyz" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" /> Website
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://github.com/eshwargajula31" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://linkedin.com/in/gajula-eshwar" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Background</h3>
            <p>
              With over a decade of experience in the event management industry, I've witnessed firsthand the challenges 
              faced by event organizers. This inspired me to create EventPro, a comprehensive platform that simplifies 
              event planning and execution.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">Vision for EventPro</h3>
            <p>
              My vision for EventPro is to empower event organizers with cutting-edge technology, enabling them to create 
              unforgettable experiences for their attendees. We're constantly innovating to stay ahead of industry trends 
              and provide the best possible solutions for our clients.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">Beyond EventPro</h3>
            <p>
              When I'm not working on improving EventPro, you can find me speaking at industry conferences, mentoring 
              aspiring entrepreneurs, or exploring the latest advancements in technology. I'm always eager to connect 
              with fellow professionals and discuss ideas to push the boundaries of what's possible in event management.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

