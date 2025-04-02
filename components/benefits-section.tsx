import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { BenefitItem } from "@/components/ui/benefit-item"
import { BENEFITS } from "@/lib/constants"

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why Choose Us?"
          description="We stand out by offering a comprehensive service that combines quality education with a safe and fun environment."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <Image
              src="/alphabetz1.gif"
              alt="Children learning with qualified teachers"
              width={800}
              height={600}
              className="rounded-lg shadow-xl object-cover h-screen"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-4 rounded-lg shadow-lg">
              <p className="font-bold text-xl">+15 years</p>
              <p>of experience</p>
            </div>
          </div>

          <div className="space-y-8 flex flex-col justify-center">
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

