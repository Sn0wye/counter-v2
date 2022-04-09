import '../styles/base.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { InputContext } from '../content/InputContext';

const Home = () => {
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInput = ({ target }) => {
    if (target.value !== '00:00') {
      const timeArray = target.value.split(':');
      const hoursInMiliseconds = timeArray[0] * 60 * 60;
      const minutesInSeconds = timeArray[1] * 60;
      const allSeconds = hoursInMiliseconds + minutesInSeconds;
      setInputValue(allSeconds);
    }
  };

  return (
    <div className="container">
      <h1>Counter</h1>
      <form>
        <label htmlFor="data">How much time do you want to count?</label>
        <div id="error">Please insert a value greater than zero!</div>
        <input
          onChange={handleInput}
          type="time"
          placeholder="00:00"
          className="timeInput"
        />
        <Link to="/counter">
          <button
            disabled={!inputValue}
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
