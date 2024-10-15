import React, { useState, useEffect } from 'react';
import "./Booking.css";

const fetchAPI = (date) => {
  let result = [];
  const seed = date.getDate();
  let random = seededRandom(seed);

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

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const submitAPI = async (formData) => {
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

function BookingForm({ dispatch }) {
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: '',
    guests: 1,
    occasion: '',
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const initializeTimes = () => {
    const today = getCurrentDate();
    if (!formData.selectedDate) {
      console.log('No date selected, setting to today:', today);
      setFormData({ ...formData, selectedDate: today });
    }
    fetchAvailableTimes(today);
  };

  const fetchAvailableTimes = (date) => {
    console.log('Fetching available times for date:', date);
    const times = fetchAPI(new Date(date));
    console.log('Available times:', times);
    setAvailableTimes(times);
    if (times.length > 0) {
      setFormData((prevData) => ({ ...prevData, selectedTime: times[0] }));
    }
  };

  const updateTimes = (date) => {
    console.log('Date selected:', date);
    setFormData({ ...formData, selectedDate: date });
    fetchAvailableTimes(date);
    dispatch({ type: 'UPDATE_TIMES', payload: date });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'selectedDate') {
      updateTimes(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
    if (submitAPI(formData)) {
      console.log('Form submitted successfully with data:', formData);
    } else {
      console.error('Form submission failed');
    }
  };

  useEffect(() => {
    console.log('Component mounted, initializing times');
    initializeTimes();
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
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
        min={getCurrentDate()}
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
