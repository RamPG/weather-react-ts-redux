import React from 'react';

import './calendar-header-clock.css';
import { getHoursFormat, getMinutesFormat, getSecondsFormat } from '../../services/time-library';

interface CalendarHeaderClockState {
    hours: string,
    minutes: string,
    seconds: string,
}
export default class CalendarHeaderClock extends React.Component<{}, CalendarHeaderClockState> {
    state = {
      hours: getHoursFormat(),
      minutes: getMinutesFormat(),
      seconds: getSecondsFormat(),
    }

    componentDidMount(): void {
      setInterval(this.tick, 1000);
    }

    tick = () => {
      this.setState({
        hours: getHoursFormat(),
        minutes: getMinutesFormat(),
        seconds: getSecondsFormat(),
      });
    }

    render() {
      const { hours, minutes, seconds } = this.state;
      return (
        <h1 className="display-4 text-center">
          {hours}
          :
          {minutes}
          :
          {seconds}
        </h1>
      );
    }
}
