import type { ReactNode } from "react"

interface ContactInfoItemProps {
  icon: ReactNode
  text: string
}

export function ContactInfoItem({ icon, text }: ContactInfoItemProps) {
  return (
    <p className="flex items-center gap-2">
      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">{icon}</span>
      <span>{text}</span>
    </p>
  )
}

