// src/CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import './Calendar.css';

const CalendarComponent = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date()); // Track the selected date
  const shiftStartDate = new Date(currentDate.getFullYear(), 5, 2); // June 2nd

  const dayShiftMessages = [
    "Лёша сегодня дневной зверь",
    "Алексей крутит гайки по дневному",
    "Лёша терпит днём"
  ];

  const nightShiftMessages = [
    "Лёша - ночной хищник",
    "Лёша на ночной охоте",
    "Алексей воет на луну"
  ];

  const freeDayMessages = [
    "Домашний лев на привале",
    "Леша в домике",
    "Алексей спит в домике"
  ];

  const getShiftType = (date) => {
    const daysSinceStart = Math.floor((date - shiftStartDate) / (1000 * 60 * 60 * 24));
    return daysSinceStart % 8;
  };

  const handleDateChange = (newDate) => {
    setCurrentDate(newDate);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date); // Update the selected date when a day is clicked
  };

  const getStatusMessage = (date) => {
    const shiftType = getShiftType(date);
    if (shiftType === 0 || shiftType === 1) {
      return dayShiftMessages[Math.floor(Math.random() * dayShiftMessages.length)];
    } else if (shiftType === 4 || shiftType === 5) {
      return nightShiftMessages[Math.floor(Math.random() * nightShiftMessages.length)];
    } else {
      return freeDayMessages[Math.floor(Math.random() * freeDayMessages.length)];
    }
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const shiftType = getShiftType(date);
      if (shiftType === 0 || shiftType === 1) {
        return 'day-shift';
      } else if (shiftType === 4 || shiftType === 5) {
        return 'night-shift';
      } else {
        return 'free-day';
      }
    }
    return null;
  };

  const formatMonthYear = (date) => {
    const monthYear = new Intl.DateTimeFormat('ru-RU', { month: 'long', year: 'numeric' }).format(date);
    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
  };

  return (
    <div className="calendar-container">
      <div className="header">
        <h2>{formatMonthYear(currentDate)}</h2>
      </div>
      <div className="status">
        <h3>{getStatusMessage(selectedDate)}</h3> {/* Display the status for the selected date */}
      </div>
      <div className="calendar-grid">
        <Calendar
          onChange={handleDateChange}
          value={currentDate}
          tileClassName={tileClassName}
          onClickDay={handleDayClick} // Add the onClickDay event
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
