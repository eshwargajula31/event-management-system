import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from 'next/image'

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Tips for Hosting a Successful Virtual Conference",
      date: "July 1, 2023",
      excerpt: "Learn how to engage your audience and create a memorable experience in the virtual world.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    },
    {
      title: "The Future of Hybrid Events: Blending Physical and Digital Experiences",
      date: "June 15, 2023",
      excerpt: "Discover how hybrid events are revolutionizing the industry and what you need to know to stay ahead.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    },
    {
      title: "Sustainable Event Planning: Reducing Your Carbon Footprint",
      date: "May 30, 2023",
      excerpt: "Explore eco-friendly practices that can make your events more sustainable without compromising on quality.",
      image: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">EventPro Blog</h1>
      <p className="text-xl mb-6">
        Stay informed with the latest trends, tips, and insights in event management.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-muted rounded-lg overflow-hidden shadow-lg">
            <Image src={post.image} alt={post.title} width={2070} height={1380} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <Button asChild>
                <Link href="#">Read More</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

