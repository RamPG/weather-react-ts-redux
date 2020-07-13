import { NEXT_MONTH, PREV_MONTH } from '../actions/actions-constants';
import { CalendarState, MonthActionTypes } from '../types';
import { getCalendar } from '../services/time-library';

const initialState: CalendarState = {
  currentYear: 2020,
  currentMonth: new Date().getMonth(),
  calendar: getCalendar({ year: 2020, month: new Date().getMonth() }),
};
const reducer = (state = initialState, action: MonthActionTypes): CalendarState => {
  switch (action.type) {
    case NEXT_MONTH:
      return {
        ...state,
        currentMonth: state.currentMonth + 1,
        calendar: getCalendar({ year: 2020, month: state.currentMonth + 1 }),
      };
    case PREV_MONTH:
      return {
        ...state,
        currentMonth: state.currentMonth - 1,
        calendar: getCalendar({ year: 2020, month: state.currentMonth - 1 }),
      };
    default:
      return state;
  }
};

export default reducer;
