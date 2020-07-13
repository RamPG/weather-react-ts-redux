import React from 'react';
import { connect } from 'react-redux';

import './calendar-header.css';
import { Dispatch } from 'redux';
import { CalendarState } from '../../types';
import { nextMonth, prevMonth } from '../../actions/actions';

type CalendarHeaderProps = {
    year: number,
    month: number,
}
const mapState = (state: CalendarState) => ({
  year: state.currentYear,
  month: state.currentMonth,
});
const mapDispatch = (dispatch: Dispatch) => ({
  onNextMonth: () => dispatch(nextMonth()),
  onPrevMonth: () => dispatch(prevMonth()),
});
type ReduxType = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & CalendarHeaderProps;
const CalendarHeader = ({
  month, year, onPrevMonth, onNextMonth,
}: ReduxType) => (
  <section className="d-flex justify-content-center calendar-date">
    <button
      type="button"
      onClick={onPrevMonth}
      className="btn btn-outline-primary"
    >
      <i className="fas fa-arrow-left" />
    </button>
    <p className="display-4 text-center text-uppercase">
      <span>
        day.
        {month}
        .
        {year}
      </span>
    </p>
    <button
      type="button"
      onClick={onNextMonth}
      className="btn btn-outline-primary"
    >
      <i className="fas fa-arrow-right" />
    </button>
  </section>
);
export default connect(mapState, mapDispatch)(CalendarHeader);
