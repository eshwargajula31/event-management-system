import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Linkedin, Globe, Facebook, Ghost } from 'lucide-react'
import Image from 'next/image'

export default function OwnerPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About the Owner</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eshwar1.jpg-9eE3IRpCZSnzJ4Vi3NMA5CztLY8GRS.jpeg"
            alt="Profile photo with vintage motorcycle" 
            width={1974}
            height={1974}
            className="rounded-full w-48 h-48 object-cover"
            priority
          />
          <div>
            <h2 className="text-2xl font-semibold mb-2">Eshwar</h2>
            <p className="text-lg mb-4">
              I am a passionate IT professional with expertise in web development, machine learning, and IoT solutions. 
              I love solving complex problems and creating innovative solutions through technology. My goal is to leverage 
              cutting-edge tools and frameworks to make a positive impact in the tech world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href="https://eshwargajula31.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
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
              <Button asChild variant="outline">
                <Link href="https://facebook.com/gajula.eshwar.14" target="_blank" rel="noopener noreferrer">
                  <Facebook className="mr-2 h-4 w-4" /> Facebook
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="https://snapchat.com/add/find.eshwar/" target="_blank" rel="noopener noreferrer">
                  <Ghost className="mr-2 h-4 w-4" /> Snapchat
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Background</h3>
            <p>
              I am a passionate IT professional with a background in computer science engineering. My journey began 
              with an interest in web development, where I gained hands-on experience building various projects. 
              Over time, I expanded my skills into machine learning and IoT development, creating data-driven models 
              and smart monitoring systems to solve real-world problems.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">Vision for EventPro</h3>
            <p>
              My vision is to harness the power of technology to build innovative solutions that have a tangible 
              impact on everyday life. Whether it's simplifying complex tasks, optimizing processes, or driving 
              technological advancements in various fields, I am committed to continuously learning and applying new 
              technologies to solve meaningful problems.
            </p>
          </section>
          <section>
            <h3 className="text-xl font-semibold mb-2">Beyond EventPro</h3>
            <p>
              Outside of my professional life, I enjoy exploring new advancements in technology, attending tech meetups, 
              and collaborating with like-minded professionals. I am also passionate about mentoring and guiding aspiring 
              tech enthusiasts and helping them grow in their careers.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

