import React from 'react';
import './calendar-table-item.css';

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
