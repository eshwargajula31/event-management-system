'use client'

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet"

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Corporate Events",
    href: "/services/corporate",
    description: "Professional event management for conferences, seminars, and meetings.",
  },
  {
    title: "Virtual Events",
    href: "/services/virtual",
    description: "Seamless online event experiences with interactive features.",
  },
  {
    title: "Hybrid Events",
    href: "/services/hybrid",
    description: "Combine in-person and virtual experiences for maximum reach.",
  },
]

const resources: { title: string; href: string; description: string }[] = [
  {
    title: "Blog",
    href: "/blog",
    description: "Stay updated with the latest trends and insights in event management.",
  },
  {
    title: "Documentation",
    href: "/documentation",
    description: "Explore our comprehensive guides and API documentation.",
  },
  {
    title: "Support",
    href: "/support",
    description: "Get help and answers to your questions.",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-2xl">
          EventPro
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {services.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Events
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Pricing
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {resources.map((resource) => (
                      <ListItem
                        key={resource.title}
                        title={resource.title}
                        href={resource.href}
                      >
                        {resource.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Get Started</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4">
                <Link href="/services/corporate" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Corporate Events
                </Link>
                <Link href="/services/virtual" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Virtual Events
                </Link>
                <Link href="/services/hybrid" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Hybrid Events
                </Link>
                <Link href="/events" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Events
                </Link>
                <Link href="/pricing" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Pricing
                </Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Blog
                </Link>
                <Link href="/documentation" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Documentation
                </Link>
                <Link href="/support" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Support
                </Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  About
                </Link>
                <Link href="/login" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Login
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)} className="block py-2 text-sm">
                  Get Started
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

