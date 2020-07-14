import React from 'react';

import './calendar-header.css';
import CalendarHeaderDate from '../calendar-header-date';
import CalendarHeaderClock from '../calendar-header-clock';

const CalendarHeader = () => (
  <div className="calendar-header">
    <CalendarHeaderDate />
    <CalendarHeaderClock />
  </div>
);
export default CalendarHeader;
