import { Card, CardContent } from "@/components/ui/card"
import type { Feature } from "@/lib/constants"

interface FeatureCardProps {
  feature: Feature
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br from-background to-background/80">
      <CardContent className="pt-6">
        <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 mx-auto">
          {feature.icon}
        </div>
        <h3 className="text-xl font-semibold text-center mb-3">{feature.title}</h3>
        <p className="text-center text-muted-foreground">{feature.description}</p>
      </CardContent>
    </Card>
  )
}

