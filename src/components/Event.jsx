import React from "react";

const Event = ({ event, isOverlapping }) => {
  const eventType e= event.type || "work";
  const typeClasses = {
    work: "event-work",
    personal: "event-personal",
    social: "event-social",
    health: "event-health",
    family: "event-family",
    travel: "event-travel",
  };

  return (
    <div
      className={`event ${typeClasses[eventType]} ${
        isOverlapping ? "overlapping" : ""
      }`}>
      <div className='event-title'>{event.title}</div>
      <div className='event-time'>{event.time}</div>
    </div>
  );
};

export default Event;
