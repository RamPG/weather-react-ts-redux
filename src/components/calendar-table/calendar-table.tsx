import React from 'react';
import './calendar-table.css';
import CalendarTableItem from '../calendar-table-item';

type CalendarTable = {
    dataDays: Array<Array<number>>
}

const CalendarTable = ({ dataDays }: CalendarTable) => (
  <div className="calendar-days">
    <table className="table">
      <thead>
        <tr>
          <th className="text-center" scope="col">Sunday</th>
          <th className="text-center" scope="col">Monday</th>
          <th className="text-center" scope="col">Tuesday</th>
          <th className="text-center" scope="col">Wednesday</th>
          <th className="text-center" scope="col">Thursday</th>
          <th className="text-center" scope="col">Friday</th>
          <th className="text-center" scope="col">Saturday</th>
        </tr>
      </thead>
      <tbody>
        {
                    dataDays.map((array) => (
                      <tr>
                        {
                                    array.map((element) => (
                                      <th>
                                        <CalendarTableItem id={element} />
                                      </th>
                                    ))
                                }
                      </tr>
                    ))
                }
      </tbody>
    </table>
  </div>
);

export default CalendarTable;
