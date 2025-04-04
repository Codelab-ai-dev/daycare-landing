"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { SERVICES } from "@/lib/constants"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(SERVICES[0].id)

  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          description="We offer a variety of programs designed to meet the needs of each child and family."
        />

        <Tabs defaultValue={SERVICES[0].id} value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-12">
            {SERVICES.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className={`
                  data-[state=active]:bg-primary/50 data-[state=active]:text-primary-foreground
                  h-auto py-4 px-3 rounded-lg flex flex-col items-center gap-2 transition-all border-transparent data-[state=active]:border-primary
                `}
              >
                <div className="p-3 rounded-full bg-primary/10">{service.icon}</div>
                <span className="font-medium text-sm md:text-base">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <ServiceDetail service={service} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

interface ServiceDetailProps {
  service: (typeof SERVICES)[0]
}

function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">{service.title}</h3>
        <p className="text-lg mb-6 text-muted-foreground">{service.description}</p>

        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-5 w-5 text-primary" />
          <span className="font-medium">Recommended age: {service.age}</span>
        </div>

        <div className="space-y-4 mb-8">
          <h4 className="font-semibold text-lg">Features:</h4>
          <ul className="space-y-3">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/500/svg"
                    className="h-4 w-4 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button className="bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
          Request information
        </Button>
      </div>

      <div className="order-1 lg:order-2 relative">
        <div className="aspect-w-2 aspect-h-2 rounded-lg overflow-hidden shadow-xl">
          <img src={service.image} alt={service.title} className="object-cover w-full h-full" />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg hidden md:block">
          <p className="font-bold">Certified Program</p>
          <p className="text-sm">Specialized educators</p>
        </div>
      </div>
    </div>
  )
}
