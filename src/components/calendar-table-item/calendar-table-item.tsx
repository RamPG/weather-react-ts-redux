import React from 'react';

interface CalendarTableItem {
    id: number,
    classButton: string
}

const CalendarTableItem = ({ id, classButton }: CalendarTableItem) => (
  <button
    type="button"
    className={classButton}
  >
    {id}
  </button>
);

export default CalendarTableItem;
