import { Link } from 'react-router-dom';
import '../styles/base.css'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li id="logo">
          <Link to="/">Counter</Link></li>
        <li><button id="resetBtn">Reset</button></li>
      </ul>
    </div>
  );
}

export default Navbar;