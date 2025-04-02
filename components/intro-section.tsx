import { FeatureCard } from "@/components/ui/feature-card"
import { SectionHeader } from "@/components/ui/section-header"
import { FEATURES } from "@/lib/constants"

export default function IntroSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Welcome to Alphabetz Montessori"
          description="We are more than a daycare. We are a second home where children explore, learn, and grow in a safe and stimulating environment."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

