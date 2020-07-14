import React from 'react';
import { connect } from 'react-redux';

import { CalendarState } from '../../types';
import './calendar-header-day.css';

interface CalendarHeaderDay {
    name: string,
    number: number
}
const CalendarHeaderDay = ({ name, number }: CalendarHeaderDay) => (
  <h1 className="display-4 text-center">
    {`${name} ${number}`}
  </h1>
);
const mapStateToProps = (state: CalendarState) => ({
  name: state.currentDay.name,
  number: state.currentDay.number,
});
export default connect(mapStateToProps)(CalendarHeaderDay);
