import React, {
  Component
} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment'
import {
  DateRangePicker
} from 'react-dates';

class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    const {
      focusedDatesInput,
      endDate,
      handleDateChange,
      handleDatesInput
    } = this.props
    return (
      <div className="App">
        <DateRangePicker
          numberOfMonths = {1}
          startDateId = {'startDate'}
          endDateId = {'endDate'}
          startDate={moment(Date.now())}
          endDate={endDate}
          onDatesChange={handleDateChange}
          focusedInput={focusedDatesInput}
          onFocusChange={handleDatesInput}
          block
        />
      </div>
    );
  }
}

export default DateRange;