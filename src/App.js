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

function App() {
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
          <Route path="reservation" element={<Reservation />} />
          <Route path="order" element={<OrderOnline />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
