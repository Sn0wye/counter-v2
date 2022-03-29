import '../styles/base.css'
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li id="logo"><a href="/">Counter</a></li>
        <li><button id="resetBtn">Reset</button></li>
      </ul>
    </div>
  );
}

export default Navbar;