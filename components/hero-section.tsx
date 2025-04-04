"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full brightness-[0.85]"
        >
          <source src="/alphabetz-full.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
          Develop and learn through fun and creativity
          </h1>
          <p className="text-base md:text-lg mb-8 ">
          Alphabetz Montessori is the best Montessori in San Antonio TX. You and your child will love our pleasant early learning and childcare center. Our school is located in a secured area. Your child will be cared for in welcoming surroundings balancing closely with your normal daily routine. We have designed all programs to support your child's all-round development. We are dedicated to delivering the best possible education to them. We have been trusted by many families to provide their children with nature-inspired learning and exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transition-all duration-300 transform hover:scale-105"
            >
              Schedule a visit
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 text-white transition-all duration-300"
              onClick={() => {
                document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Discover our services
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
        >
          <ChevronDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </div>
    </section>
  )
}

