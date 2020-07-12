import React from 'react';
import './calendar-header.css';

type CalendarHeaderProps = {
    year: number,
    month: string
}

const CalendarHeader = ({year, month}: CalendarHeaderProps) => {
    return (
        <section className="d-flex justify-content-center calendar-date">
            <button className="btn btn-outline-primary">
                <i className="fas fa-arrow-left"/>
            </button>
            <p className="display-4 text-center text-uppercase">
                <span>{year} {month}</span>
            </p>
            <button className="btn btn-outline-primary">
                <i className="fas fa-arrow-right"/>
            </button>
        </section>
    );
}

export default CalendarHeader;
