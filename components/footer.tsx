import { SocialIcon } from "@/components/ui/social-icon"
import { Send } from "lucide-react"
import { SOCIAL_LINKS, QUICK_LINKS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Alphabetz Montessori</h3>
            <p className="mb-6 max-w-md">
              A space designed for the comprehensive development of children, where fun and learning go hand in hand.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link, index) => (
                <SocialIcon key={index} name={link.name} icon={link.icon} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
            <p className="mb-4">Receive our news and tips for parents.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-foreground"
              />
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-r-md">
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Alphabetz Montessori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

