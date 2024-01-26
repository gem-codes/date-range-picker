import { isWeekend, eachDayOfInterval, format } from "date-fns";

import { DateRange } from "../types";

export const getWeekendDates = (range: DateRange): Date[] => {
  if (range.startDate && range.endDate) {
    return eachDayOfInterval({ start: range.startDate, end: range.endDate })
      .filter(isWeekend)
      .map((date) => new Date(format(date, "yyyy-MM-dd")));
  }
  return [];
};

export const getWeekDates = (range: DateRange): Date[] => {
  if (range.startDate && range.endDate) {
    return eachDayOfInterval({ start: range.startDate, end: range.endDate })
      .filter((date) => !isWeekend(date))
      .map((date) => new Date(format(date, "yyyy-MM-dd")));
  }
  return [];
};
