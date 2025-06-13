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
      className={`bg-white p-2 min-h-[100px] flex flex-col justify-start cursor-pointer transition hover:bg-gray-50
        ${!isCurrentMonth ? "text-gray-400 bg-gray-50" : ""}
        ${isToday ? "border-2 border-blue-500 rounded-md bg-blue-50" : ""}`}
      onClick={() => onDayClick(date)}>
      {/* Date Label */}
      <div
        className={`text-sm font-medium mb-1 ${
          isToday ? "text-blue-600" : ""
        }`}>
        {date.getDate()}
        {isToday && (
          <span className='ml-2 inline-block w-2 h-2 bg-red-500 rounded-full'></span>
        )}
      </div>

      {/* Events */}
      <div className='space-y-1'>
        {dayEvents.slice(0, 3).map((event) => (
          <div
            key={event.id}
            className={`text-xs p-1.5 rounded-md bg-opacity-10 border-l-2 truncate ${getEventStyles(
              event.type
            )} ${overlappingIds.has(event.id) ? "opacity-75" : ""}`}>
            <div className='font-medium truncate'>{event.title}</div>
            <div className='text-[10px] opacity-70'>{event.time}</div>
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
