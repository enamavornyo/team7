import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DatePicker1 extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (value) => {
    this.setState({ startDate: value });
    console.log(value);
    return value;
  };

  render() {
    return (
      <DatePicker
        maxDate={Date.now()}
        dropdownMode="select"
        className="form-control"
        scrollableYearDropdown="true"
        showYearDropdown="true"
        showMonthDropdown="true"
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default DatePicker1;
