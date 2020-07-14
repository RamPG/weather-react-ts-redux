import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import CalendarHeader from '../calendar-header';
import CalendarTable from '../calendar-table';

import store from '../../store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact>
        <CalendarHeader />
        <CalendarTable />
      </Route>
    </BrowserRouter>

  </Provider>
);

export default App;
