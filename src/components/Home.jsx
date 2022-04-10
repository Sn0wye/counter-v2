import '../styles/base.css';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import CounterStore from '../stores/CounterStore';
import { observer } from 'mobx-react-lite';

const Home = () => {
  return (
    <div className="container">
      <h1>Counter</h1>
      <form>
        <label htmlFor="data">How much time do you want to count?</label>
        <div id="error">Please insert a value greater than zero!</div>
        <input
          onChange={CounterStore.handleInput}
          type="time"
          placeholder="00:00"
          className="timeInput"
        />
        <Link to="/counter">
          <button
            disabled={!CounterStore.isEnabled}
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

export default observer(Home);
