"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Benefits", href: "#benefits" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold text-primary">
            <img src="/alphabetz-logo.png" alt="alphabetz" className="w-32" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Contact Us</Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center mb-8">
              <Link href="#" className="text-2xl font-bold text-primary">
                Little Explorers
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium py-2 border-b border-border"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Contact Us</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

