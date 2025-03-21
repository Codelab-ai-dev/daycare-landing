import type { ReactNode } from "react"

interface BenefitItemProps {
  icon: ReactNode
  title: string
  description: string
}

export function BenefitItem({ icon, title, description }: BenefitItemProps) {
  return (
    <div className="flex gap-4">
      <div className="rounded-full bg-primary/10 w-12 h-12 flex-shrink-0 flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

