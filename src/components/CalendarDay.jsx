// components/CalendarDay.jsx
import React from "react";
import { getDayEvents, getOverlappingEvents } from "../utils/eventUtils";

const CalendarDay = ({ date, events, isCurrentMonth, isToday, onDayClick }) => {
  const dayEvents = getDayEvents(date, events);
  const overlappingIds = getOverlappingEvents(dayEvents);

  const getEventStyles = (eventType) => {
    const styles = {
      work: "bg-purple-100 border-purple-500 text-purple-700",
      personal: "bg-blue-100 border-blue-500 text-blue-700",
      social: "bg-orange-100 border-orange-500 text-orange-700",
      health: "bg-green-100 border-green-500 text-green-700",
      family: "bg-pink-100 border-pink-500 text-pink-700",
      travel: "bg-cyan-100 border-cyan-500 text-cyan-700",
    };
    return styles[eventType] || styles.work;
  };

  return (
    <div
      className={`min-h-32 p-3 border-b border-r cursor-pointer hover:bg-gray-50 transition-colors ${
        !isCurrentMonth ? "bg-gray-50 text-gray-400" : "bg-white"
      } ${isToday ? "bg-blue-50 border-blue-200" : ""}`}
      onClick={() => onDayClick(date)}>
      <div
        className={`text-sm mb-2 ${
          isToday ? "font-semibold text-blue-600" : ""
        }`}>
        {date.getDate()}
        {isToday && (
          <div className='w-2 h-2 bg-red-500 rounded-full inline-block ml-2'></div>
        )}
      </div>

      <div className='space-y-1'>
        {dayEvents.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className={`text-xs p-2 rounded-md bg-opacity-10 border-l-2 ${getEventStyles(
              event.type
            )} ${overlappingIds.has(event.id) ? "opacity-75" : ""}`}>
            <div className='font-medium truncate'>{event.title}</div>
            <div className='text-xs opacity-75'>{event.time}</div>
          </div>
        ))}
        {dayEvents.length > 3 && (
          <div className='text-xs text-gray-500 text-center'>
            +{dayEvents.length - 3} more
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarDay;
