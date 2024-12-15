import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/owner" className="text-muted-foreground hover:text-foreground">
                  Owner
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/corporate" className="text-muted-foreground hover:text-foreground">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link href="/services/virtual" className="text-muted-foreground hover:text-foreground">
                  Virtual Events
                </Link>
              </li>
              <li>
                <Link href="/services/hybrid" className="text-muted-foreground hover:text-foreground">
                  Hybrid Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sales" className="text-muted-foreground hover:text-foreground">
                  Sales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <Button asChild variant="outline" className="w-full">
              <Link href="/register">
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2024 EventPro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

