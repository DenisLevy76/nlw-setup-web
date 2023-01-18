import dayjs from 'dayjs'

export const generateDatesFromYearBeginning = (add: number = 0) => {
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = dayjs()
  today.add(add)

  const dates = []
  let compareDate = firstDayOfTheYear

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dates
}