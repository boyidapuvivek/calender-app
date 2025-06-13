import React from "react";
import { Clock, Briefcase, Users, Heart, Plane, Home } from "lucide-react";
import {
  getTodayEvents,
  getUpcomingEvents,
  EVENT_TYPES,
} from "../utils/eventUtils";

const Sidebar = ({ events }) => {
  const today = new Date();
  const todayEvents = getTodayEvents(events, today);
  const upcomingEvents = getUpcomingEvents(events, today);

  const eventTypeIcons = {
    work: <Briefcase size={16} />,
    personal: <Users size={16} />,
    social: <Users size={16} />,
    health: <Heart size={16} />,
    family: <Home size={16} />,
    travel: <Plane size={16} />,
  };

  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl shadow-sm p-6'>
        <h3 className='text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2'>
          <Clock size={20} />
          Today's Events
        </h3>
        {todayEvents.length === 0 ? (
          <p className='text-gray-500 text-sm'>No events today</p>
        ) : (
          <div className='space-y-3'>
            {todayEvents.map((event) => (
              <div
                key={event.id}
                className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg'>
                <div className='text-blue-600 mt-1'>
                  {eventTypeIcons[event.type]}
                </div>
                <div className='flex-1 min-w-0'>
                  <h4 className='font-medium text-gray-800 truncate'>
                    {event.title}
                  </h4>
                  <p className='text-sm text-gray-600'>{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='bg-white rounded-xl shadow-sm p-6'>
        <h3 className='text-lg font-semibold text-gray-800 mb-4'>
          Upcoming Events
        </h3>
        <div className='space-y-3'>
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className='flex items-start gap-3'>
              <div className='text-gray-400 mt-1'>
                {eventTypeIcons[event.type]}
              </div>
              <div className='flex-1 min-w-0'>
                <h4 className='font-medium text-gray-800 truncate'>
                  {event.title}
                </h4>
                <p className='text-sm text-gray-600'>
                  {new Date(event.date).toLocaleDateString()} at {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-sm p-6'>
        <h3 className='text-lg font-semibold text-gray-800 mb-4'>
          Event Categories
        </h3>
        <div className='space-y-2'>
          {EVENT_TYPES.map(({ type, label, color }) => (
            <div
              key={type}
              className='flex items-center gap-3'>
              <div className={`w-3 h-3 rounded-full ${color}`}></div>
              <span className='text-sm text-gray-700'>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
