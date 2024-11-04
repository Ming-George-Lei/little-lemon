import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

const Main = () => {

  const navigate = useNavigate();

  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function(date) {
      let result = [];
      let random = seededRandom(date.getDate());

      for(let i = 17; i <= 23; i++) {
          if(random() < 0.5) {
              result.push(i + ':00');
          }
          if(random() < 0.5) {
              result.push(i + ':30');
          }
      }
      return result;
  };
  const submitAPI = function(formData) {
      return true;
  };

  const onSubmit = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmation');
    }
  };

  const updateTimes = (times, date) => {
    return fetchAPI(date);
  };

  const initialTimes = fetchAPI(new Date()); 

  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  return (
    <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage availableTimes = {availableTimes} dispatch = {dispatch} submit = {onSubmit}/>}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
    </Routes>
  )
}

export default Main;