export interface HabitDayProps {
  day?: number
  disabled?: boolean
}

export const HabitDay: React.FC<HabitDayProps> = ({
  day,
  disabled = false,
}) => {
  if (disabled)
    return (
      <div className='opacity-40 cursor-not-allowed w-10 h-10 bg-zinc-900 rounded-lg border-2 border-zinc-800 flex items-center justify-center' />
    )

  return (
    <div className='w-10 h-10 bg-zinc-900 rounded-lg border-2 border-zinc-800 flex items-center justify-center'>
      {day ?? <p className='cursor-default'>{day}</p>}
    </div>
  )
}
