import React from 'react';

import './calendar-header.css';
import CalendarHeaderMonthYear from '../calendar-header-month-year/calendar-header-month-year';
import CalendarHeaderClock from '../calendar-header-clock';
import CalendarHeaderDay from '../calendar-header-day';

const CalendarHeader = () => (
  <div className="calendar-header">
    <CalendarHeaderMonthYear />
    <CalendarHeaderDay />
    <CalendarHeaderClock />
  </div>
);
export default CalendarHeader;
