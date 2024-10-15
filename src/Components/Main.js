import React, { useReducer } from 'react';
import { Outlet } from 'react-router-dom';

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Outlet context={{ availableTimes, dispatch }} />
    </main>
  );
}

export default Main;
