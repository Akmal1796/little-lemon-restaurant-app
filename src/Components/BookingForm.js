import React, { useState } from 'react';
import "./Booking.css";

function BookingForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    selectedDate: '',
    selectedTime: availableTimes[0] || '',
    guests: 1,
    occasion: ''
  });

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'selectedDate') {
      dispatch({ type: 'UPDATE_TIMES', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
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
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>
            {time}
          </option>
        ))}
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

      <input type="submit" value="Make Your reservation" className='form-submit-btn'/>
    </form>
  );
}

export default BookingForm;
