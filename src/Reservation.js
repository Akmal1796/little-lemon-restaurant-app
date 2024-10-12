import React from 'react';
import BookingForm from './Components/BookingForm';

function Reservation({ availableTimes, dispatch }) {
  return (
    <section className='booking-form-container'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default Reservation;