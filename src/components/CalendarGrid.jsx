import React from "react";
import CalendarDay from "./CalendarDay";
import { getCalendarDays, isSameDay } from "../utils/dateUtils";

const CalendarGrid = ({ currentDate, events, onDayClick }) => {
  const days = getCalendarDays(currentDate);
  const today = new Date();
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className='bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200'>
      {/* Header */}
      <div className='flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300'>
        <h2 className='text-2xl font-bold text-gray-800'>Calendar</h2>
        <div className='flex gap-3'>
          <button
            onClick={() => onDayClick("prev")}
            className='p-2 rounded-full hover:bg-gray-200 transition'>
            ←
          </button>
          <button
            onClick={() => onDayClick("next")}
            className='p-2 rounded-full hover:bg-gray-200 transition'>
            →
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className='grid grid-cols-7 gap-px bg-gray-200'>
        {weekDays.map((day) => (
          <div
            key={day}
            className='py-3 text-center text-sm font-semibold text-gray-700 uppercase bg-white'>
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className='grid grid-cols-7 gap-px bg-gray-200'>
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
