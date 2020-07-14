import { NEXT_MONTH, PREV_MONTH } from '../actions/actions-constants';
import { CalendarState, MonthActionTypes } from '../types';
import {
  getCalendar, getNameMonth, getMonthNow, getYearNow,
} from '../services/time-library';

const initialState: CalendarState = {
  currentYear: getYearNow(),
  currentMonth: {
    name: getNameMonth(getMonthNow()),
    number: getMonthNow(),
  },
  calendar: getCalendar({ year: getYearNow(), month: getMonthNow() }),
};
const reducer = (state = initialState, action: MonthActionTypes): CalendarState => {
  let month: number = state.currentMonth.number;
  let year: number = state.currentYear;
  switch (action.type) {
    case NEXT_MONTH:
      month += 1;
      if (month === 12) {
        month = 0;
        year += 1;
      }
      return {
        currentYear: year,
        currentMonth: {
          name: getNameMonth(month),
          number: month,
        },
        calendar: getCalendar({ year, month }),
      };
    case PREV_MONTH:
      month -= 1;
      if (month === -1) {
        month = 11;
        year -= 1;
      }
      return {
        currentYear: year,
        currentMonth: {
          name: getNameMonth(month),
          number: month,
        },
        calendar: getCalendar({ year, month }),
      };
    default:
      return state;
  }
};

export default reducer;
