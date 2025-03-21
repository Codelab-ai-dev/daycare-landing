interface ScheduleItemProps {
  day: string
  hours: string
}

export function ScheduleItem({ day, hours }: ScheduleItemProps) {
  return (
    <p className="flex justify-between">
      <span>{day}:</span>
      <span className="font-medium">{hours}</span>
    </p>
  )
}

