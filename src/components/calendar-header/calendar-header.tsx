import React from 'react';

import './calendar-header.css';
import CalendarHeaderMonthYear from '../calendar-header-сontroller/calendar-header-controller';
import CalendarHeaderClock from '../calendar-header-clock';
import CalendarHeaderDay from '../calendar-header-date';

const CalendarHeader = () => (
  <div className="calendar-header">
    <CalendarHeaderMonthYear />
    <CalendarHeaderDay />
    <CalendarHeaderClock />
  </div>
);
export default CalendarHeader;
