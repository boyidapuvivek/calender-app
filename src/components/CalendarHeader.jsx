// components/CalendarHeader.jsx
import React from "react";
import { Calendar, Plus } from "lucide-react";
import { formatMonthYear } from "../utils/dateUtils";

const CalendarHeader = ({ currentDate, onAddEvent }) => {
  return (
    <div className='flex justify-between items-center mb-8'>
      <div className='flex items-center gap-4'>
        <Calendar
          className='text-blue-600'
          size={32}
        />
        <div>
          <h1 className='text-3xl font-light text-gray-800'>
            {formatMonthYear(currentDate)}
          </h1>
          <p className='text-gray-600'>Manage your events and schedule</p>
        </div>
      </div>
      <button
        onClick={onAddEvent}
        className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2'>
        <Plus size={20} />
        Add Event
      </button>
    </div>
  );
};

export default CalendarHeader;
