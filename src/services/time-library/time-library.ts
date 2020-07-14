import { DateObject, ItemObject } from '../../types';

function getDaysInMonth(current: DateObject): number {
  const { year, month } = current;
  const currentDate: number = new Date(year, month, 1).getTime();
  const nextDate: number = new Date(year, month + 1, 1).getTime();
  return Math.round((nextDate - currentDate) / 1000 / 3600 / 24);
}

function getSundayDate(current: DateObject, daysInMonth: number): number {
  const currentDay: number = new Date(current.year, current.month, 1).getDay();
  if (currentDay === 0) {
    return 1;
  }
  return daysInMonth - currentDay + 1;
}

function getCalendar(current: DateObject): Array<Array<ItemObject>> {
  const { year, month } = current;
  const currentDaysInMonth: number = getDaysInMonth({ year, month });
  let prevDaysInMonth: number = getDaysInMonth({ year, month: month - 1 });
  let currentDay: number = getSundayDate({ year, month }, prevDaysInMonth);
  let flagDayInMonth: boolean = false;
  if (currentDay === 1) {
    prevDaysInMonth = currentDaysInMonth;
    flagDayInMonth = true;
  }
  const calendar: Array<Array<ItemObject>> = [];
  for (let i: number = 0; i < 6; i++) {
    const newWeek: Array<ItemObject> = [];
    for (let j: number = 0; j < 7; j++) {
      const className: string = flagDayInMonth ? 'btn btn-success btn-block' : 'btn btn-danger btn-block';
      newWeek.push({ day: currentDay, classButton: className });
      currentDay += 1;
      if (currentDay > prevDaysInMonth) {
        flagDayInMonth = !flagDayInMonth;
        currentDay = 1;
        prevDaysInMonth = currentDaysInMonth;
      }
    }
    calendar.push(newWeek);
  }
  return calendar;
}
function getNameMonth(month: number) : string {
  const monthsNames: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthsNames[month];
}
function getMonthNow(): number {
  return new Date().getMonth();
}
function getYearNow(): number {
  return new Date().getFullYear();
}
/* function getDayNow(): number {
  return new Date().getDate();
} */
export {
  getCalendar, getNameMonth, getMonthNow, getYearNow,
};
