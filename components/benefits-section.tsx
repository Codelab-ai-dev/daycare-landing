"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { BenefitItem } from "@/components/ui/benefit-item"
import { BENEFITS } from "@/lib/constants"
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function BenefitsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="benefits" className="py-12 md:py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us?"
          description="We stand out by offering a comprehensive service that combines quality education with a safe and fun environment."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          <div className="relative h-full">
            <div className="overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="flex">
                <div className="flex-[0_0_100%] min-w-0 relative">
                  <div className="relative pt-[100%]">
                    <img
                      src="/1.png"
                      alt="Children learning with qualified teachers"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="flex-[0_0_100%] min-w-0 relative">
                  <div className="relative pt-[100%]">
                    <img
                      src="/2.png"
                      alt="Children playing in our facilities"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
                    />
                  </div>
                </div>
                <div className="flex-[0_0_100%] min-w-0 relative">
                  <div className="relative pt-[100%]">
                    <img
                      src="/3.png"
                      alt="Our modern learning environment"
                      className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
              <button
                className="p-2 bg-primary/20 hover:bg-white text-black rounded-full transition-all"
                onClick={scrollPrev}
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="p-2 bg-primary/20 hover:bg-white text-black rounded-full transition-all"
                onClick={scrollNext}
                aria-label="Next slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg z-20">
              <p className="font-bold text-xl">+15 years</p>
              <p>of experience</p>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8 flex flex-col justify-center py-6">
            {BENEFITS.map((benefit, index) => (
              <BenefitItem key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}

            <Button className="w-fit bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              Discover all our benefits
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

