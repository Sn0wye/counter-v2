import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../styles/counter.css";

function Counter({ inputValue }) {
  const initialTime = inputValue;
  const [counter, setCounter] = useState(null);
  const [actualTime, setActualTime] = useState(null);

  useEffect(() => {
    setCounter(initialTime);
  }, []);

  useEffect(() => {
    if (counter === 0) {
      return alert("Finished");
    } else {
      setTimeout(() => {
        setActualTime(convertToTime(counter));
        setCounter(counter - 1);
      }, 1000);
    }
  }, [counter]);

  function convertToTime(time) {
    const hours = String(Math.floor(time / 60 / 60)).padStart(2, "0");
    const minutes = String(Math.floor((time / 60 / 60 - hours) * 60)).padStart(
      2,
      "0"
    );
    const seconds = String(
      Math.floor(((time / 60 / 60 - hours) * 60 - minutes) * 60)
    ).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className="Counter">
      <main>
        <div className="container-counter">
          <label htmlFor="Remains" className="remains">
            Remains
          </label>
          <section className="digit">
            <span>{actualTime}</span>
          </section>
          <section className="text">
            <span id="hour" className="text">
              Hours
            </span>
            <span id="min" className="text">
              Minutes
            </span>
            <span id="sec" className="text">
              Seconds
            </span>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Counter;
