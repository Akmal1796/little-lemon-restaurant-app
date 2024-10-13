import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';

// Initialize times (you can expand this logic later)
export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

// Reducer function to update times based on date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return the same available times regardless of the date
      return initializeTimes();
    default:
      return state;
  }
};

const Main = () => {
  // Set up useReducer hook for availableTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      {/* Pass availableTimes and dispatch to children */}
      <Outlet context={{ availableTimes, dispatch }} />
    </main>
  );
}

export default Main;
