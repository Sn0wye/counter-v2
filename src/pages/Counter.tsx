import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router-dom";


function Counter() {

  const { time }: any = useParams();

  const INITIAL_TIME_IN_SECONDS = 25 * 60; //25 minutes
  const [secondsAmount, setSecondsAmount] = useState(INITIAL_TIME_IN_SECONDS);

  const minutes = Math.floor(secondsAmount / 60);
  const seconds = secondsAmount % 60;

  useEffect(() => {
    console.log(time)
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
      <span style={{
        color: "white"
      }
      }>{time}</span>
      <span>{String(minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(seconds).padStart(2, '0')}</span>
    </div>
  )
}

export default Counter;