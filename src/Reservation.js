import React from 'react';
import BookingForm from './Components/BookingForm';
import { useOutletContext } from 'react-router-dom'; // To retrieve availableTimes and dispatch

function Reservation() {
  // Get availableTimes and dispatch from the Outlet context
  const { availableTimes, dispatch } = useOutletContext();

  return (
    <section className='booking-form-container'>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default Reservation;
