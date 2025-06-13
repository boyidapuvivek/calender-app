import { isSameDay } from "./dateUtils";

export const getDayEvents = (date, events) => {
  return events.filter((event) => isSameDay(new Date(event.date), date));
};

export const getOverlappingEvents = (events) => {
  const overlapping = new Set();
  for (let i = 0; i < events.length; i++) {
    for (let j = i + 1; j < events.length; j++) {
      if (events[i].time === events[j].time) {
        overlapping.add(events[i].id);
        overlapping.add(events[j].id);
      }
    }
  }
  return overlapping;
};

export const getUpcomingEvents = (events, today, limit = 5) => {
  return events
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, limit);
};

export const getTodayEvents = (events, today) => {
  return events.filter((event) => isSameDay(new Date(event.date), today));
};

export const INITIAL_EVENTS = [
  {
    id: 1,
    title: "Team Meeting",
    date: "2025-06-15",
    time: "10:00 AM",
    type: "work",
    description: "Weekly team sync",
  },
  {
    id: 2,
    title: "Doctor Appointment",
    date: "2025-06-16",
    time: "2:00 PM",
    type: "health",
    description: "Annual checkup",
  },
  {
    id: 3,
    title: "Birthday Party",
    date: "2025-06-20",
    time: "6:00 PM",
    type: "social",
    description: "Sarah's birthday celebration",
  },
  {
    id: 4,
    title: "Vacation Planning",
    date: "2025-06-22",
    time: "1:00 PM",
    type: "travel",
    description: "Plan summer vacation",
  },
  {
    id: 5,
    title: "Family Dinner",
    date: "2025-06-25",
    time: "7:00 PM",
    type: "family",
    description: "Monthly family gathering",
  },
];

export const EVENT_TYPES = [
  { type: "work", label: "Work", color: "purple", color: "bg-purple-600" },
  {
    type: "personal",
    label: "Personal",

    color: "bg-blue-600",
  },
  {
    type: "social",
    label: "Social",

    color: "bg-orange-600",
  },
  {
    type: "health",
    label: "Health",

    color: "bg-green-600",
  },
  { type: "family", label: "Family", color: "bg-pink-600" },
  { type: "travel", label: "Travel", color: "bg-cyan-600" },
];
