import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import '../styles/counter.css'


function Counter() {

  const INITIAL_TIME_IN_SECONDS = 75 * 60; //1:15:00  1:14:59
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIME_IN_SECONDS);

  const hours = Math.floor(secondsAmount / 60 / 60);
  const minutes = Math.floor((secondsAmount / 60 / 60 - hours) * 60);
  const seconds = Math.floor(((secondsAmount / 60 / 60 - hours) * 60 - minutes) * 60);

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
      <main>
        <div className="container-counter">
          <label htmlFor="Remains" className="remains">Remains</label>
          <section className="digit">
            <span>{String(hours).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(seconds).padStart(2, '0')}</span>
          </section>
          <section className="text">
            <span id="hour" className="text">Hours</span>
            <span id="min" className="text">Minutes</span>
            <span id="sec" className="text">Seconds</span>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Counter;