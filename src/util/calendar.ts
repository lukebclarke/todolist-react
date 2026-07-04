import dayjs, { Dayjs } from "dayjs";

export default function generateDate(month=dayjs().month(), year=dayjs().year()) {
    const firstDayOfMonth : Dayjs = dayjs().month(month).year(year).startOf("month")
    const lastDayOfMonth: Dayjs = dayjs().month(month).year(year).endOf("month")
    const visibleDates : number = 42

    const arrayOfDate : Dayjs[] = []

    //Finds previous dates to be included in calendar, not in current month
    for (let i=0; i<firstDayOfMonth.day(); i++) {
        arrayOfDate.push(firstDayOfMonth.day(i))
    }

    //Finds all dates in month
    for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
        arrayOfDate.push(firstDayOfMonth.date(i))
    }

    //Finds after dates to be included in calendar, not in current month
    const subsequentDates = visibleDates - arrayOfDate.length
    for (let i=lastDayOfMonth.date()+1; i<=lastDayOfMonth.date() + subsequentDates; i++) {
        arrayOfDate.push(lastDayOfMonth.date(i))
    }

    return arrayOfDate
}