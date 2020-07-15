import React from 'react';

import {
  getWeekDayNow, getMonthDayNow, getYearNow, getMonthNow, getNameDay, getNameMonth,
} from '../../services/time-library';

const CalendarHeaderDate = () => (
  <h1 className="display-4 text-center">
    {`${getMonthDayNow()} ${getNameMonth(getMonthNow())} ${getYearNow()} ${getNameDay(getWeekDayNow())}`}
  </h1>

);
export default CalendarHeaderDate;
