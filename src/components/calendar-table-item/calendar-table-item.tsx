import React, {Fragment} from 'react';
import './calendar-table-item.css';

type CalendarTableItem = {
    id: number
}

const CalendarTableItem = ({id}: CalendarTableItem) => {
    return (
        <Fragment>
            <span>{id}</span>
        </Fragment>
    );
}

export default CalendarTableItem;
