import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom';

import './calendar-header-сontroller.css';
import { Dispatch } from 'redux';
import { CalendarState } from '../../types';
import { nextMonth, prevMonth } from '../../actions/actions';

interface CalendarHeaderDateProps {
  year: number,
  monthName: string,
  monthNumber: number,
}

const mapState = (state: CalendarState) => ({
  year: state.currentYear,
  monthName: state.currentMonth.name,
  monthNumber: state.currentMonth.number,
});

const mapDispatch = (dispatch: Dispatch) => ({
  onNextMonth: () => dispatch(nextMonth()),
  onPrevMonth: () => dispatch(prevMonth()),
});

type ReduxType = ReturnType<typeof mapState> &
    ReturnType<typeof mapDispatch> & CalendarHeaderDateProps;

const CalendarHeaderController = ({
  monthNumber, monthName, year, onPrevMonth, onNextMonth,
}: ReduxType) => (
  <BrowserRouter>
    <div className="d-flex justify-content-center calendar-date">
      <button
        type="button"
        onClick={onPrevMonth}
        className="btn btn-outline-primary"
      >
        <Link to={`/${monthNumber - 1}-${year}`} />
        <i className="fas fa-arrow-left" />
      </button>
      <p className="display-4 text-center text-uppercase">
        <span>
          {`${monthName}  ${year}`}
        </span>
      </p>
      <button
        type="button"
        onClick={onNextMonth}
        className="btn btn-outline-primary"
      >
        <i className="fas fa-arrow-right" />
      </button>
    </div>
  </BrowserRouter>

);
export default connect(mapState, mapDispatch)(CalendarHeaderController);
