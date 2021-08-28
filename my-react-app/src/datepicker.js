import {useState, React, DatePicker} from "react";

const DatePickerComponent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = ({ value, onClick }) => (
      <button className="example-custom-input" onClick={onClick}>
        {value}
      </button>
    );
    return (
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />
    );
  };

export default DatePickerComponent;