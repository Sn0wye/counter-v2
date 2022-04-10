import counterStore from '../stores/CounterStore';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import '../styles/base.css';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li id="logo">
          <Link to="/">Counter</Link>
        </li>
        <li>
          <button id="resetBtn" onClick={counterStore.esetCounter}>
            Reset
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default observer(Navbar);
