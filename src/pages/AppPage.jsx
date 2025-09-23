import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./AppPageStyle.css";

export default function HomePage() {
  const localizer = momentLocalizer(moment);

  const events = [
    {
      title: "Board meeting",
      start: new Date(2025, 8, 23, 10, 0), // September 23, 2025
      end: new Date(2025, 8, 23, 12, 0),
    },
    // Add more events here
  ];

  return (
    <>
      <div className="calendar-container">
        <h1 className="calendar-header">Бимбо-календарик</h1>
        <Calendar
          className="calendar"
          localizer={localizer}
        
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </>
  );
}
