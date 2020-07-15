import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Redirect,
} from 'react-router-dom';

// import { getYearNow, getMonthNow } from './services/time-library';
import App from './components/app';
import store from './store';

// const year: number = getYearNow();
// const month: number = getMonthNow();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/2020/6" component={App} />
      <Redirect to="/2020/6" />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
