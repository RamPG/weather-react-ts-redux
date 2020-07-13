import { NEXT_MONTH, PREV_MONTH } from './actions-constants';
import { MonthActionTypes } from '../types';

const nextMonth = (): MonthActionTypes => ({
  type: NEXT_MONTH,
});
const prevMonth = (): MonthActionTypes => ({
  type: PREV_MONTH,
});

export { nextMonth, prevMonth };
