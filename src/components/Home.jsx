import "../styles/base.css";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = ({ setInputValue }) => {
  const [buttonIsActive, toggleButtonIsActive] = useState(false);

  function handleInput({ target }) {
    if (target.value !== "00:00") {
      const timeArray = target.value.split(":");
      const hoursInSeconds = timeArray[0] * 60 * 60;
      const minutesInSeconds = timeArray[1] * 60;
      const allSeconds = hoursInSeconds + minutesInSeconds;
      setInputValue(allSeconds);
      toggleButtonIsActive(true);
    }
  }
  return (
    <div className="container">
      <form>
        <label htmlFor="data">How much time do you want to count?</label>
        <div id="error">Please insert a value greater than zero!</div>
        <input onChange={handleInput} type="time" className="timeInput" />
        <Link to="/counter">
          <button
            disabled={!buttonIsActive}
            className="startButton"
            data-key="Enter"
          >
            Start
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Home;
