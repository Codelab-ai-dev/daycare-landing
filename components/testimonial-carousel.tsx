"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"
import { SectionHeader } from "@/components/ui/section-header"
import { TESTIMONIALS } from "@/lib/constants"

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  const prevTestimonial = useCallback(() => {
    if (isAnimating) return

    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [nextTestimonial])

  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Families Say"
          description="Nothing speaks better about us than the experience of families who trust our care day after day."
        />

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-primary/10">
            <Quote className="h-24 w-24" />
          </div>

          <div className="relative overflow-hidden">
            <div
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? "opacity-80" : "opacity-100"}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <CarouselControls onPrev={prevTestimonial} onNext={nextTestimonial} />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: (typeof TESTIMONIALS)[0]
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="w-full flex-shrink-0">
      <Card className="border-none shadow-lg bg-gradient-to-br from-background to-background/80">
        <CardContent className="pt-6 px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="flex-shrink-0">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full border-4 border-primary/20"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <p className="mb-6 text-lg italic">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <p className="text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

interface CarouselControlsProps {
  onPrev: () => void
  onNext: () => void
}

function CarouselControls({ onPrev, onNext }: CarouselControlsProps) {
  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-primary/20"
          onClick={onPrev}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background border-primary/20"
          onClick={onNext}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>
    </>
  )
}

