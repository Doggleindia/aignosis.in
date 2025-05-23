import React, { useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CalendarWithSidebar = () => {
  const token = localStorage.getItem('authToken');
  const API_BASE_URL = import.meta.env.VITE_MAIN_BACKEND;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [therapyName, setTherapyName] = useState('');
  const [timing, setTiming] = useState('');
  const [doctorId, setDoctorId] = useState('678fe05cdb9884def9c49eb0'); // Assuming doctorId is fetched or available

  const events = [
    { title: 'Behavioral Session', start: '2024-02-01T07:00:00' },
    { title: 'Team Meeting', start: '2024-02-03T10:00:00' },
    { title: 'Lunch with Client', start: '2024-02-07T14:00:00' },
    { title: 'Performance Review', start: '2024-02-12T16:00:00' },
  ];

  const generateTimeSlots = (start, end) => {
    const timeSlots = [];
    let current = new Date(`1970-01-01T${convertTo24Hour(start)}:00`);
    const endTime = new Date(`1970-01-01T${convertTo24Hour(end)}:00`);

    while (current < endTime) {
      const next = new Date(current);
      next.setHours(current.getHours() + 1);
      timeSlots.push(`${formatTime(current)} - ${formatTime(next)}`);
      current = next;
    }
    return timeSlots;
  };

  const convertTo24Hour = (time) => {
    const [hour, modifier] = time.split(' ');
    let [hours, minutes] = hour.split(':');
    if (modifier === 'PM' && hours !== '12') hours = parseInt(hours, 10) + 12;
    if (modifier === 'AM' && hours === '12') hours = '00';
    return `${hours}:${minutes}`;
  };

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHour = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHour}:${minutes} ${ampm}`;
  };

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedDate(null);
  };

  const handleDone = async () => {
    console.log();

    if (!therapyName || !timing || !doctorId) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (!token) {
      toast.error('You must be logged in to book a session.');
      return;
    }
    console.log(therapyName);
    console.log(timing);
    console.log(doctorId);

    try {
      // Make the POST request to the backend
      const response = await axios.post(
        `${API_BASE_URL}/api/assessment/purchase`,
        {
          therapyName,
          timing,
          doctorId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure token is sent in the headers
          },
        }
      );
      toast.success(response.data.message);
      closePopup();
    } catch (error) {
      toast.error('Error booking session.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#2B1B2D] text-white md:flex-row">
      <ToastContainer />
      <div className="flex-1 p-4">
        <div className="mb-4 flex justify-between">
          {/* Month and Year Selectors */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <select
              className="rounded border border-[#B740A1] bg-transparent px-2 py-2 text-white"
              onChange={(e) => setTherapyName(e.target.value)}
            >
              <option className="bg-[#312632] text-white">Therapy Type</option>
              <option className="bg-[#312632] text-white">Assessments & Evaluation</option>
              <option className="bg-[#312632] text-white">Speech & Language</option>
              <option className="bg-[#312632] text-white">Behaviour Therapy</option>
              <option className="bg-[#312632] text-white">Occupational Therapy</option>
              <option className="bg-[#312632] text-white">Special Education</option>
            </select>
            {/* <select
                            className="border bg-transparent px-5 border-[#B740A1] text-white p-2 rounded"
                            onChange={(e) => setDoctorId(e.target.value)} // assuming doctorId is selected from a list
                        >
                            <option>Doctor</option>
                            <option className="bg-[#312632] text-white" value="1">Dr. Smith</option>
                            <option className="bg-[#312632] text-white" value="2">Dr. John</option>
                        </select> */}
          </div>
        </div>
        {/* FullCalendar Integration */}
        <div className="z-0">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            headerToolbar={{
              left: '',
              center: 'title',
              right: '',
            }}
            eventColor="#9C00AD"
            contentHeight="auto"
            dayHeaderClassNames="text-purple-300"
            dateClick={handleDateClick}
          />
        </div>
      </div>
      {/* Sidebar */}
      <div className="w-full bg-[#312632] p-4 md:w-1/4">
        <h2 className="text-lg font-bold text-pink-500">This Week</h2>
        <div className="mt-4 space-y-4">
          {events.map((event, index) => (
            <div key={index} className="rounded border border-purple-700 bg-[#201E33] p-4">
              <p className="text-sm font-bold text-pink-500">
                {new Date(event.start).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
              <h3 className="text-lg font-medium">{event.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-3xl bg-[#2B1B2D] px-[5vw] py-[4vw] text-white shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Select Time & Therapy</h2>
            <p className="mb-4">Selected Date: {selectedDate}</p>
            <div className="space-y-8">
              {/* Time Dropdown */}
              <div className="space-y-4">
                <label className="block font-medium text-white">Select Time</label>
                <select
                  className="w-full rounded-lg border border-[#B740A1] bg-[#312632] p-3 px-5 text-white"
                  onChange={(e) => setTiming(e.target.value)}
                >
                  <option className="bg-[#312632] text-white">Select Time</option>
                  {generateTimeSlots('10:00 AM', '10:00 PM').map((slot, index) => (
                    <option key={index} className="bg-[#312632] text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-10 flex justify-start space-x-4">
              <button className="rounded border border-[#B740A1] p-2 px-5 text-white" onClick={closePopup}>
                Cancel
              </button>
              <button className="rounded border border-[#B740A1] bg-pink-500 p-2 px-5 text-white" onClick={handleDone}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarWithSidebar;
