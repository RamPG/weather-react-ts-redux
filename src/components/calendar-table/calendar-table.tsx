import React from 'react';
import { connect } from 'react-redux';

import './calendar-table.css';
import CalendarTableItem from '../calendar-table-item';
import { CalendarState } from '../../types';

interface CalendarTable {
  calendar: Array<Array<number>>
}

const CalendarTable = ({ calendar }: CalendarTable) => (
  <div className="table-responsive calendar-days">
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
          calendar.map((array) => (
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
const mapStateToProps = (state: CalendarState) => ({
  calendar: state.calendar,
});

export default connect(mapStateToProps)(CalendarTable);
