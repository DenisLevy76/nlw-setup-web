import { generateDatesFromYearBeginning } from '../utils/generateDatesFromYearBeginning'
import { HabitDay } from './HabitDay'

const weekDays = ['d', 's', 't', 'q', 'q', 's', 's']
let summaryDates = generateDatesFromYearBeginning()

const minSummaryDates = 18 * 7 // 7 weeks
const amountOfSummaryDatesToFill = minSummaryDates - summaryDates.length
summaryDates = generateDatesFromYearBeginning(amountOfSummaryDatesToFill)

console.log(amountOfSummaryDatesToFill)

export const SummaryTable: React.FC = () => {
  return (
    <main className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {weekDays.map((day, i) => (
          <div
            key={`day-${new Date()}-${i}`}
            className='text-zinc-400 text-xl font-bold h-10 w-10 flex items-center justify-center uppercase'
          >
            {day}
          </div>
        ))}
      </div>
      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        {summaryDates.map((day) => (
          <HabitDay
            key={day.toString()}
            day={day.getDate()}
          />
        ))}

        {amountOfSummaryDatesToFill > 0 &&
          Array.from({ length: amountOfSummaryDatesToFill }).map((_, index) => (
            <HabitDay
              key={`${new Date().toISOString()}-${index}`}
              day={2}
              disabled
            />
          ))}
      </div>
    </main>
  )
}
