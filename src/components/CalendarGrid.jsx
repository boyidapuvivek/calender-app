// components/CalendarGrid.jsx
import React from "react";
import CalendarDay from "./CalendarDay";
import { getCalendarDays, isSameDay } from "../utils/dateUtils";

const CalendarGrid = ({ currentDate, events, onDayClick }) => {
  const days = getCalendarDays(currentDate);
  const today = new Date();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
      {/* Calendar Header */}
      <div className='flex justify-between items-center p-6 border-b'>
        <h2 className='text-xl font-semibold text-gray-800'>Calendar</h2>
        <div className='flex gap-2'>
          <button
            onClick={() => onDayClick("prev")}
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
            ←
          </button>
          <button
            onClick={() => onDayClick("next")}
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors'>
            →
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className='grid grid-cols-7 border-b'>
        {weekDays.map((day) => (
          <div
            key={day}
            className='p-4 text-center text-sm font-medium text-gray-600 bg-gray-50'>
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className='grid grid-cols-7'>
        {days.map((day, i) => (
          <CalendarDay
            key={i}
            date={day}
            events={events}
            isCurrentMonth={day.getMonth() === currentDate.getMonth()}
            isToday={isSameDay(day, today)}
            onDayClick={onDayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
