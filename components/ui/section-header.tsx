interface SectionHeaderProps {
  title: string
  description: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">{title}</h2>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  )
}

