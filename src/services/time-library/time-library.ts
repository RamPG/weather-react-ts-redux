type DateObject = {
    year: number,
    month: number
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

function getCalendar(current: DateObject): Array<Array<number>> {
  const { year, month } = current;
  const currentDaysInMonth: number = getDaysInMonth({ year, month });
  let prevDaysInMonth: number = getDaysInMonth({ year, month: month - 1 });
  let currentDay: number = getSundayDate({ year, month }, prevDaysInMonth);
  if (currentDay === 1) {
    prevDaysInMonth = currentDaysInMonth;
  }
  const calendar: Array<Array<number>> = [];
  for (let i: number = 0; i < 5; i++) {
    const newWeek: Array<number> = [];
    for (let j: number = 0; j < 7; j++) {
      newWeek.push(currentDay);
      currentDay += 1;
      if (currentDay > prevDaysInMonth) {
        currentDay = 1;
        prevDaysInMonth = currentDaysInMonth;
      }
    }
    calendar.push(newWeek);
  }
  return calendar;
}

export { getCalendar };
