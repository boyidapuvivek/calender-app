import React from "react";
import { X } from "lucide-react";
import { EVENT_TYPES } from "../utils/eventUtils";

const AddEventModal = ({
  showModal,
  onClose,
  newEvent,
  setNewEvent,
  selectedDate,
  onAddEvent,
}) => {
  if (!showModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent();
  };

  const formatDateForInput = (date) => {
    if (!date) return "";
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleDateChange = (e) => {
    const dateString = e.target.value;
    if (!dateString) return;

    const [year, month, day] = dateString.split("-").map(Number);
    const selectedDate = new Date(year, month - 1, day);

    if (newEvent.date) {
      selectedDate.setHours(newEvent.date.getHours());
      selectedDate.setMinutes(newEvent.date.getMinutes());
    }
    setNewEvent({ ...newEvent, date: selectedDate });
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-xl max-w-md w-full p-6'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-xl font-semibold'>Add New Event</h3>
          <button
            onClick={onClose}
            className='text-gray-400 hover:text-gray-600'>
            <X size={24} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Event Title
            </label>
            <input
              type='text'
              value={newEvent.title}
              onChange={(e) =>
                setNewEvent({ ...newEvent, title: e.target.value })
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              placeholder='Enter event title'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Date
            </label>
            <input
              type='date'
              value={formatDateForInput(newEvent.date || selectedDate)}
              onChange={handleDateChange}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              required
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Time
            </label>
            <input
              type='time'
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Category
            </label>
            <select
              value={newEvent.type}
              onChange={(e) =>
                setNewEvent({ ...newEvent, type: e.target.value })
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'>
              {EVENT_TYPES.map(({ type, label }) => (
                <option
                  key={type}
                  value={type}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              Description
            </label>
            <textarea
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              rows='3'
              placeholder='Event description (optional)'
            />
          </div>

          <div className='flex gap-3 pt-4'>
            <button
              type='submit'
              disabled={!newEvent.title}
              className='flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'>
              Add Event
            </button>
            <button
              type='button'
              onClick={onClose}
              className='flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventModal;
