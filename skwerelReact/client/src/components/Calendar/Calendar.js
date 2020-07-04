import React from "react";

import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

function CalendarComp(props) {
  return (
    <div>
      <FullCalendar
      header={{
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      }}
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={props.events}
        height='75vh'
      />
    </div>
  );
}
export default CalendarComp;
