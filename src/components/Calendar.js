import React, { useState } from "react";
import { render } from "react-dom";
import Calendar from "react-calendar";
import '../App.css'

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());
  
    const onChange = date => {
      setDate(date);
    };

    return (
        <div className="calendar">
          <Calendar onChange={onChange} value={date} selectRange/>
          {console.log(date)}
          {date.toString()}
        </div>
      );
    
}

export default Calendar;