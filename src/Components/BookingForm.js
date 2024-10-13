import React, { useState, useEffect } from 'react';
import "./Booking.css";

// Function to simulate fetching available times from the API based on the selected date
const fetchAPI = (date) => {
  let result = [];
  const seed = date.getDate();  // Use the date's day of the month as the seed
  let random = seededRandom(seed); // Create a seeded random function

  // Generate time slots based on the seeded random function
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

// Function to create a seeded random number generator based on a given seed
const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const submitAPI = async (formData) => {
  // Implement your API submission logic here
  try {
    const response = await fetch('/api/submit-booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (data.success) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form submission failed:', data.message);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

// The BookingForm component
function BookingForm({ dispatch }) {
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: '',
    guests: 1,
    occasion: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  // Fetch available times based on the selected date
  const initializeTimes = () => {
    const today = getCurrentDate(); // Current date in 'YYYY-MM-DD' format
    if (!formData.selectedDate) {
      console.log('No date selected, setting to today:', today);
      setFormData({ ...formData, selectedDate: today });
    }
    fetchAvailableTimes(today); // Initialize times with today's date
  };

  // Fetch available times from the API and update the state
  const fetchAvailableTimes = (date) => {
    console.log('Fetching available times for date:', date);
    const times = fetchAPI(new Date(date)); // Call the API with the selected date
    console.log('Available times:', times);
    setAvailableTimes(times); // Set the available times
    if (times.length > 0) {
      setFormData((prevData) => ({ ...prevData, selectedTime: times[0] })); // Default to the first available time
    }
  };

  // Update available times when a new date is selected
  const updateTimes = (date) => {
    console.log('Date selected:', date);
    setFormData({ ...formData, selectedDate: date }); // Update selectedDate in formData
    fetchAvailableTimes(date);
    dispatch({ type: 'UPDATE_TIMES', payload: date }); // Dispatch date change to update the times
  };

  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // If date changes, update the available times
    if (name === 'selectedDate') {
      updateTimes(value);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
    if (submitAPI(formData)) {
      console.log('Form submitted successfully with data:', formData);
    } else {
      console.error('Form submission failed');
    }
  };

  // Initialize times when the component mounts
  useEffect(() => {
    console.log('Component mounted, initializing times');
    initializeTimes();
  }, []); // Empty dependency array ensures this only runs once, when the component mounts

  // Get today's date in 'YYYY-MM-DD' format for the minimum date
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`; // Returns the date in 'YYYY-MM-DD' format
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Make a Reservation</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="selectedDate"
        value={formData.selectedDate}
        onChange={handleInputChange}
        min={getCurrentDate()} // Ensure the min date is set to today's date
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="selectedTime"
        value={formData.selectedTime}
        onChange={handleInputChange}
        required
      >
        {availableTimes.length > 0 ? availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        )) : <option value="">No times available</option>}
      </select>

      <div className="form-group">
        <div className="form-item">
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleInputChange}
            min="1"
            max="10"
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
      </div>

      <input type="submit" value="Make Your reservation" className='form-submit-btn' />
    </form>
  );
}

export default BookingForm;
