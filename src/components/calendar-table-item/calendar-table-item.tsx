import React from 'react';
import './calendar-table-item.css';

type CalendarTableItem = {
    id: number
}

const CalendarTableItem = ({id}: CalendarTableItem) => {
    return (
        <button className="btn btn-outline-primary btn-block">{id}</button>
    );
}

export default CalendarTableItem;
