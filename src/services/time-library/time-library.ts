import { DateObject, ItemObject } from '../../types';

function getWeekDayNow(): number {
  return new Date().getDay();
}
function getMonthNow(): number {
  return new Date().getMonth();
}
function getYearNow(): number {
  return new Date().getFullYear();
}
function getMonthDayNow(): number {
  return new Date().getDate();
}
function getHoursFormat(): string {
  const hours: number = new Date().getHours();
  return hours < 10 ? `0${hours}` : `${hours}`;
}
function getMinutesFormat(): string {
  const minutes: number = new Date().getMinutes();
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
}
function getSecondsFormat(): string {
  const seconds: number = new Date().getSeconds();
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}
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
  let className = 'btn btn-warning btn-block';
  if (currentDay === 1) {
    prevDaysInMonth = currentDaysInMonth;
    flagDayInMonth = true;
    className = 'btn btn-success btn-block';
  }
  const calendar: Array<Array<ItemObject>> = [];
  for (let i: number = 0; i < 6; i++) {
    const newWeek: Array<ItemObject> = [];
    for (let j: number = 0; j < 7; j++) {
      newWeek.push({ day: currentDay, classButton: className });
      currentDay += 1;
      if (currentDay > prevDaysInMonth) {
        flagDayInMonth = !flagDayInMonth;
        className = flagDayInMonth ? 'btn btn-success btn-block' : 'btn btn-warning btn-block';
        currentDay = 1;
        prevDaysInMonth = currentDaysInMonth;
      }
    }
    calendar.push(newWeek);
  }
  if (year === getYearNow() && month === getMonthNow()) {
    for (let i: number = 0; i < 5; i++) {
      for (let j: number = 0; j < 7; j++) {
        if (calendar[i][j].day === getMonthDayNow()) {
          calendar[i][j].classButton = 'btn btn-danger btn-block';
          break;
        }
      }
    }
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
function getNameDay(day: number): string {
  const daysNames: Array<string> = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysNames[day];
}
export {
  getCalendar, getNameMonth, getMonthNow, getYearNow, getWeekDayNow,
  getMonthDayNow, getHoursFormat, getMinutesFormat, getSecondsFormat, getNameDay,
};
