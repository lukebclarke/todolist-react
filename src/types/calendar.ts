import type { Dayjs } from "dayjs";

export interface CalendarDate {
    currentMonth: boolean,
    date: Dayjs,
    today: boolean;
}