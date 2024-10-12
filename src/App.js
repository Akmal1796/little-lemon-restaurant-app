import React, { useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Header from './Components/Header';
import Home from './Home';
import About from './About';
import Reservation from './Reservation';
import OrderOnline from './OrderOnline';
import Login from './Login';

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return state;
    default:
      return state;
  }
}


function App() {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reservation" element={<Reservation availableTimes={availableTimes} dispatch={dispatch} />} />
          <Route path="order" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
