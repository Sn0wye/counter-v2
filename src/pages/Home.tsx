import '../styles/base.css';
import '../styles/home.css';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Home = () => {

  const [inputValue, setInputValue] = useState(false);

  const handleInput = ({ target }: any) => {
    setInputValue(target.value);
  }

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
          className="timeInput" />
        <Link to={`/counter/${inputValue}`}>
          <button
            disabled={!inputValue}
            className="startButton"
            data-key="Enter">Start count</button>
        </Link>
      </form>
    </div>
  )
}

export default Home;