import React from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./defaultCalendar.css";
import "./Calendar.css";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map((k) => Views[k]);

const myEventsList = [
  {
    start: moment().toDate(),
    end: moment().add(0, "days").toDate(),
    title: "Sage's Bday",
  },
  {
    start: moment().toDate(),
    end: moment().add(0, "days").toDate(),
    title: "Joey's Bday",
  },
  {
    start: moment().toDate(),
    end: moment().add(0, "days").toDate(),
    title: "Avengers",
  },
  {
    start: moment("2020-07-15"),
    end: moment("2020-07-15").add(0, "days").toDate(),
    title: "Black Widow",
  },
  {
    start: moment("2020-12-31"),
    end: moment("2020-12-31").add(0, "days").toDate(),
    title: "Happy New Year!",
  },
  {
    start: moment("2020-07-31"),
    end: moment("2020-07-31").add(0, "days").toDate(),
    title: "Last Day",
  }
];

const CalendarComp = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      // views={allViews}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "75vh" }}
    />
  </div>
);

export default CalendarComp;
