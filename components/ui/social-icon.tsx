import type { ReactNode } from "react"

interface SocialIconProps {
  name: string
  icon: ReactNode
}

export function SocialIcon({ name, icon }: SocialIconProps) {
  return (
    <a
      href="#"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
    >
      <span className="sr-only">{name}</span>
      {icon}
    </a>
  )
}

