// components/Calendar.jsx
import React, { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import Sidebar from "./Sidebar";
import AddEventModal from "./AddEventModal";
import { INITIAL_EVENTS } from "../utils/eventUtils";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    time: "",
    type: "work",
    description: "",
  });

  const handleMonthChange = (months) => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + months, 1)
    );
  };

  const handleAddEvent = () => {
    if (newEvent.title && selectedDate) {
      const event = {
        id: Date.now(),
        title: newEvent.title,
        date: selectedDate.toISOString().split("T")[0],
        time: newEvent.time,
        type: newEvent.type,
        description: newEvent.description,
      };
      setEvents([...events, event]);
      resetEventForm();
    }
  };

  const resetEventForm = () => {
    setNewEvent({ title: "", time: "", type: "work", description: "" });
    setShowAddEvent(false);
    setSelectedDate(null);
  };

  const handleDayClick = (day) => {
    if (day === "prev") {
      handleMonthChange(-1);
    } else if (day === "next") {
      handleMonthChange(1);
    } else {
      setSelectedDate(day);
      setShowAddEvent(true);
    }
  };

  const handleShowAddEvent = () => {
    setShowAddEvent(true);
  };

  return (
    <div className='min-h-screen bg-gray-50 p-6'>
      <div className='max-w-7xl mx-auto'>
        <CalendarHeader
          currentDate={currentDate}
          onAddEvent={handleShowAddEvent}
        />

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
          <div className='lg:col-span-3'>
            <CalendarGrid
              currentDate={currentDate}
              events={events}
              onDayClick={handleDayClick}
            />
          </div>

          <Sidebar events={events} />
        </div>

        <AddEventModal
          showModal={showAddEvent}
          onClose={resetEventForm}
          newEvent={newEvent}
          setNewEvent={setNewEvent}
          selectedDate={selectedDate}
          onAddEvent={handleAddEvent}
        />
      </div>
    </div>
  );
};

export default Calendar;
