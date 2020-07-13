import React from 'react';
import CalendarHeader from '../calendar-header';
import CalendarTable from '../calendar-table';
import { getCalendar } from '../../services/time-library';

const App = () => (
  <div>
    <CalendarHeader year={2020} month="July" />
    <CalendarTable dataDays={getCalendar({ year: 2020, month: 12 })} />
  </div>
);

export default App;
