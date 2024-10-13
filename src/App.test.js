import { render, screen } from '@testing-library/react';
import BookingForm from './Components/BookingForm';
import { initializeTimes, updateTimes } from './Components/Main';

// Test for the heading in BookingForm component
test('renders the heading "Make a Reservation"', () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText(/Make a Reservation/i);
  expect(headingElement).toBeInTheDocument();
});

// Unit test for initializeTimes function
test('initializeTimes returns the correct initial times', () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

// Unit test for updateTimes function
test('updateTimes returns the same state if no change is made', () => {
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  const action = { type: 'UPDATE_TIMES', payload: "2024-10-01" };

  const result = updateTimes(initialState, action);
  expect(result).toEqual(initialState);
});
