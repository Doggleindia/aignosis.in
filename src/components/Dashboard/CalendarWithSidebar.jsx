import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarWithSidebar = () => {
  const events = [
    { title: "Behavioral Session", start: "2024-02-01T07:00:00" },
    { title: "Team Meeting", start: "2024-02-03T10:00:00" },
    { title: "Lunch with Client", start: "2024-02-07T14:00:00" },
    { title: "Performance Review", start: "2024-02-12T16:00:00" },
  ];

  return (
    <div className="min-h-screen bg-[#2B1B2D] text-white flex flex-col md:flex-row">
      

      {/* Main Calendar */}
      <div className="flex-1 p-4">
        <div className="flex justify-between mb-4">
          {/* Month and Year Selectors */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
            <select className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
              <option>Month</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index} className="text-[#2B1B2D]">
                  {month}
                </option>
              ))}
            </select>
            <select className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
              <option>Year</option>
              {[2024, 2025, 2026].map((year, index) => (
                <option key={index} className="text-[#2B1B2D]">
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
            <button className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
              Filter
            </button>
            <button className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded">
              Send Reminder
            </button>
          </div>
        </div>

        {/* FullCalendar Integration */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          headerToolbar={{
            left: "",
            center: "title",
            right: "",
          }}
          eventColor="#9C00AD"
          contentHeight="auto"
          dayHeaderClassNames="text-purple-300"
        />
      </div>
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-[#312632]">
        <h2 className="text-pink-500 text-lg font-bold">This Week</h2>
        <div className="mt-4 space-y-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="p-4 border border-purple-700 rounded bg-[#201E33]"
            >
              <p className="text-pink-500 font-bold text-sm">
                {new Date(event.start).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <h3 className="font-medium text-lg">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarWithSidebar;
