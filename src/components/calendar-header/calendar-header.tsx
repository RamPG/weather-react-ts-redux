import React from 'react';

type CalendarHeaderProps = {
    year: number,
    month: string
}

const CalendarHeader = ({year, month}: CalendarHeaderProps) => {
    return (
        <section className="calendar-header">
            <div className="calendar-date">
                <button>{"<"}</button>
                <p>
                    <span>{year}</span>
                    <span>{month}</span>
                </p>
                <button>{">"}</button>
            </div>
            <div className="calender-days">
                <ul>
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>
            </div>
        </section>
    );
}

export default CalendarHeader;
