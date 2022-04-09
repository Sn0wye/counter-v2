import { useContext } from 'react';
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
          <button id="resetBtn">Reset</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
