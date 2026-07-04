import dayjs, { Dayjs } from "dayjs";
import type { CalendarDate } from "../types/calendar";

export default function generateDate(month=dayjs().month(), year=dayjs().year()) {
    const firstDayOfMonth : Dayjs = dayjs().month(month).year(year).startOf("month")
    const lastDayOfMonth: Dayjs = dayjs().month(month).year(year).endOf("month")
    const visibleDates : number = 42

    const arrayOfDate : CalendarDate[] = []

    //Finds previous dates to be included in calendar, not in current month
    for (let i=0; i<firstDayOfMonth.day(); i++) {
        arrayOfDate.push({
            currentMonth: false,
            date: firstDayOfMonth.day(i),
            today: false
        });
    }

    //Finds all dates in month
    for (let i = firstDayOfMonth.date(); i <= lastDayOfMonth.date(); i++) {
        arrayOfDate.push({
            currentMonth: true,
            date: firstDayOfMonth.date(i),
            today: firstDayOfMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString()
        });
    }

    //Finds after dates to be included in calendar, not in current month
    const subsequentDates = visibleDates - arrayOfDate.length
    for (let i=lastDayOfMonth.date()+1; i<=lastDayOfMonth.date() + subsequentDates; i++) {
        arrayOfDate.push({
            currentMonth: false,
            date: lastDayOfMonth.date(i),
            today: false
        });
    }

    return arrayOfDate
}