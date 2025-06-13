import { format, isSameDay } from "date-fns";

const CalendarEvents = ({ selectedDate, events }) => {
  const dayEvents = events.filter((event) =>
    isSameDay(new Date(event.date), selectedDate)
  );

  return (
    <div className='calendar-events'>
      <h3>{format(selectedDate, "MMMM d, yyyy")}</h3>

      {dayEvents.length === 0 ? (
        <p>No events scheduled for this day</p>
      ) : (
        dayEvents.map((event) => (
          <div
            key={event.id}
            className={`event-item event-${event.color}`}>
            {event.allDay && <div className='all-day-badge'>All day</div>}
            <h4 className='event-title'>{event.title}</h4>
            {!event.allDay && <div className='event-time'>{event.time}</div>}
            {event.description && (
              <p className='event-description'>{event.description}</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};
