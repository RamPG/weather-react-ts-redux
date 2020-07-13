import { PREV_MONTH, NEXT_MONTH } from './actions/actions-constants';

interface PrevMonthAction {
    type: typeof PREV_MONTH
}

interface NextMonthAction {
    type: typeof NEXT_MONTH
}
export interface CalendarState {
    currentYear: number,
    currentMonth: number,
    calendar: Array<Array<number>>
}
export type MonthActionTypes = PrevMonthAction | NextMonthAction
