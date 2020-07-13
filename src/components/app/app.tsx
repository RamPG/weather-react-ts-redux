import React from 'react';
import CalendarHeader from '../calendar-header';
import CalendarTable from '../calendar-table';

const App = () => {
  const data: Array<Array<number>> = [
    [29, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 31, 1, 2],
  ];
  return (
    <div>
      <CalendarHeader year={2020} month="July" />
      <CalendarTable dataDays={data} />
    </div>
  );
};

export default App;
