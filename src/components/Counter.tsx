import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../styles/counter.css'


function Counter() {

  const INITIAL_TIME_IN_SECONDS = 25 * 60; //25 minutes need to change for the input value
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIME_IN_SECONDS);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    // console.log(time)
  }, [])

  useEffect(() => {
    if (secondsAmount === 0) {
      alert("Finished")
      return;
    }
    setTimeout(() => {
      setSecondsAmount(state => state - 1)
    }, 1000)
  }, [secondsAmount])

  return (
    <div className="Counter">
      <Navbar />
      <div className="container">
        <label htmlFor="Remains" className="remains">Remains</label>
        {/* <span className="digit">{String(hours).padStart(2, '0')}</span> */}
        <span className="digit">:</span>
        <span className="digit">{String(minutes).padStart(2, '0')}</span>
        <span className="digit">:</span>
        <span className="digit">{String(seconds).padStart(2, '0')}</span>
        <span id="hour" className="text">Hours</span>
        <span id="min" className="text">Minutes</span>
        <span id="sec" className="text">Seconds</span>
      </div>
    </div>
  )
}

export default Counter;