import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { format, getDay } from "date-fns";

import { getWeekDates, getWeekendDates } from "../helpers/dateManagement";
import { DateRange } from "../types";

import "./styles.css";

const DatePickerRange: React.FunctionComponent = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const [dateVisible, setDateVisible] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [highlightDates, setHighlightedDates] = useState<Date[]>([]);
  const [weekends, setWeekends] = useState<Date[]>([]);

  const reset = (start: Date | null, end: Date | null) => {
    setHighlightedDates(
      getWeekDates({
        startDate: start,
        endDate: end,
      })
    );
    setWeekends(
      getWeekendDates({
        startDate: start,
        endDate: end,
      })
    );
    setDateVisible({
      startDate: start,
      endDate: end,
    });
    setDateRange({
      startDate: null,
      endDate: null,
    });
  };

  return (
    <>
      <h1>Pick a range to check weekends</h1>
      <div className="container">
        <div className={"input-container"}>
          <p>Pick a range:</p>
          <DatePicker
            selectsRange
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            onChange={(update) => {
              setDateRange({
                startDate: update[0],
                endDate: update[1],
              });
              if (update[1] !== null) {
                reset(update[0], update[1]);
              }
            }}
            highlightDates={highlightDates}
            dateFormat="yyyy-MM-dd"
            shouldCloseOnSelect={false}
            filterDate={(date) => {
              return getDay(date) !== 0 && getDay(date) !== 6;
            }}
            withPortal
          />
        </div>

        <ul className="date-info">
          <li>
            <h4>From:</h4>
            {dateVisible.startDate
              ? format(dateVisible.startDate, "yyyy-MM-dd")
              : ""}
            <h4>To:</h4>
            {dateVisible.endDate
              ? format(dateVisible.endDate, "yyyy-MM-dd")
              : ""}
          </li>
          <li>
            <span className="date-info-heading">Weekdays in Range:</span>
            <ul>
              {weekends?.map((date, index) => (
                <li key={index}>{format(date, "yyyy-MM-dd")}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DatePickerRange;
