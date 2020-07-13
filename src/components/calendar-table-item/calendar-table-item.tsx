import React from 'react';
import './calendar-table-item.css';

type CalendarTableItem = {
    id: number
}

const CalendarTableItem = ({ id }: CalendarTableItem) => (
  <button
    type="button"
    className="btn btn-outline-primary btn-block"
  >
    {id}
  </button>
);

export default CalendarTableItem;
